import React, { Component } from 'react';
import AppActions from '../../lib/AppActions';
import AppStore from '../../lib/stores/BooksStore'
import Book from "./Book";


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

                        <a className="navbar-brand" href="{{ url('/') }}">
                            Laravel
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="app-navbar-collapse">
                        <ul className="nav navbar-nav">
                            &nbsp;
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="{{ route('login') }}">Login</a></li>
                            <li><a href="{{ route('register') }}">Register</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    Name <span className="caret"></span>
                                </a>

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

