import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';


class Login extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    componentWillMount() {

        AppActions.getCategoriesAttempt();
        this.setState({
            loading: false
        });
    }

    componentDidMount() {
        CategoriesStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        CategoriesStore.removeChangeListener(this._onChange);
    }


    _onChange () {
        let categories=[];
        let options=CategoriesStore.getAll();

        console.log(options);
        {_.times(options.length, i =>
            categories.push({label: options[i].name, value: options[i].name})
        )}
        this.setState({
            loading: CategoriesStore.getStatus(),
            parentCategories: categories,
        })
    }

    _getState () {
        return {
            category: this.props.match.params.name,
            formErrors: [],
            parentCategories: CategoriesStore.getAll()
        };
    }

    handleChange(event) {

        let state = Object.assign({}, this.state);
        state.category = event.target.value;
        this.setState(state);
    }

    _onSubmit () {

            AppActions.createSingleCategoryAttempt(this.state.category);

        this.props.history.push('/');
    }

    changeCategory(value) {
        console.log('You have selected: ', value);
        this.setState({ value });
    }

    render() {
        if (this.state.loading){
            return <div></div>;
        } else
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="form-group">
                                <label htmlFor="name" className="control-label">Name</label>

                                <input id="name"
                                       type="text"
                                       className="form-control"
                                       defaultValue={this.props.match.params.name}
                                       onChange={this.handleChange.bind(this)}
                                       name="name"
                                />
                            </div>
                            { this.state.formErrors.name ?
                                <div className="alert alert-danger">
                                    <strong>Error!</strong> {this.state.formErrors.name[0]}
                                </div>
                                :
                                <div></div>
                            }

                            <div className="form-group">
                                <label htmlFor="parent" className="control-label">Select parent category(optional)</label>
                            </div>
                            <div className="form-group">
                                <button onClick={this._onSubmit}
                                        className="btn btn-success"
                                        disabled={!this.state.category}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Login;