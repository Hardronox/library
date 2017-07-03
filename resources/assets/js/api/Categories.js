import AppActions from '../actions/AppActions';

class CategoriesApi {

    getCategoriesAttempt() {
        $.get({
            url: '/get-categories',
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
        $.post({
            url: '/create-single-category',
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
        $.post({
            url: '/update-single-category',
            dataType: 'json',
            data:{
                oldName: data[0],
                newName: data[1]
            },
            cache: false,
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