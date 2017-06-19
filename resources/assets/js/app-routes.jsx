import React from 'react';
import {
    Route } from 'react-router-dom'

/*auth*/
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
/*end auth*/

/*layouts*/
import BookCreateUpdate from './components/create-update-book/BookCreateUpdate';

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

        <Route path="/category/:name/page/:page"  render={(props)=><CategoryBooks {...props}/>}  />

        <Route path="/search/:query"  render={(props)=><Search {...props}/>}  />

        <Route path="/book/:id"  render={(props)=><View {...props}/>}  />

        <Route path="/update-book/:id"  render={(props)=><BookCreateUpdate {...props}/>}  />

        <Route name="UpdateCategory" path="/update-category" component={CategoryCreateUpdate}/>

        {/*<Route name="SignIn" path="/signin" component={SignIn}/>*/}

    </div>
);

export default AppRoutes;
