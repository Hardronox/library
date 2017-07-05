import AppActions from '../actions/AppActions';

class CategoriesApi {

    getCategoriesAttempt() {
        $.ajax({
            url: '/categories',
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function(data) {

                AppActions.categoriesLoaded(data);

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
            }.bind(this)
        });
    }

    createSingleCategoryAttempt(name) {
        $.ajax({
            url: '/categories',
            type: 'POST',
            dataType: 'json',
            data:{
                name
            },
            cache: false,
            success: function() {

                AppActions.singleCategoryCreated();

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
            }.bind(this)
        });
    }

    updateSingleCategoryAttempt(data) {
        $.ajax({
            url: `/categories/${data.get('oldName')}`,
            type: 'POST',
            dataType: 'json',
            data: data,
            cache: false,
            contentType : false,
            enctype: 'application/x-www-form-urlencoded',
            processData:false,
            success: function() {

                AppActions.singleCategoryUpdated();

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
            }.bind(this)
        });
    }
}

export default new CategoriesApi();