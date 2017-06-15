import React from 'react';
//import {Route, IndexRoute, browserHistory} from 'react-router';
//import Route from "react-router/lib/Route";
// import Redirect from "react-router/lib/Redirect";
// import DefaultRoute from "react-router/lib/IndexRoute";
import {
    Route,
    Link
} from 'react-router-dom'

/*auth*/
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
/*end auth*/

/*site*/
import BookCreateUpdate from './components/site/Book-create-update';
import CategoryCreateUpdate from './components/site/Category-create-update';
import Categories from './components/site/Categories';
import Main from './components/site/Main';
import Search from './components/site/Search';
import View from './components/site/View';
/*end site*/


const AppRoutes = (
    <div>
        <Route exact={true} path='/' name="default" component={Main}/>

        <Route name="SignIn" path="/signin" component={SignIn}/>
        <Route name="SignUp" path="/signup" component={SignUp}/>

        <Route name="AddBook" path="/add-book" component={BookCreateUpdate}/>
        <Route name="AddCategory" path="/add-category" component={CategoryCreateUpdate}/>
        <Route name="Categories" path="/categories" component={Categories}/>
        <Route name="Search" path="/search" component={Search}/>
        <Route name="UpdateBook" path="/update-book" component={BookCreateUpdate}/>
        <Route name="UpdateCategory" path="/update-category" component={CategoryCreateUpdate}/>
        <Route name="View" path="/view" component={View}/>

    </div>
);

export default AppRoutes;
