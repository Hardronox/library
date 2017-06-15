import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class BookCreateUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: props.initialColor
        };
    }

    componentWillMount(){

    }




    render() {
        let Select = require('react-select');

        let options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
            { value: 'three', label: 'three' }
        ];

        function logChange(val) {
            console.log("Selected: " + val);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title" className="col-md-4 control-label">Title</label>
                                <input id="title" type="text" className="form-control" name="title" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description:</label>
                                <textarea className="form-control" defaultValue="" rows="5" id="description"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="image" className="control-label">Image</label>

                                <div className="col-md-6">
                                    <input type="file" id="image" />
                                </div>
                            </div>

                            <div className="form-group">
                                <Select
                                    name="form-field-name"
                                    value="one"
                                    options={options}
                                    onChange={logChange}
                                    multi={true}
                                    joinValues={true}
                                />
                            </div>

                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCreateUpdate;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console




{/*<div className="container">*/}
    {/*<div className="row">*/}
        {/*<div className="col-md-12 ">*/}
            {/*<div className="panel panel-default">*/}
                {/*<div className="panel-heading">Add book</div>*/}
                {/*<div className="panel-body">*/}
                    {/*<form className="form-horizontal" role="form" method="POST" action="{{ route('register') }}">*/}


                        {/*<div className="form-group">*/}
                            {/*<label htmlFor="title" className="col-md-4 control-label">Title</label>*/}

                            {/*<div className="col-md-6">*/}
                                {/*<input id="title" type="text" className="form-control" name="title" required />*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        {/*<div className="form-group">*/}
                            {/*<label htmlFor="description">Description:</label>*/}
                            {/*<textarea className="form-control" rows="5" id="description"> </textarea>*/}
                        {/*</div>*/}
                {/*</div>*/}

                {/*<div className="form-group">*/}
                    {/*<label htmlFor="image" className="control-label">Image</label>*/}

                    {/*<div className="col-md-6">*/}
                        {/*<input type="file" id="image" />*/}
                    {/*</div>*/}
                {/*</div>*/}

                {/*<div className="form-group">*/}
                    {/*<label htmlFor="password" className="col-md-4 control-label">Tags</label>*/}

                    {/*<div className="col-md-6">*/}
                        {/*<Select2*/}
                            {/*multiple*/}
                            {/*data={['bug', 'feature', 'documents', 'discussion']}*/}
                            {/*options={*/}
                                {/*{*/}
                                    {/*placeholder: 'search by tags',*/}
                                {/*}*/}
                            {/*}*/}
                        {/*/>*/}
                    {/*</div>*/}
                {/*</div>*/}

                {/*<div className="form-group">*/}
                    {/*<div className="col-md-6 col-md-offset-4">*/}
                        {/*<button type="submit" className="btn btn-primary">*/}
                            {/*Submit*/}
                        {/*</button>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</form>*/}
        {/*</div>*/}
    {/*</div>*/}
{/*</div>*/}
{/*</div>*/}
{/*</div>*/}