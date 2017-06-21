import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';
import BooksStore from '../../stores/BooksStore'
import CategoriesStore from '../../stores/CategoriesStore'
import Book from "./Book";
import { Link } from 'react-router-dom'


class Search extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        console.log(this.props.match.params.query);
        AppActions.getBooksBySearchAttempt(this.props.match.params.query);
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
        })
    }

    _getState () {
        return {
            books: BooksStore.getAll(),
        };
    }

    handleChange(event) {
        this.setState(
            {searchValue: event.target.value}
        );
    }

    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h3>Search by: "{this.props.match.params.query}" </h3>
                    {_.times(this.state.books.length, i =>

                        <Book book={this.state.books[i]}
                              key={i}
                        />
                    )}
                </div>

                <div className="col-md-4">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="email">Search: </label>
                            <input type="text" className="form-control" id="email" defaultValue={this.props.match.params.query} onChange={this.handleChange} />
                        </div>

                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Search;