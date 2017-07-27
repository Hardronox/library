import AppActions from '../actions/AppActions';
import AuthStore from '../stores/AuthStore';

class AuthApi {

    register(data) {
        $.ajax({
            url: `/register`,
            type: 'POST',
            dataType: 'json',
            data: data,
            cache: false,
            success: function() {
                AppActions.singleBookCreated();
            }.bind(this),
            error: function(response) {
                AppActions.singleBookNotCreated(response.responseJSON);

            }.bind(this)
        });
    }

    login(data) {
        $.ajax({
            url: `/login`,
            type: 'POST',
            dataType: 'json',
            data: data,
            cache: false,
            success: function() {

                AppActions.singleBookDeleted();

            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err);
            }.bind(this)
        });
    }


}

export default new AuthApi();