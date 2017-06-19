import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';
import BooksStore from '../../stores/BooksStore'
import CategoriesStore from '../../stores/CategoriesStore'
import Book from "./Book";
import { Link } from 'react-router-dom'
import Pagination from "react-js-pagination";



class CategoryBooks extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentWillMount() {
        AppActions.getBooksByCategoryAttempt([this.props.match.params.name, this.props.match.params.page]);

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
            booksCount: BooksStore.getCount(),
        })
    }

    _getState () {

        return {
            books: BooksStore.getAll(),
            booksCount: BooksStore.getCount(),
            activePage: this.props.match.params.page
        };
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
        AppActions.getBooksByCategoryAttempt([this.props.match.params.name, pageNumber]);
    }

    render() {
        //console.log(this.state.booksCount);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3>Books in "{this.props.match.params.name}" category:</h3>
                        {_.times(this.state.books.length, i =>

                            <Book book={this.state.books[i]}
                                  key={i}
                            />
                        )}
                    </div>
                </div>

                <Pagination
                    activePage={parseInt(this.state.activePage)} //parseInt(this.props.match.params.page)
                    itemsCountPerPage={5}
                    totalItemsCount={this.state.booksCount-5} //
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default CategoryBooks;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

