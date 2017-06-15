import React, { Component } from 'react';
import AppActions from '../../lib/AppActions';
import AppStore from '../../lib/stores/BooksStore'
import CategoriesStore from '../../lib/stores/CategoriesStore'
import Book from "./Book";
import Category from "./Category";


class Books extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this)
    }

    componentWillMount() {
        AppActions.getBooksAttempt();
    }


    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    _onChange () {
        //console.log('_onChange');
        //console.log(AppStore.getAll())
        this.setState({
            books: AppStore.getAll(),
            //categories: CategoriesStore.getAll()
        })
    }

    _getState () {
        return {
            books: AppStore.getAll(),
            //categories: CategoriesStore.getAll()
        };
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
                                <label htmlFor="email">Search: </label>
                                <input type="email" className="form-control" id="email" />
                            </div>

                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                        <h4>Tags</h4>
                        {/*{_.times(this.state.categories.length, i =>*/}

                            {/*<Category category={this.state.books[i]}*/}
                                  {/*key={i}*/}
                            {/*/>*/}
                        {/*)}*/}

                    </div>
                </div>
            </div>
        );
    }
}

export default Books;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

