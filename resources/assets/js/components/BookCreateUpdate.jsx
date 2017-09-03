import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import BooksStore from '../stores/BooksStore';
import CategoriesStore from '../stores/CategoriesStore';
import AppActions from '../actions/AppActions';
import FileInput from 'react-file-input';
import TinyMCE from 'react-tinymce';

class BookCreateUpdate extends Component {

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
            AppActions.getSingleBookAttempt(this.props.match.params.id);
        }
    }

    componentWillUnmount() {
        BooksStore.removeChangeListener(this._onChange);
        CategoriesStore.removeChangeListener(this._onChange);
        BooksStore.unsetFormErrors();
        BooksStore.unsetBooks();
    }

    componentDidMount() {
        BooksStore.addChangeListener(this._onChange);
        CategoriesStore.addChangeListener(this._onChange);
    }

    _onChange = () => {
        let categories = [];
        let options=CategoriesStore.getAll();

        {_.times(options.length, i =>
            categories.push({label: options[i].name, value: options[i].name})
        )}

        this.setState({
            books: BooksStore.getAll(),
            loading: CategoriesStore.getStatus(),
            formErrors: BooksStore.getFormErrors(),
            categories: categories
        });
    }

    _getState () {
        return {
            books: BooksStore.getAll(),
            loading: CategoriesStore.getStatus(),
            categories: CategoriesStore.getAll(),
            formErrors: [],
            selectedCategories: []
        };
    }

    handleChange(name, event) {

        let newState = {
        books: {
          ...this.state.books,
          [name]: (name === 'image') ? event.target.files[0] : event.target.value
        }};
        this.setState(newState);
    }

    _onSubmit = () => {
        let formData = new FormData();

        formData.append('title', this.state.books.title);
        formData.append('description', this.state.books.description);
        formData.append('image', this.state.books.image);

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
    };

    changeCategory = (value) =>  {
        this.setState({
            selectedCategories: value
        });
    };

    handleEditorChange = (e) => {
        console.log(this.state.books);
        let newState = {
            books: {
                ...this.state.books,
                description: e.target.getContent()
            }};
        this.setState(newState);
    };

    render() {
        // пришлось добавить второе условие т.к. контент в редактор не попадал
        if (this.state.loading)
            return null;

        if (this.props.match.path === '/update-book/:id' && this.state.books.length === 0) {
            return null;
        }

        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="form-group">
                                <label htmlFor="title" className="control-label">Title</label>

                                <input id="title"
                                       type="text"
                                       className="form-control"
                                       value={this.state.books.title}
                                       onChange={this.handleChange.bind(this, 'title')}
                                       name="title"
                                />
                                { this.state.formErrors.title ?
                                    <div className="alert alert-danger">
                                        <strong>Error!</strong> {this.state.formErrors.title[0]}
                                    </div>
                                    :
                                    <div/>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="description"  className="control-label">Description:</label>

                                <TinyMCE
                                    content={this.state.books.description}
                                    config={{
                                        height: 500,
                                        theme: 'modern',
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                                            'searchreplace wordcount visualblocks visualchars code fullscreen',
                                            'insertdatetime media nonbreaking save table contextmenu directionality',
                                            'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
                                        ],
                                        toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
                                        toolbar2: 'print preview media | forecolor backcolor emoticons | codesample help',
                                        image_advtab: true,
                                        templates: [
                                            { title: 'Test template 1', content: 'Test 1' },
                                            { title: 'Test template 2', content: 'Test 2' }
                                        ],
                                        content_css: [
                                            '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
                                            '//www.tinymce.com/css/codepen.min.css'
                                        ]
                                    }}
                                    onChange={this.handleEditorChange}
                                />


                                { this.state.formErrors.description ?
                                    <div className="alert alert-danger">
                                        <strong>Error!</strong> {this.state.formErrors.description[0]}
                                    </div>
                                    :
                                    <div/>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="image" className="control-label">Image</label>

                                <FileInput name="myImage"
                                           id="image"
                                           accept=".png,.jpg,.jpeg"
                                           placeholder="Click here"
                                           onChange={this.handleChange.bind(this, 'image')}
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

export default BookCreateUpdate;