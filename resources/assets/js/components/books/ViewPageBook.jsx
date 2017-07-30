import React, { Component } from 'react';

class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let categories=_.uniqBy(this.props.props.book.categories, 'id');

        return (
            <div className="media">
                <div className="media-left media-top">
                    <img width={"100px"} height={"100px"} className="media-object" src={'/images/'+ this.props.props.book.picture} />
                </div>
                <div className="media-body">
                    <h3 className="media-heading">{this.props.props.book.title}</h3>
                    {this.props.props.book.description}
                </div>
                {_.times(categories.length, i =>
                    <span className="badge" key={i}>{categories[i].name}</span>
                )}
            </div>
        );
    }
}

export default Book;
