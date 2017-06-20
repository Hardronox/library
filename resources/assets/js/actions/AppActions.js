import AppDispatcher from '../dispatchers/AppDispatcher';

class AppActions {

    getAllBooksAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'GET_ALL_BOOKS_ATTEMPT',
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
            actionType: 'GET_BOOKS_BY_CATEGORY_ATTEMPT',
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
            actionType: 'GET_BOOKS_BY_SEARCH_ATTEMPT',
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
            actionType: 'GET_SINGLE_BOOK_ATTEMPT',
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

    createSingleBookAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'CREATE_SINGLE_BOOK_ATTEMPT',
            value: data
        });
    }

    singleBookCreated(data) {
        AppDispatcher.dispatch({
            actionType: 'SINGLE_BOOK_CREATED',
            value: data
        });
    }

    // --------------------------------------------------------

    updateSingleBookAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'UPDATE_SINGLE_BOOK_ATTEMPT',
            value: data
        });
    }

    singleBookLoaded(data) {
        AppDispatcher.dispatch({
            actionType: 'SINGLE_BOOK_UPDATED',
            value: data
        });
    }

    // --------------------------------------------------------

    deleteSingleBookAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'DELETE_SINGLE_BOOK_ATTEMPT',
            value: data
        });
    }

    singleBookDeleted(data) {
        AppDispatcher.dispatch({
            actionType: 'SINGLE_BOOK_DELETED',
            value: data
        });
    }

    // --------------------------------------------------------


    getCategoriesAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'GET_CATEGORIES_ATTEMPT',
            value: data
        });
    }

    categoriesLoaded(data) {
        AppDispatcher.dispatch({
            actionType: 'CATEGORIES_LOADED',
            value: data
        });
    }
    // --------------------------------------------------------


    createSingleCategoryAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'CREATE_SINGLE_CATEGORY_ATTEMPT',
            value: data
        });
    }

    singleCategoryCreated(data) {
        AppDispatcher.dispatch({
            actionType: 'SINGLE_CATEGORY_CREATED',
            value: data
        });
    }
    // --------------------------------------------------------



    updateSingleCategoryAttempt(data) {
        AppDispatcher.dispatch({
            actionType: 'UPDATE_SINGLE_CATEGORY_ATTEMPT',
            value: data
        });
    }

    singleCategoryUpdated(data) {
        AppDispatcher.dispatch({
            actionType: 'SINGLE_CATEGORY_UPDATED',
            value: data
        });
    }


}



export default new AppActions()