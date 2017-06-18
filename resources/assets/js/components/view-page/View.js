import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';
import BookStore from '../../stores/BooksStore'
import CategoriesStore from '../../stores/CategoriesStore'
import Book from "./Book";


class View extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this)
    }

    componentWillMount() {
        console.log(this.props.match.params.id);
        AppActions.getSingleBookAttempt(this.props.match.params.id);
    }


    componentWillUnmount() {
        BookStore.removeChangeListener(this._onChange);
    }

    componentDidMount() {
        BookStore.addChangeListener(this._onChange);
    }

    _onChange () {
        this.setState({
            books: BookStore.getAll(),
        })
    }

    _getState () {
        return {
            books: BookStore.getAll()
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {/*<h4>{this.state.books[0]}</h4>*/}

                        {/*<Book book={this.state.books[0]} />*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default View;


