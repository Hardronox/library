import React, { Component } from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/BooksStore'
import Book from "../main-page/Book";
import { Link } from 'react-router-dom'



class Main extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">

                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <Link className="navbar-brand" to={{ pathname: '/' }}>
                            Laravel
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="app-navbar-collapse">
                        <ul className="nav navbar-nav">
                            &nbsp;
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <Link className="navbar-brand" to={{ pathname: '/add-book' }}>
                                Add a book
                            </Link>
                            <Link className="navbar-brand" to={{ pathname: '/login' }}>
                                Login
                            </Link>
                            <Link className="navbar-brand" to={{ pathname: '/logout' }}>
                                Register
                            </Link>

                            <li className="dropdown">
                                {/*<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">*/}
                                    {/*Name <span className="caret"></span>*/}
                                {/*</a>*/}

                                <ul className="dropdown-menu" role="menu">
                                    <li>
                                        <a href="{{ route('logout') }}">
                                            Logout
                                        </a>


                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Main;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 

