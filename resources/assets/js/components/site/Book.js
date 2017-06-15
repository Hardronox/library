import React, { Component } from 'react';

class Book extends Component {

    constructor(props) {

        super(props);
        this.state = {}
    }

    render() {
        return (

            <div className="media">
                <div className="media-left media-top">
                    <a href="#">
                        <img className="media-object" src="..." />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.book.title}</h4>
                    {this.props.book.description}
                </div>
            </div>

        );
    }
}

export default Book;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

