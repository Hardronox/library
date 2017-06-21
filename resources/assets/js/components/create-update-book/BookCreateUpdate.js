import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import BooksStore from '../../stores/BooksStore'
import AppActions from '../../actions/AppActions';
import { Link } from 'react-router-dom'
import FileInput from 'react-file-input'

class BookCreateUpdate extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this)

    }

    componentWillMount() {
        AppActions.getSingleBookAttempt(this.props.match.params.id);
    }


    componentWillUnmount() {
        BooksStore.removeChangeListener(this._onChange);
    }

    componentDidMount() {
        BooksStore.addChangeListener(this._onChange);
    }

    _onChange () {
        this.setState({
            books: BooksStore.getAll(),
            loading: BooksStore.getStatus()
        })
    }

    _getState () {
        return {
            books: BooksStore.getAll(),
            loading: BooksStore.getStatus()
        };
    }

    handleChange(name, event) {

        let state = Object.assign({}, this.state);
        state.books[name] = (name==='picture') ? event.target.files[0] : event.target.value;
        this.setState(state);
    }

    _onSubmit () {

        let formData= new FormData();

        if(this.state.books.id)
            formData.append('id', this.state.books.id);

        formData.append('title', this.state.books.title);
        formData.append('description', this.state.books.description);
        formData.append('picture', this.state.books.picture);


        if (this.props.match.params.id)
            AppActions.updateSingleBookAttempt(formData);
        else
            AppActions.createSingleBookAttempt(formData);

        this.props.history.push('/');
    }

    render() {
        // let Select = require('react-select');
        //
        // let options = [
        //     { value: 'one', label: 'One' },
        //     { value: 'two', label: 'Two' },
        //     { value: 'three', label: 'three' }
        // ];
        //
        // function logChange(val) {
        //     console.dir("Selected: " + val);
        // }

        if (this.state.loading){
            return <div></div>;
        } else
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
                        </div>

                        <div className="form-group">
                            <label htmlFor="description"  className="control-label">Description:</label>

                            <textarea id="description"
                                      className="form-control"
                                      rows="5"
                                      value={this.state.books.description}
                                      onChange={this.handleChange.bind(this, 'description')}
                            />

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

                        {/*<div className="form-group">*/}

                            {/*<Select*/}
                                {/*name="form-field-name"*/}
                                {/*value="one"*/}
                                {/*options={options}*/}
                                {/*onChange={logChange}*/}
                                {/*multi={true}*/}
                                {/*joinValues={true}*/}
                            {/*/>*/}

                        {/*</div>*/}
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