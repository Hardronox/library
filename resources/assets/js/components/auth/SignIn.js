import React, { Component } from 'react';



class SignIn extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { articles: [], articlesApproved: [], message: '' };
    //     this.handleClick = this.handleClick.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
    //
    // handleClick() {
    //     if (document.getElementById('simpletext').value.length > 0 && this.state.articles.length < 10) {
    //         AppActions.submitArticle(document.getElementById('simpletext').value)
    //         document.getElementById('simpletext').value = ''
    //     }
    // }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Register</div>
                            <div className="panel-body">
                                <form className="form-horizontal" role="form" method="POST" action="{{ route('register') }}">
                                    

                                    <div className="form-group">
                                        <label htmlFor="name" className="col-md-4 control-label">Name</label>

                                        <div className="col-md-6">
                                            <input id="name" type="text" className="form-control" name="name" value="{{ old('name') }}" required autofocus />

                                                
                                        </div>
                                    </div>

                                    <div className="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                                        <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" name="email" value="{{ old('email') }}" required />

                                                
                                        </div>
                                    </div>

                                    <div className="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                                        <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control" name="password" required />

                                                
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password-confirm" className="col-md-4 control-label">Confirm Password</label>

                                        <div className="col-md-6">
                                            <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-6 col-md-offset-4">
                                            <button type="submit" className="btn btn-primary">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

