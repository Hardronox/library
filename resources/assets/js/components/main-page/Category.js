import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Category extends Component {

    constructor(props) {

        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Link to={{ pathname: '/category/'+this.props.category.name+'/page/1' }}>
                    <span className="badge">{this.props.category.name}</span>
                </Link>
            </div>
        );
    }
}

export default Category;
