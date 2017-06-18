import AppDispatcher from '../dispatchers/AppDispatcher';

class AppActions {

    getAllBooksAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'GET_ALL_BOOKS',
            value: data
        });
    }

    allBooksLoaded(data) {
        AppDispatcher.dispatch({
            actionType: 'ALL_BOOKS_LOADED',
            value: data
        });
    }
    // --------------------------------------------------------
    getBooksByCategoryAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'GET_BOOKS_BY_CATEGORY',
            value: data
        });
    }

    booksByCategoryLoaded(data) {
        AppDispatcher.dispatch({
            actionType: 'BOOKS_BY_CATEGORY_LOADED',
            value: data
        });
    }
    // --------------------------------------------------------

    getBooksBySearchAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'GET_BOOKS_BY_SEARCH',
            value: data
        });
    }

    booksBySearchLoaded(data) {
        AppDispatcher.dispatch({
            actionType: 'BOOKS_BY_SEARCH_LOADED',
            value: data
        });
    }
    // --------------------------------------------------------

    getSingleBookAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'GET_SINGLE_BOOK',
            value: data
        });
    }

    singleBookLoaded(data) {
        AppDispatcher.dispatch({
            actionType: 'SINGLE_BOOK_LOADED',
            value: data
        });
    }
    // --------------------------------------------------------

    getCategoriesAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'GET_CATEGORIES',
            value: data
        });
    }

    categoriesLoaded(data) {
        AppDispatcher.dispatch({
            actionType: 'CATEGORIES_LOADED',
            value: data
        });
    }
}



export default new AppActions()