import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import CategoriesApi from '../api/Categories';


let _categories = [];
let _loading=true;

class CategoriesStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange() {
        this.emit('change');
    }

    getAll() {
        return _categories;
    }

    getStatus() {
        return _loading;
    }

    getCategoriesAttempt() {
        CategoriesApi.getCategoriesAttempt();
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


            case 'CREATE_SINGLE_CATEGORY_ATTEMPT':
                this.createSingleCategoryAttempt(action.value);
                break;
            case 'CATEGORY_CREATED':
                _categories = action.value;
                break;


            case 'UPDATE_SINGLE_CATEGORY_ATTEMPT':
                this.updateSingleCategoryAttempt(action.value);
                break;

        }

        this.emitChange();

        return true;
    }
}

export default new CategoriesStore();

