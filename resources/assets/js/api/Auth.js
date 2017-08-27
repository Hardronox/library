import AppActions from '../actions/AppActions';

class AuthApi {

    registerAttempt(data) {
        $.ajax({
            url: `/register`,
            type: 'POST',
            dataType: 'json',
            data: data,
            cache: false,
            contentType : false,
            enctype: 'application/x-www-form-urlencoded',
            processData:false,
            success: function(response) {
                AppActions.registerSuccess(response);
            }.bind(this),
            error: function(response) {
                AppActions.registerFailed(response.responseJSON);
            }.bind(this)
        });
    }

    loginAttempt(data) {
        $.ajax({
            url: `/login`,
            type: 'POST',
            dataType: 'json',
            data: data,
            cache: false,
            contentType : false,
            enctype: 'application/x-www-form-urlencoded',
            processData:false,
            success: function(response) {
                console.log(response);
                // AppActions.loginSuccess(response);
            }.bind(this),
            error: function(response) {
                AppActions.loginFailed(response.responseJSON);
            }.bind(this)
        });
    }

    getUserAttempt(data) {
        $.ajax({
            url: `/user/get`,
            type: 'POST',
            dataType: 'json',
            data: data,
            cache: false,
            contentType : false,
            enctype: 'application/x-www-form-urlencoded',
            processData:false,
            success: function(response) {
                AppActions.getUserSuccess(response);
            }.bind(this),
            error: function(response) {
                AppActions.loginFailed(response.responseJSON);
            }.bind(this)
        });
    }
}

export default new AuthApi();