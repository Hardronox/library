import React, { Component } from 'react';



class CategoryCreateUpdate extends Component {

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
                        <div className="panel panel-default">
                            <div className="panel-heading">Add book</div>
                            <div className="panel-body">
                                <form className="form-horizontal" role="form" method="POST" action="{{ route('register') }}">


                                    <div className="form-group">
                                        <label htmlFor="title" className="col-md-4 control-label">Title</label>

                                        <div className="col-md-6">
                                            <input id="title" type="text" className="form-control" name="title" required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="description">Description:</label>
                                        <textarea className="form-control" rows="5" id="description"> </textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="image" className="control-label">Image</label>

                                        <div className="col-md-6">
                                            <input type="file" id="image" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="col-md-6 col-md-offset-4">
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryCreateUpdate;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console

