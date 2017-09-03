import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    renderCategories = () => {
        let {book}=this.props.props;

        return (
            _.times(book.categories.length, i =>
                <span className="badge" key={i}>{book.categories[i].name}</span>
            ));
    };

    render() {
        const categories= this.renderCategories();

        return (
            <div className="media">
                <div className="media-left media-top">
                    <img
                        width={"100px"}
                        height={"100px"}
                        className="media-object"
                        src={this.props.props.book.image.url}
                    />
                </div>
                <div className="media-body">
                    <Link to={{ pathname: '/book/'+this.props.props.book.id }}>
                        <h4 className="media-heading">{this.props.props.book.title}</h4>
                    </Link>
                    {this.props.props.book.description}
                </div>
                {categories}
                <hr/>
            </div>

        );
    }
}

export default Book;


