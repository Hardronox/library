import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import AppActions from '../actions/AppActions';
import axios from 'axios';

let _books = [];

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

    getAllBooksAttempt() {

        //  let ins=axios.create({
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     }
        // });
        //
        //
        // ins.get('/get-all-books')
        //     .then(function (response) {
        //         console.log(response);
        //         _books= response.data;
        //         AppActions.allBooksLoaded(_books);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });

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
                name
            },
            cache: false,
            success: function(data) {
                _books= data;
                AppActions.booksByCategoryLoaded(_books);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props, status, err);
            }.bind(this)
        });
    }

    getSingleBookAttempt(id) {
        $.get({
            url: '/get-single-book',
            dataType: 'json',
            data:{
                id
            },
            cache: false,
            success: function(data) {
                console.log(data);
                _books= data;
                AppActions.singleBookLoaded(_books);

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
                search
            },
            cache: false,
            success: function(data) {
                _books= data;
                AppActions.booksBySearchLoaded(_books);

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




            case 'GET_SINGLE_BOOK':
                this.getSingleBookAttempt(action.value);
                break;
            case 'SINGLE_BOOK_LOADED':
                _books = action.value;
                break;




            case 'GET_BOOKS_BY_SEARCH':
                this.getBooksByCategoryAttempt(action.value);
                break;
            case 'BOOKS_BY_SEARCH_LOADED':
                _books = action.value;
                break;
        }

        this.emitChange();

        return true;
    }
}

export default new BooksStore();

