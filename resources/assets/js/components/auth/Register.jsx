import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import AppActions from '../../actions/AppActions';
import AuthStore from '../../stores/AuthStore';

class Login extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
    }

    componentWillMount() {
        AppActions.getCategoriesAttempt();
        if (this.props.match.params.id)
            AppActions.getSingleBookAttempt(this.props.match.params.id);
        else
            this.setState({
                loading: false
            });
    }

    componentWillUnmount() {
        AuthStore.removeChangeListener(this._onChange);
        AuthStore.unsetFormErrors();
    }

    componentDidMount() {
        AuthStore.addChangeListener(this._onChange);
    }

    _onChange () {
        let categories=[];
        let options=AuthStore.getAll();

        {_.times(options.length, i =>
            categories.push({label: options[i].name, value: options[i].name})
        )}

        this.setState({
            formErrors: AuthStore.getFormErrors()
        });
    }

    _getState () {
        return {
            formErrors: []
        };
    }

    handleChange(name, event) {

        let state = Object.assign({}, this.state);
        state.books[name] = (name==='picture') ? event.target.files[0] : event.target.value;
        this.setState(state);
    }

    _onSubmit () {
        let formData= new FormData();

        console.log(this.state.selectedCategories);
        formData.append('title', this.state.books.title);
        formData.append('description', this.state.books.description);

        this.state.selectedCategories.forEach(function(item) {
            formData.append('categories[]', item.value);
        });

        AppActions.createSingleBookAttempt(formData);
    }

    changeCategory(value) {
        console.log('You have selected: ', value);
        this.setState({
            selectedCategories: value });
    }

    render() {
        if (this.state.loading){
            return <div></div>;
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Register</div>
                                <div className="panel-body">
                                    <form className="form-horizontal" role="form" method="POST" action="{{ route('login') }}">

                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                            <div className="col-md-6">
                                                <input id="email"
                                                       type="email"
                                                       className="form-control"
                                                       defaultValue={'this.state.books.title'}
                                                       onChange={this.handleChange.bind(this, 'title')}
                                                       name="title"
                                                />
                                                { this.state.formErrors.title ?
                                                    <div className="alert alert-danger">
                                                        <strong>Error!</strong> {this.state.formErrors.title[0]}
                                                    </div>
                                                    :
                                                    <div></div>
                                                }

                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                            <div className="col-md-6">
                                                <input id="title"
                                                       type="password"
                                                       className="form-control"
                                                       defaultValue={'this.state.books.title'}
                                                       onChange={this.handleChange.bind(this, 'title')}
                                                       name="title"
                                                />
                                                { this.state.formErrors.title ?
                                                    <div className="alert alert-danger">
                                                        <strong>Error!</strong> {this.state.formErrors.title[0]}
                                                    </div>
                                                    :
                                                    <div></div>
                                                }
                                            </div>

                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-8 col-md-offset-4">
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
}

export default Login;