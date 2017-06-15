import AppDispatcher from './AppDispatcher';

class AppActions {

    getBooksAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'GET_BOOKS',
            value: data
        });

        // AppDispatcher.dispatch({
        //     actionType: 'APPROVE_ARTICLE',
        //     value: data
        // });
    }

    booksLoaded(data) {
        AppDispatcher.dispatch({
            actionType: 'BOOKS_LOADED',
            value: data
        });
    }
}



export default new AppActions()