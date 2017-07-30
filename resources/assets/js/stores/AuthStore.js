import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import AppActions from '../actions/AppActions';
import AuthApi from '../api/Auth';

let _user = [];
let _loading=true;
let _formErrors=[];

class BooksStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange() {
        this.emit('change');
    }

    getAll() {
        return _user;
    }


    getStatus() {
        return _loading;
    }

    getFormErrors() {
        return _formErrors;
    }

    unsetFormErrors() {
        _formErrors=[];
    }

    unsetUser() {
        _user=[];
    }

    enableLoading() {
        _loading = true;
    }

    registerAttempt(data) {
        AuthApi.registerAttempt(data);
    }

    loginAttempt(data) {
        AuthApi.loginAttempt(data);
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {

            case 'REGISTER_ATTEMPT':
                this.registerAttempt(action.value);
                break;
            case 'REGISTER_SUCCESS':
                _formErrors=[];
                _loading=false;
                //window.location.href = "/";
                break;
            case 'REGISTER_FAILED':
                _formErrors=action.value;
                _loading=false;
                break;

            case 'LOGIN_ATTEMPT':
                this.createSingleBookAttempt(action.value);
                break;
            case 'LOGIN_SUCCESS':
                _formErrors=[];
                _loading=false;
                window.location.href = "/";
                break;
            case 'LOGIN_FAILED':
                _formErrors=action.value;
                _loading=false;
                break;

            case 'UNSET_FORM_ERRORS':
                this.unsetFormErrors();
                break;

            case 'UNSET_FORM_SUBMITTED':
                this.unsetFormSubmitted();
                break;
        }

        this.emitChange();

        return true;
    }
}

export default new BooksStore();

