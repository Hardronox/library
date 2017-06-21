import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import CategoriesStore from '../../stores/CategoriesStore'
import AppActions from '../../actions/AppActions';


class CategoryCreateUpdate extends Component {

    constructor(props) {

        super(props);
        this.state =
            {
                category: {}
            };
        this._onChange = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this)
    }

    componentWillUnmount() {
        CategoriesStore.removeChangeListener(this._onChange);
    }

    componentDidMount() {
        CategoriesStore.addChangeListener(this._onChange);
    }

    _onChange () {
        this.setState({
            loading: CategoriesStore.getStatus()
        })
    }

    handleChange(event) {

        let state = Object.assign({}, this.state);
        state.category = event.target.value;
        this.setState(state);
    }

    _onSubmit () {

        if (this.props.match.params.name)
            AppActions.updateSingleCategoryAttempt([this.props.match.params.name, this.state.category]);
        else
            AppActions.createSingleCategoryAttempt(this.state.category);

        this.props.history.push('/');
    }

    render() {
        // let Select = require('react-select');
        //
        // let options = [
        //     { value: 'one', label: 'One' },
        //     { value: 'two', label: 'Two' },
        //     { value: 'three', label: 'three' }
        // ];
        //
        // function logChange(val) {
        //     console.dir("Selected: " + val);
        // }

        if (this.state.loading){
            return <div></div>;
        } else
            return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="form-group">
                                <label htmlFor="name" className="control-label">Name</label>

                                <input id="name"
                                       type="text"
                                       className="form-control"
                                       defaultValue={this.props.match.params.name}
                                       onChange={this.handleChange.bind(this)}
                                       name="name"
                                />
                            </div>

                            {/*<div className="form-group">*/}

                            {/*<Select*/}
                            {/*name="form-field-name"*/}
                            {/*value="one"*/}
                            {/*options={options}*/}
                            {/*onChange={logChange}*/}
                            {/*multi={true}*/}
                            {/*joinValues={true}*/}
                            {/*/>*/}

                            {/*</div>*/}
                            <div className="form-group">
                                <button onClick={this._onSubmit} className="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default CategoryCreateUpdate;