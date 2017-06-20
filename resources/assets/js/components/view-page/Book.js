import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Book extends Component {

    constructor(props) {

        super(props);
        this.state = {}
    }

    render() {
        let categories=_.uniqBy(this.props.book.categories, 'id');
        return (

            <div className="media">
                <div className="media-left media-top">
                    <img className="media-object" width={"100px"} height={"100px"} src={'/images/'+ this.props.book.picture} />
                </div>
                <div className="media-body">
                    <h3 className="media-heading">{this.props.book.title}</h3>

                    {this.props.book.description}
                </div>
                {_.times(categories.length, i =>

                    <span className="badge" key={i}>{categories[i].name}</span>

                )}
            </div>

        );
    }
}

export default Book;
