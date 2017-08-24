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
            parentCategories: categories,
            formErrors: CategoriesStore.getFormErrors(),
        })
    };

    _getState () {
        return {
            category: this.props.match.params.name,
            formErrors: [],
            parentCategories: CategoriesStore.getAll(),
            selectedParentCategory: ''
        };
    }

    handleChange = (event) => {
        let newState = {
            ...this.state,
            category: event.target.value};

        this.setState(newState);
    };

    _onSubmit = () => {
        let formData = new FormData();

        formData.append('name', this.state.category);
        formData.append('parentCategory', this.state.selectedParentCategory.value);

        if (this.props.match.params.name){
            formData.append('oldName', this.props.match.params.name);
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

export default CategoryCreateUpdate;