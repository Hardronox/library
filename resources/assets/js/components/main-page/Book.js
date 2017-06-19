import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                        <img className="media-object" width={"100px"} height={"100px"} src={this.props.book.picture} />
                    </a>
                </div>
                <div className="media-body">
                    <Link to={{ pathname: '/book/'+this.props.book.id }}>
                        <h4 className="media-heading">{this.props.book.title}</h4>
                    </Link>
                    {this.props.book.description}
                </div>
                <hr/>
            </div>

        );
    }
}

export default Book;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

