import React, { Component } from 'react';

class Category extends Component {

    constructor(props) {

        super(props);
        this.state = {}
    }

    render() {
        return (

            <div>
                <span className="badge">{this.props.category.name}</span>
            </div>

        );
    }
}

export default Category;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

