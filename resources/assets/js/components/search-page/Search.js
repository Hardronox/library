import React, { Component } from 'react';



class Search extends Component {

    constructor(props) {

        super(props);
        this.state = this._getState();
        this._onChange = this._onChange.bind(this)
    }

    componentWillMount() {
        //console.log(this.props);
        AppActions.getBooksBySearchAttempt(this.props.match.params.search);

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

                <div className="col-md-4">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="email">Search: </label>
                            <input type="email" className="form-control" id="email" />
                        </div>

                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Search;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

