
import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import AppActions from '../AppActions';


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
        return _books;
    }

    getCategories() {
        $.get({
            url: '/get-categories',

            dataType: 'json',
            cache: false,
            success: function(data) {

                _books= data;
                //console.log(_books);
                AppActions.booksLoaded(_books);

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

            case 'GET_BOOKS':
                this.getCategories(action.value);
                break;
            case 'BOOKS_LOADED':
                _books = action.value;
                break;

        }

        this.emitChange();

        return true;
    }
}

export default new CategoriesStore();

