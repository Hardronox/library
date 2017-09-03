import React, { Component } from 'react';

class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {book}=this.props.props;

        return (
            <div className="media">
                <div className="media-left media-top">
                    <img
                        width={"100px"}
                        height={"100px"}
                        className="media-object"
                        src={book.image.url}
                    />
                </div>
                <div className="media-body">
                    <h3 className="media-heading">{book.title}</h3>
                    {book.description}
                </div>
                {_.times(book.categories.length, i =>
                    <span className="badge" key={i}>{book.categories[i].name}</span>
                )}
            </div>
        );
    }
}

export default Book;
