import React, { Component } from 'react';



class Categories extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { articles: [], articlesApproved: [], message: '' };
    //     this.handleClick = this.handleClick.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);
    // }
    //
    // handleClick() {
    //     if (document.getElementById('simpletext').value.length > 0 && this.state.articles.length < 10) {
    //         AppActions.submitArticle(document.getElementById('simpletext').value)
    //         document.getElementById('simpletext').value = ''
    //     }
    // }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h4>Books</h4>
                        <a href="/">
                            <div className="media">
                                <div className="media-left media-top">
                                    <a href="#">
                                        <img className="media-object" src="..." />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Media heading</h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad, architecto consequatur cum, deserunt di
                                </div>
                                <div>
                                    <a href="#">Inbox <span className="badge">42</span></a>
                                    <a href="#">Inbox <span className="badge">42</span></a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

