import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import BooksStore from '../stores/BooksStore'
import AppActions from '../actions/AppActions';

class DeleteBook extends Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.jwt=localStorage.getItem('jwt')
    }

    componentWillMount() {
        if (!this.jwt)
            this.props.history.push('/login');

        AppActions.deleteSingleBookAttempt(this.props.match.params.id);
        this.props.history.push('/');
    }

    componentWillUnmount() {
        BooksStore.removeChangeListener(this._onChange);
    }

    _onChange () {
        this.setState({
            loading: BooksStore.getStatus()
        })
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default DeleteBook;