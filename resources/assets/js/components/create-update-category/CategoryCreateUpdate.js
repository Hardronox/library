import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import BooksStore from '../../stores/BooksStore'
import AppActions from '../../actions/AppActions';


class CategoryCreateUpdate extends Component {

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


        if(this.state.category.id)


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
                        <div className="col-md-6 ">
                            <div className="form-group">
                                <label htmlFor="name" className="control-label">Name</label>

                                <input id="name"
                                       type="text"
                                       className="form-control"
                                       value={this.state.books.title}
                                       onChange={this.handleChange.bind(this, 'title')}
                                       name="name"
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

export default CategoryCreateUpdate;