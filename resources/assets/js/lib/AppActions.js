import AppDispatcher from './AppDispatcher';

class AppActions {

    getBooksAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'GET_BOOKS',
            value: data
        });
    }

    booksLoaded(data) {
        AppDispatcher.dispatch({
            actionType: 'BOOKS_LOADED',
            value: data
        });
    }

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