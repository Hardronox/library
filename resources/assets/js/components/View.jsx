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
    }

    componentDidMount() {
        BooksStore.addChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState({
            books: BooksStore.getAll(),
            loading: BooksStore.getStatus()
        })
    };

    _getState () {
        return {
            books: BooksStore.getAll(),
            loading: BooksStore.getStatus()
        };
    }

    render() {
        if (this.state.loading)
            return null;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Book book={this.state.books}
                              type="viewPage"
                        />
                    </div>
                    <div className="col-md-3">
                        <Link  to={{ pathname: '/book/'+this.state.books.id+'/update'}} >
                            <button className="btn btn-warning">Update</button>
                        </Link>

                        <Link to={{ pathname: '/book/'+this.state.books.id+'/delete' }}>
                            <button className="btn btn-danger">Delete</button>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default View;


