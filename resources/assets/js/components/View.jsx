import React, { Component } from 'react';
import AppActions from '../actions/AppActions';
import BooksStore from '../stores/BooksStore'
import Book from "./Book";
import { Link } from 'react-router-dom'


class View extends Component {

    constructor(props) {
        super(props);
        this.state = this._getState();
    }

    componentWillMount() {
        AppActions.getSingleBookAttempt(this.props.match.params.id);
    }


    componentWillUnmount() {
        BooksStore.removeChangeListener(this._onChange);
        BooksStore.unsetSingleBook();
    }

    componentDidMount() {
        BooksStore.addChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState({
            book: BooksStore.getSingleBook(),
            loading: BooksStore.getStatus()
        })
    };

    _getState () {
        return {
            book: BooksStore.getSingleBook(),
            loading: BooksStore.getStatus()
        };
    }

    render() {
        if (this.state.loading)
            return null;

        console.log(this.state.book);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Book book={this.state.book}
                              type="viewPage"
                        />
                    </div>
                    <div className="col-md-3">
                        <Link  to={{ pathname: '/update-book/'+this.state.book.id }} >
                            <button className="btn btn-warning">Update</button>
                        </Link>

                        <Link to={{ pathname: '/book/'+this.state.book.id+'/delete' }}>
                            <button className="btn btn-danger">Delete</button>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default View;


