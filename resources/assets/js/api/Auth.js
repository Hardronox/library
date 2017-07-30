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
                AppActions.loginSuccess(response);
            }.bind(this),
            error: function(response) {
                AppActions.loginFailed(response.responseJSOghN);
            }.bind(this)
        });
    }


}

export default new AuthApi();