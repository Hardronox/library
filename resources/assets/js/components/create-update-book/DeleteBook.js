import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import BooksStore from '../../stores/BooksStore'
import AppActions from '../../actions/AppActions';
import { Link } from 'react-router-dom'
import FileInput from 'react-file-input'

class DeleteBook extends Component {

    constructor(props) {

        super(props);
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {

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