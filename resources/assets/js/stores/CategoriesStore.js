import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import CategoriesApi from '../api/Categories';


let _category = {};
let _categories = [];
let _loading = true;
let _formErrors = [];

class CategoriesStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange() {
        this.emit('change');
    }

    getSingleCategory() {
        return _category;
    }

    getAll() {
        return _categories;
    }

    getStatus() {
        return _loading;
    }

    getFormErrors() {
        return _formErrors;
    }

    unsetFormErrors() {
        _formErrors = [];
    }

    getCategoriesAttempt() {
        CategoriesApi.getCategoriesAttempt();
    }

    getSingleCategoryAttempt(id) {
        CategoriesApi.getSingleCategoryAttempt(id);
    }

    createSingleCategoryAttempt(name) {
        CategoriesApi.createSingleCategoryAttempt(name);
    }

    updateSingleCategoryAttempt(data) {
        CategoriesApi.updateSingleCategoryAttempt(data);
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {

            case 'GET_CATEGORIES_ATTEMPT':
                this.getCategoriesAttempt(action.value);
                break;
            case 'CATEGORIES_LOADED':
                _categories = action.value;
                _loading = false;
                break;

            case 'GET_SINGLE_CATEGORY_ATTEMPT':
                this.getSingleCategoryAttempt(action.value);
                break;
            case 'SINGLE_CATEGORY_LOADED':
                _category = action.value;
                _loading = false;
                break;


            case 'CREATE_SINGLE_CATEGORY_ATTEMPT':
                this.createSingleCategoryAttempt(action.value);
                break;
            case 'SINGLE_CATEGORY_CREATED':
                _categories = action.value;
                console.log('category created');
                window.location.href = "/";
                break;
            case 'SINGLE_CATEGORY_NOT_CREATED':
                _formErrors = action.value;
                _loading = false;
                break;


            case 'UPDATE_SINGLE_CATEGORY_ATTEMPT':
                this.updateSingleCategoryAttempt(action.value);
                break;
            case 'SINGLE_CATEGORY_UPDATED':
                _categories = action.value;
                window.location.href = "/";
                break;
            case 'SINGLE_CATEGORY_NOT_UPDATED':
                _formErrors = action.value;
                _loading = false;
                break;
        }
        this.emitChange();

        return true;
    }
}

export default new CategoriesStore();

