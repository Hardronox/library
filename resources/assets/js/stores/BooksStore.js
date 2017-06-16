
import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import AppActions from '../actions/AppActions';


let _books = [];

class BooksStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
        //this.getBooksAttempt = this.getBooksAttempt.bind(this);
    }

    emitChange() {
        this.emit('change');
    }

    getAll() {
        return _books;
    }

    getAllBooksAttempt() {
        $.get({
            url: '/get-all-books',
            dataType: 'json',
            cache: false,
            success: function(data) {

                _books= data;
                AppActions.allBooksLoaded(_books);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props, status, err);
            }.bind(this)
        });
    }

    getBooksByCategoryAttempt(name) {
        $.get({
            url: '/get-books-by-category',
            dataType: 'json',
            data:{
                name:name
            },
            cache: false,
            success: function(data) {
                _books= data;
                AppActions.BooksByCategoryLoaded(_books);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props, status, err);
            }.bind(this)
        });
    }

    getBooksBySearchAttempt(search) {
        $.get({
            url: '/get-books-by-category',
            dataType: 'json',
            data:{
                search:search
            },
            cache: false,
            success: function(data) {
                _books= data;
                AppActions.BooksByCategoryLoaded(_books);

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

            case 'GET_ALL_BOOKS':
                this.getAllBooksAttempt(action.value);
                break;
            case 'ALL_BOOKS_LOADED':
                _books = action.value;
                break;

            case 'GET_BOOKS_BY_CATEGORY':
                this.getBooksByCategoryAttempt(action.value);
                break;
            case 'BOOKS_BY_CATEGORY_LOADED':
                _books = action.value;
                break;

            case 'GET_BOOKS_BY_CATEGORY':
                this.getBooksByCategoryAttempt(action.value);
                break;
            case 'BOOKS_BY_CATEGORY_LOADED':
                _books = action.value;
                break;
        }

        this.emitChange();

        return true;
    }
}

export default new BooksStore();

