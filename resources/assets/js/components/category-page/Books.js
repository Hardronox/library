import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';
import BooksStore from '../../stores/BooksStore'
import CategoriesStore from '../../stores/CategoriesStore'
import Book from "./Book";
import { Link } from 'react-router-dom'



class CategoryBooks extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this)
    }

    componentWillMount() {
        //console.log(this.props);
        AppActions.getBooksByCategoryAttempt(this.props.match.params.name);

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

    render() {
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
            </div>
        );
    }
}

export default CategoryBooks;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

