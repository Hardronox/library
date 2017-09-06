import AppDispatcher from '../dispatchers/AppDispatcher';
import { EventEmitter } from 'events';
import AppActions from '../actions/AppActions';
import BooksApi from '../api/Books';

let _books = [];
let _singleBook = [];
let _booksCount = 0;
let _loading = true;
let _formErrors = [];

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

    getSingleBook() {
      return _singleBook;
    }

    getCount() {
        return _booksCount;
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

    unsetBooks() {
        _books = [];
    }

    unsetSingleBook() {
      _singleBook = [];
    }

    enableLoading() {
        _loading = true;
    }

    getAllBooksAttempt() {
        BooksApi.getAllBooksAttempt();
    }

    getBooksByCategoryAttempt(data) {
        BooksApi.getBooksByCategoryAttempt(data);
    }

    getSingleBookAttempt(id) {
        BooksApi.getSingleBookAttempt(id);
    }

    deleteSingleBookAttempt(id) {
        BooksApi.deleteSingleBookAttempt(id);
    }

    createSingleBookAttempt(data) {
        BooksApi.createSingleBookAttempt(data);
    }

    updateSingleBookAttempt(data) {
        BooksApi.updateSingleBookAttempt(data);
    }

    getBooksBySearchAttempt(search) {
        BooksApi.getBooksBySearchAttempt(search);
    }


    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {

            case 'GET_ALL_BOOKS_ATTEMPT':
                this.getAllBooksAttempt(action.value);
                break;
            case 'ALL_BOOKS_LOADED':
                _books = action.value;
                _loading = false;
                break;


            case 'GET_BOOKS_BY_CATEGORY_ATTEMPT':
                this.getBooksByCategoryAttempt(action.value);
                break;
            case 'BOOKS_BY_CATEGORY_LOADED':
                _books = action.value[0];
                _booksCount = action.value[1];
                _loading = false;
                break;


            case 'GET_SINGLE_BOOK_ATTEMPT':
                this.getSingleBookAttempt(action.value);
                break;
            case 'SINGLE_BOOK_LOADED':
                _singleBook = action.value;
                _loading = false;
                break;


            case 'CREATE_SINGLE_BOOK_ATTEMPT':
                this.createSingleBookAttempt(action.value);
                break;
            case 'SINGLE_BOOK_CREATED':
                _formErrors = [];
                _loading = false;
                window.location.href = "/";
                break;
            case 'SINGLE_BOOK_NOT_CREATED':
                _formErrors = action.value;
                _loading = false;
                break;


            case 'UPDATE_SINGLE_BOOK_ATTEMPT':
                this.updateSingleBookAttempt(action.value);
                break;
            case 'SINGLE_BOOK_UPDATED':
                _loading = false;
                window.location.href = "/";
                break;
            case 'SINGLE_BOOK_NOT_UPDATED':
                _formErrors=action.value;
                _loading=false;
                break;


            case 'DELETE_SINGLE_BOOK_ATTEMPT':
                this.deleteSingleBookAttempt(action.value);
                break;


            case 'GET_BOOKS_BY_SEARCH_ATTEMPT':
                this.getBooksBySearchAttempt(action.value);
                break;
            case 'BOOKS_BY_SEARCH_LOADED':
                _books = action.value;
                _loading = false;
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

