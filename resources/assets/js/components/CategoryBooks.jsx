import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import BooksStore from '../stores/BooksStore'
import Book from "./Book";
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";


class CategoryBooks extends Component {

    constructor(props) {
        super(props);
        this.state = this._getState();
    }

    componentWillMount() {
        AppActions.getBooksByCategoryAttempt([this.props.match.params.name, this.props.match.params.page]);
    }

    componentWillUnmount() {
        BooksStore.enableLoading();
        BooksStore.unsetBooks();
        BooksStore.removeChangeListener(this._onChange);
    }

    componentDidMount() {
        BooksStore.addChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState({
            books: BooksStore.getAll(),
            booksCount: BooksStore.getCount(),
        })
    };

    _getState () {
        return {
            books: BooksStore.getAll(),
            booksCount: BooksStore.getCount(),
            activePage: this.props.match.params.page
        };
    }

    handlePageChange = (pageNumber) => {
        this.setState({activePage: pageNumber});

        AppActions.getBooksByCategoryAttempt([this.props.match.params.name, pageNumber]);
        this.props.history.push('/category/'+this.props.match.params.name+'/page/'+pageNumber);
    };

    renderBooks = () => {
        return (
            _.times(this.state.books.length, i =>

                <Book book={this.state.books[i]}
                      type="categoryPage"
                      key={i}
                />
            ));
    };

    render() {
        const books= this.renderBooks();

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h3>Books in "{this.props.match.params.name}" category:</h3>
                        {books}
                    </div>

                    <div className="col-md-4">
                        <Link to={{ pathname: '/update-category/'+this.props.match.params.name }}>
                            <button className="btn btn-warning">Update Category</button>
                        </Link>
                    </div>
                </div>

                <Pagination
                    activePage={parseInt(this.state.activePage)}
                    itemsCountPerPage={5}
                    totalItemsCount={this.state.booksCount-5}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default CategoryBooks;


