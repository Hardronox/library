import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';
import BooksStore from '../../stores/BooksStore'
import CategoriesStore from '../../stores/CategoriesStore'
import Book from "./Book";
import Category from "./Category";
import { Link } from 'react-router-dom'



class Books extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        AppActions.getAllBooksAttempt();
        AppActions.getCategoriesAttempt();
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
            categories: CategoriesStore.getAll(),
        })
    }

    _getState () {
        return {
            books: BooksStore.getAll(),
            categories: CategoriesStore.getAll(),
            searchValue: '',
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
                        <h4>Books</h4>
                        {_.times(this.state.books.length, i =>

                            <Book book={this.state.books[i]}
                                  key={i}
                            />
                        )}
                    </div>
                    <div className="col-md-4">
                        <form className="form-inline">
                            <div className="form-group">
                                <label htmlFor="search">Search: </label>
                                <input type="text" className="form-control" value={this.state.searchValue} onChange={this.handleChange} id="search" />
                            </div>

                            <Link to={{ pathname: '/search/'+this.state.searchValue }}>
                                    <button type="submit" className="btn btn-primary">Search</button>
                            </Link>
                        </form>
                        <h4>Tags</h4>
                        {_.times(this.state.categories.length, i =>

                            <Category category={this.state.categories[i]}
                                  key={i}
                            />
                        )}

                    </div>
                </div>
            </div>
        );
    }
}

export default Books;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

