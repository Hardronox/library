import React, { Component } from 'react';
import ViewPageBook from "./books/ViewPageBook";
import MainPageBook from "./books/MainPageBook";
import SearchPageBook from "./books/SearchPageBook";
import CategoryPageBook from "./books/CategoryPageBook";

class Book extends Component {

    constructor(props) {

        super(props);
        this.state = {}
    }


    _displayByType() {

        switch (this.props.type) {

            case 'viewPage':
                return <ViewPageBook props={this.props}/>;
                break;
            case 'searchPage':
                return <SearchPageBook props={this.props}/>;
                break;
            case 'mainPage':
                return <MainPageBook props={this.props}/>;
                break;
            case 'categoryPage':
                return <CategoryPageBook props={this.props}/>;
                break;
        }

    }

    render() {
        return (
            this._displayByType()
        );
    }
}

export default Book;
