// @flow
import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import CategoriesStore from '../stores/CategoriesStore'
import AppActions from '../actions/AppActions';

class CategoryCreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = this._getState();
        this.jwt=localStorage.getItem('jwt');
    }

    componentWillMount() {
        if (!this.jwt)
            this.props.history.push('/login');

        AppActions.getCategoriesAttempt();

        if (this.props.match.params.id) {
            AppActions.getSingleCategoryAttempt(this.props.match.params.id);
        }
    }

    componentDidMount() {
        CategoriesStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        CategoriesStore.removeChangeListener(this._onChange);
        CategoriesStore.unsetFormErrors();
    }


    _onChange = () => {
        let categories = [];
        let options=CategoriesStore.getAll();

        {_.times(options.length, i =>
            categories.push({label: options[i].name, value: options[i].name})
        )}
        this.setState({
            loading: CategoriesStore.getStatus(),
            category: CategoriesStore.getSingleCategory(),
            parentCategories: categories,
            formErrors: CategoriesStore.getFormErrors(),
        })
    };

    _getState () {
        return {
            category: {},
            formErrors: [],
            parentCategories: CategoriesStore.getAll(),
            loading: CategoriesStore.getStatus(),
            selectedParentCategory: ''
        };
    }

    handleChange = (event) => {
        let newState = {
            category: {
                ...this.state.category,
                name: event.target.value
            }
        };

        this.setState(newState);
    };

    _onSubmit = () => {
        let formData = new FormData();

        formData.append('name', this.state.category.name);
        formData.append('parentCategory', this.state.selectedParentCategory.value);

        if (this.props.match.params.id){
            formData.append('id', this.props.match.params.id);
            formData.append('_method', 'PUT');

            AppActions.updateSingleCategoryAttempt(formData);
        } else
            AppActions.createSingleCategoryAttempt(formData);
    };

    changeCategory = (selectedParentCategory) => {
        this.setState({ selectedParentCategory });
    };

    render() {

        if (this.state.loading)
            return null;
        console.log(this.state.category);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="form-group">
                            <label htmlFor="name" className="control-label">Name</label>

                            <input id="name"
                                   type="text"
                                   className="form-control"
                                   value={this.state.category.name}
                                   onChange={this.handleChange.bind(this)}
                                   name="name"
                            />
                        </div>
                        { this.state.formErrors.name ?
                            <div className="alert alert-danger">
                                <strong>Error!</strong> {this.state.formErrors.name[0]}
                            </div>
                            :
                            <div/>
                        }

                        <div className="form-group">
                            <label htmlFor="parent" className="control-label">Select parent category(optional)</label>
                            <Select
                                id="parent"
                                value={this.state.selectedParentCategory}
                                placeholder="Parent category"
                                options={this.state.parentCategories}
                                onChange={this.changeCategory}
                            />
                        </div>
                        <div className="form-group">
                            <button onClick={this._onSubmit}
                                    className="btn btn-success"
                                    disabled={!this.state.category.name}
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

export default CategoryCreateUpdate;