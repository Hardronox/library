import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import AppActions from '../../actions/AppActions';

class Register extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
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
        BooksStore.removeChangeListener(this._onChange);
        BooksStore.unsetFormErrors();
    }

    componentDidMount() {
        BooksStore.addChangeListener(this._onChange);
        CategoriesStore.addChangeListener(this._onChange);
    }

    _onChange () {
        let categories=[];
        let options=CategoriesStore.getAll();

        {_.times(options.length, i =>
            categories.push({label: options[i].name, value: options[i].name})
        )}

        this.setState({
            formErrors: BooksStore.getFormErrors()
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
        formData.append('picture', this.state.books.picture);

        this.state.selectedCategories.forEach(function(item) {
            formData.append('categories[]', item.value);
        });
        
        // if for update book, else for create
        if (this.props.match.params.id) {
            formData.append('id', this.state.books.id);
            formData.append('_method', 'PUT');
            AppActions.updateSingleBookAttempt(formData);
        } else
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
                        <div className="col-md-12 ">
                            <div className="form-group">
                                <label htmlFor="title" className="control-label">Title</label>

                                <input id="title"
                                       type="text"
                                       className="form-control"
                                       defaultValue={this.state.books.title}
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

                            <div className="form-group">
                                <label htmlFor="description"  className="control-label">Description:</label>

                                <textarea id="description"
                                          className="form-control"
                                          rows="5"
                                          value={this.state.books.description}
                                          onChange={this.handleChange.bind(this, 'description')}
                                />

                                { this.state.formErrors.description ?
                                    <div className="alert alert-danger">
                                        <strong>Error!</strong> {this.state.formErrors.description[0]}
                                    </div>
                                    :
                                    <div></div>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="image" className="control-label">Image</label>

                                <FileInput name="myImage"
                                           id="image"
                                           accept=".png,.jpg,.jpeg"
                                           placeholder="Click here"
                                    //className="inputClass"
                                           onChange={this.handleChange.bind(this, 'picture')}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category" className="control-label">Select category(optional)</label>
                                <Select
                                    id="category"
                                    multi
                                    joinValues
                                    value={this.state.selectedCategories}
                                    placeholder="Select categories"
                                    options={this.state.categories}
                                    onChange={this.changeCategory}
                                />
                            </div>
                            <div className="form-group">
                                <button onClick={this._onSubmit} className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }


    }
}

export default Register;