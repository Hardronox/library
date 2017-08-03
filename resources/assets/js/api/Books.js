import AppActions from '../actions/AppActions';
import BooksStore from '../stores/BooksStore';

class BooksApi {

    getAllBooksAttempt() {

        $.ajax({
            url: '/books',
            type: 'GET',
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


    getSingleBookAttempt(id) {
        $.ajax({
            url: `/books/${id}`,
            type: 'GET',
            dataType: 'json',
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

    createSingleBookAttempt(data) {
        $.ajax({
            url: `/books`,
            type: 'POST',
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
        $.ajax({
            url: `/books/${data.get('id')}`,
            type: 'POST',
            dataType: 'json',
            data: data,
            cache: false,
            contentType : false,
            enctype: 'application/x-www-form-urlencoded',
            processData:false,
            success: function() {
                AppActions.singleBookUpdated();
            }.bind(this),
            error: function(response) {
                AppActions.singleBookNotUpdated(response.responseJSON);

            }.bind(this)
        });
    }

    deleteSingleBookAttempt(id) {
        $.ajax({
            url: `/books/${id}`,
            type: 'DELETE',
            dataType: 'json',
            cache: false,
            success: function() {
                AppActions.singleBookDeleted();
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
            }.bind(this)
        });
    }

    getBooksByCategoryAttempt(data) {
        $.ajax({
            url: '/get-books-by-category',
            type: 'GET',
            dataType: 'json',
            data:{
                name: data[0],
                page: data[1]
            },
            cache: false,
            success: function(response) {
                BooksStore._books = response[0].map(function(data) {
                    data.description = data.description.substring(0, 60)+'...';
                    return data;
                });
                AppActions.booksByCategoryLoaded([BooksStore._books, response[1]]);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
            }.bind(this)
        });
    }

    getBooksBySearchAttempt(search) {
        $.ajax({
            url: '/get-books-by-search',
            type: 'GET',
            dataType: 'json',
            data:{
                search
            },
            cache: false,
            success: function(data) {
                BooksStore._books = data;
                AppActions.booksBySearchLoaded(BooksStore._books);
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
            }.bind(this)
        });
    }
}

export default new BooksApi();