import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import AppActions from '../actions/AppActions';
import axios from 'axios';

let _books = [];
let _booksCount=0;
let _loading=true;

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

    getCount() {
        return _booksCount;
    }

    getStatus() {
        return _loading;
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

    getBooksByCategoryAttempt(data) {

        $.get({
            url: '/get-books-by-category',
            dataType: 'json',
            data:{
                name: data[0],
                page: data[1]
            },
            cache: false,
            success: function(data) {
                _books= data[0].map(function(data) {

                    data.description= data.description.substring(0, 60)+'...';
                    return data;
                });
                AppActions.booksByCategoryLoaded([_books, data[1]]);


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
            url: '/get-books-by-search',
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
                _books = action.value[0];
                _booksCount = action.value[1];
                break;




            case 'GET_SINGLE_BOOK':
                this.getSingleBookAttempt(action.value);
                break;
            case 'SINGLE_BOOK_LOADED':
                _books = action.value;
                _loading=false;
                break;




            case 'GET_BOOKS_BY_SEARCH':
                this.getBooksBySearchAttempt(action.value);
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

