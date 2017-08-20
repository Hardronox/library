import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import AppActions from '../../actions/AppActions';
import AuthStore from '../../stores/AuthStore';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = this._getState();
    }

    componentWillUnmount() {
        AuthStore.removeChangeListener(this._onChange);
        AuthStore.unsetFormErrors();
    }

    componentDidMount() {
        AuthStore.addChangeListener(this._onChange);
    }

    _getState () {
        return {
            name: '',
            email: '',
            password: '',
            formErrors: []
        };
    }

    _onChange = () => {
        this.setState({
            loading: false,
            formErrors: AuthStore.getFormErrors(),
        });
    }

    handleChange = (name, event) => {
        let newState = {
            ...this.state,
            [name]: event.target.value
        };
        // state[name] = event.target.value;
        this.setState(newState);
    }

    _onSubmit = () => {
        let formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('name', this.state.name);
        formData.append('password', this.state.password);

        AppActions.registerAttempt(formData);
    }

    render() {
        if (this.state.loading)
            return null;

            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Register</div>
                                <div className="panel-body">
                                    <div className="form-group" >
                                        <label htmlFor="name" className="col-md-4 control-label">Name</label>

                                        <div className="col-md-6">
                                            <input id="name"
                                                   type="email"
                                                   className="form-control"
                                                   defaultValue={this.state.email}
                                                   onChange={this.handleChange.bind(this, 'name')}
                                                   name="title"
                                            />
                                            { this.state.formErrors.name ?
                                                <div className="alert alert-danger">
                                                    <strong>Error!</strong> {this.state.formErrors.name[0]}
                                                </div>
                                                :
                                                <div/>
                                            }
                                        </div>
                                    </div>

                                    <div className="form-group" style={{marginTop : "50px"}}>
                                        <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input id="email"
                                                   type="email"
                                                   className="form-control"
                                                   defaultValue={this.state.email}
                                                   onChange={this.handleChange.bind(this, 'email')}
                                                   name="title"
                                            />
                                            { this.state.formErrors.email ?
                                                <div className="alert alert-danger">
                                                    <strong>Error!</strong> {this.state.formErrors.email[0]}
                                                </div>
                                                :
                                                <div/>
                                            }
                                        </div>
                                    </div>

                                    <div className="form-group" style={{marginTop : "100px"}}>
                                        <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                        <div className="col-md-6">
                                            <input id="title"
                                                   type="password"
                                                   className="form-control"
                                                   defaultValue={this.state.password}
                                                   onChange={this.handleChange.bind(this, 'password')}
                                                   name="title"
                                            />
                                            { this.state.formErrors.password ?
                                                <div className="alert alert-danger">
                                                    <strong>Error!</strong> {this.state.formErrors.password[0]}
                                                </div>
                                                :
                                                <div/>
                                            }
                                        </div>

                                    </div>

                                    <div className="form-group" style={{marginTop : "150px"}}>
                                        <div className="col-md-8 col-md-offset-4">
                                            <button onClick={this._onSubmit} className="btn btn-primary">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

}

export default Register;