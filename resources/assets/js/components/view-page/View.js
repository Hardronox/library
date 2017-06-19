import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';
import BooksStore from '../../stores/BooksStore'
import CategoriesStore from '../../stores/CategoriesStore'
import Book from "./Book";
import { Link } from 'react-router-dom'


class View extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this)
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

    render() {
        //console.log(this.state.loading);
        if (this.state.loading){
            return <div></div>;
        } else
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Book book={this.state.books} />
                    </div>
                    <div className="col-md-3">
                        <Link  to={{ pathname: '/update-book/'+this.state.books.id}} >
                            <button className="btn btn-warning">Update</button>
                        </Link>
                        <Link to={{ pathname: '/delete-book' }}>
                            <button className="btn btn-danger">Delete</button>
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default View;


