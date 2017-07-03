import AppActions from '../actions/AppActions';
import BooksStore from '../stores/BooksStore';


class BooksApi {

    getAllBooksAttempt() {

        $.get({
            url: '/get-all-books',
            dataType: 'json',
            cache: false,
            success: function(data) {

                BooksStore._books= data;
                AppActions.allBooksLoaded(BooksStore._books);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
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
                BooksStore._books= data[0].map(function(data) {

                    data.description= data.description.substring(0, 60)+'...';
                    return data;
                });
                AppActions.booksByCategoryLoaded([BooksStore._books, data[1]]);


            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
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

                BooksStore._books= data;
                AppActions.singleBookLoaded(BooksStore._books);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
            }.bind(this)
        });
    }

    deleteSingleBookAttempt(id) {
        $.post({
            url: '/delete-single-book',
            dataType: 'json',
            data:{
                id
            },
            cache: false,
            success: function() {

                AppActions.singleBookDeleted();

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
            }.bind(this)
        });
    }



    createSingleBookAttempt(data) {
        $.post({
            url: '/create-single-book',
            dataType: 'json',
            data: data,
            cache: false,
            contentType : false,
            enctype: 'multipart/form-data',
            processData:false,
            success: function() {

                AppActions.singleBookCreated();

            }.bind(this),
            error: function(response) {

                AppActions.singleBookNotCreated(response.responseJSON);

            }.bind(this)
        });
    }

    updateSingleBookAttempt(data) {
        $.post({
            url: '/update-single-book',
            dataType: 'json',
            data: data,
            cache: false,
            contentType : false,
            enctype: 'multipart/form-data',
            processData:false,
            success: function() {

                AppActions.singleBookUpdated();

            }.bind(this),
            error: function(response) {

                AppActions.singleBookNotUpdated(response.responseJSON);

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
                BooksStore._books= data;
                AppActions.booksBySearchLoaded(BooksStore._books);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
            }.bind(this)
        });
    }
}

export default new BooksApi();