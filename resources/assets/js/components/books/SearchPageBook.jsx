import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                    <Link to={{ pathname: '/book/'+this.props.props.book.id }}>
                        <h4 className="media-heading">{this.props.props.book.title}</h4>
                    </Link>
                    {this.props.props.book.description}
                </div>
                {_.times(categories.length, i =>
                    <span className="badge" key={i}>{categories[i].name}</span>
                )}
                <hr/>
            </div>

        );
    }
}

export default Book;


