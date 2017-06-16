import React from 'react';
import {
    Route } from 'react-router-dom'

/*auth*/
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
/*end auth*/

/*layouts*/
import BookCreateUpdate from './components/create-update-book/Book-create-update';

import Books from './components/main-page/Books';

import CategoryCreateUpdate from './components/create-update-category/Category-create-update';

import CategoryBooks from './components/category-page/Books';

import Main from './components/layouts/Header';

import Search from './components/search-page/Search';

import View from './components/view-page/View';
/*end layouts*/


const AppRoutes = (
    <div>

        <Main/>
        <Route path="/" exact name="books" component={Books}/>

        <Route name="AddBook" path="/add-book" component={BookCreateUpdate}/>
        <Route name="AddCategory" path="/add-category" component={CategoryCreateUpdate}/>


        {/*<Route name="Categories" path="/category/:name"  component={CategoryBooks}/>*/}

        <Route path="/category/:name"  render={(props)=><CategoryBooks {...props}/>}  />

        <Route path="/search/:q"  render={(props)=><Search {...props}/>}  />


        <Route name="UpdateBook" path="/update-book" component={BookCreateUpdate}/>
        <Route name="UpdateCategory" path="/update-category" component={CategoryCreateUpdate}/>
        <Route name="View" path="/view" component={View}/>

        {/*<Route name="SignIn" path="/signin" component={SignIn}/>*/}

    </div>
);

export default AppRoutes;
