
import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import AppActions from '../actions/AppActions';


let _categories = [];

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

    getCategoriesAttempt() {
        $.get({
            url: '/get-categories',

            dataType: 'json',
            cache: false,
            success: function(data) {

                _categories= data;
                AppActions.categoriesLoaded(_categories);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props, status, err);
            }.bind(this)
        });
    }

    createSingleCategoryAttempt(data) {
        $.post({
            url: '/create-single-category',
            dataType: 'json',
            data: data,
            cache: false,
            success: function(data) {

                _books= data;

                AppActions.singleCategoryCreated(_books);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props, status, err);
            }.bind(this)
        });
    }

    updateSingleCategoryAttempt(data) {
        $.post({
            url: '/update-single-category',
            dataType: 'json',
            data: data,
            cache: false,
            success: function(data) {

                _books= data;

                AppActions.singleCategoryUpdated(_books);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props, status, err);
            }.bind(this)
        });
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
            case 'CATEGORY_UPDATED':
                _categories = action.value;
                break;

        }

        this.emitChange();

        return true;
    }
}

export default new CategoriesStore();

