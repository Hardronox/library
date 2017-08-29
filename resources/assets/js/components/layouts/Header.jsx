import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AuthStore from '../../stores/AuthStore';
import AppActions from '../../actions/AppActions';

class Header extends Component {

    constructor(props) {
        super(props);
        this.jwt = localStorage.getItem('jwt');
    }

    _onLogOut(){
        localStorage.removeItem('jwt');
        this.props.history.push('/');
    }

    componentWillMount() {
        if (this.jwt !== null) {
            AppActions.getUserAttempt({'jwt': this.jwt});
        }
    }

    _onChange = () => {
        this.setState({
            user: AuthStore.getUser()
        });
    };

    componentDidMount() {
        AuthStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AuthStore.removeChangeListener(this._onChange);
    }

    renderAuthNavbar() {
        return (this.jwt ?
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link style={{fontSize:"16px"}} to={{ pathname: '/create-category'}} >
                            Add Category
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-brand" to={{ pathname: '/add-book' }}>
                            Add Book
                        </Link>
                    </li>
                    <li>
                        <Link onClick={this._onLogOut} className="navbar-brand" to={{ pathname: '/' }}>
                            Log out
                        </Link>
                    </li>
                </ul>
                :
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link className="navbar-brand" to={{ pathname: '/login' }}>
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link className="navbar-brand" to={{ pathname: '/register' }}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
        );
    }

    render() {
        const authNavbar=this.renderAuthNavbar();

        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">

                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>

                        <Link className="navbar-brand" to={{ pathname: '/' }}>
                            Library
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="app-navbar-collapse">
                        <ul className="nav navbar-nav">
                            &nbsp;
                        </ul>
                        {authNavbar}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;


