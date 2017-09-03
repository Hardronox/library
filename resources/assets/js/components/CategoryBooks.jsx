import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import BooksStore from '../stores/BooksStore'
import CategoriesStore from '../stores/CategoriesStore'
import Book from "./Book";
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";

class CategoryBooks extends Component {

    constructor(props) {
        super(props);
        this.state = this._getState();
    }

    componentWillMount() {
        if (this.props.match.params.id && this.props.match.params.page) {
            AppActions.getSingleCategoryAttempt(this.props.match.params.id);
            AppActions.getBooksByCategoryAttempt([this.props.match.params.id, this.props.match.params.page]);
        }
    }

    componentWillUnmount() {
        console.log('unm');
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
            booksCount: BooksStore.getCount(),
            category: CategoriesStore.getSingleCategory(),
            loading: CategoriesStore.getStatus(),

        })
    };

    _getState () {
        return {
            books: BooksStore.getAll(),
            category: CategoriesStore.getSingleCategory(),
            booksCount: BooksStore.getCount(),
            activePage: this.props.match.params.page,
            loading: CategoriesStore.getStatus()
        };
    }

    handlePageChange = (pageNumber) => {
        this.setState({activePage: pageNumber});

        AppActions.getBooksByCategoryAttempt([this.props.match.params.id, pageNumber]);
        this.props.history.push('/category/'+this.props.match.params.id+'/page/'+pageNumber);
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

        if (this.state.loading)
            return null;

        const books= this.renderBooks();

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h3>Books in "{this.state.category.name}" category:</h3>
                        {books}
                    </div>

                    <div className="col-md-4">
                        <Link to={{ pathname: '/category/'+this.props.match.params.id+'/update' }}>
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


