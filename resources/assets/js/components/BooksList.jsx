import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import BooksStore from '../stores/BooksStore'
import CategoriesStore from '../stores/CategoriesStore'
import Book from "./Book";
import Category from "./Category";
import { Link } from 'react-router-dom'


class Books extends Component {

    constructor(props) {
        super(props);
        this.state = this._getState();
    }

    componentWillMount() {
        AppActions.getCategoriesAttempt();
        AppActions.getAllBooksAttempt();
    }

    componentWillUnmount() {
        BooksStore.enableLoading();
        BooksStore.unsetBooks();
        BooksStore.removeChangeListener(this._onChange);
        CategoriesStore.removeChangeListener(this._onChange);
    }

    componentDidMount() {
        BooksStore.addChangeListener(this._onChange);
        CategoriesStore.addChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState({
            books: BooksStore.getAll(),
            categories: CategoriesStore.getAll(),
            loading: CategoriesStore.getStatus(),
        })
    };

    _getState = () => {
        return {
            books: BooksStore.getAll(),
            categories: CategoriesStore.getAll(),
            loading: CategoriesStore.getStatus(),
            searchValue: '',
        };
    };

    renderBooks = () => {
        return (
            _.times(this.state.books.length, i =>

            <Book book={this.state.books[i]}
                  type="mainPage"
                  key={i}
            />
        ));
    };

    renderCategories = () => {
        return (
            _.times(this.state.categories.length, i =>
                <Category category={this.state.categories[i]}
                          key={i}
                />
            ));
    };

    handleChange = (event) => {
        this.setState(
                {searchValue: event.target.value}
            );
    };

    render() {
        if (this.state.loading)
            return null;

        const books= this.renderBooks();
        const categories= this.renderCategories();

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>Books</h4>
                        {books}
                    </div>
                    <div className="col-md-4">
                        <form className="form-inline">
                            <div className="form-group">
                                <label htmlFor="search">Search:</label>

                                <input type="text"
                                       className="form-control"
                                       value={this.state.searchValue}
                                       onChange={this.handleChange}
                                       id="search"
                                       required={true}
                                />
                            </div>

                            <Link to={{ pathname: '/search/'+this.state.searchValue }}>
                                <button type="submit" disabled={!this.state.searchValue} className="btn btn-primary">
                                    Search
                                </button>
                            </Link>
                        </form>
                        <h4>Categories</h4>
                        {categories}
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;



