import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import AppActions from '../actions/AppActions';
import BooksApi from '../api/Books';

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
        return _books;
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

    unsetBooks() {
        _user=[];
    }

    enableLoading() {
        _loading = true;
    }

    deleteSingleBookAttempt(id) {
        BooksApi.deleteSingleBookAttempt(id);
    }

    createSingleBookAttempt(data) {
        BooksApi.createSingleBookAttempt(data);
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {

            case 'CREATE_SINGLE_BOOK_ATTEMPT':
                this.createSingleBookAttempt(action.value);
                break;
            case 'SINGLE_BOOK_CREATED':
                console.log('sdasd');
                _formErrors=[];
                _loading=false;
                window.location.href = "/";
                break;
            case 'SINGLE_BOOK_NOT_CREATED':
                _formErrors=action.value;
                _loading=false;
                break;

            case 'DELETE_SINGLE_BOOK_ATTEMPT':
                this.deleteSingleBookAttempt(action.value);
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

