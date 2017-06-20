import React from 'react';
import {
    Route } from 'react-router-dom';
import AppActions from './actions/AppActions';
/*auth*/
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
/*end auth*/

/*layouts*/
import BookCreateUpdate from './components/create-update-book/BookCreateUpdate';

import Books from './components/main-page/Books';

import CategoryCreateUpdate from './components/create-update-category/CategoryCreateUpdate';

import CategoryBooks from './components/category-page/Books';

import Header from './components/layouts/Header';

import Search from './components/search-page/Search';

import View from './components/view-page/View';



/*end layouts*/


const AppRoutes = (
    <div>

        <Header/>

        <Route path="/" exact name="books" component={Books}/>

        <Route path="/add-book" component={BookCreateUpdate}/>

        <Route path="/update-book/:id"  render={(props)=><BookCreateUpdate {...props}/>}  />

        <Route path="/delete-book/:id"  render={(props)=>{

            AppActions.deleteSingleBookAttempt(props.match.params.id);
            setTimeout(props.history.push('/'), 0);

            return null;
        }}
        />



        <Route path="/category/:name/page/:page"  render={(props)=><CategoryBooks {...props}/>}  />

        <Route path="/search/:query"  render={(props)=><Search {...props}/>}  />

        <Route path="/book/:id"  render={(props)=><View {...props}/>}  />



        <Route path="/create-category" component={CategoryCreateUpdate}/>

        <Route path="/update-category/:id"  render={(props)=><CategoryCreateUpdate {...props}/>}  />

    </div>
);

export default AppRoutes;
