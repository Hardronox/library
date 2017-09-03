import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/layouts/Header';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

import BookCreateUpdate from './components/BookCreateUpdate';

import Books from './components/BooksList';

import CategoryCreateUpdate from './components/CategoryCreateUpdate';

import CategoryBooks from './components/CategoryBooks';

import Search from './components/Search';

import View from './components/View';

import DeleteBook from './components/DeleteBook';


const AppRoutes = (
    <div>

        <Header/>

        {/* Auth Routes*/}
        <Route path="/register" component={Register}/>

        <Route path="/login" component={Login}/>

        {/* Book Routes*/}
        <Route path="/" exact name="books" component={Books}/>

        <Route path="/book/create" component={BookCreateUpdate}/>

        <Route path="/book/:id/update"  render={(props)=><BookCreateUpdate {...props}/>}  />

        <Route path="/book/:id/delete"  render={(props)=><DeleteBook {...props}/>}  />

        <Route path="/search/:query"  render={(props)=><Search {...props}/>}  />

        <Route path="/book/:id"  render={(props)=><View {...props}/>}  />

        {/* Category Routes*/}
        <Route path="/category/:id/page/:page"  render={(props)=><CategoryBooks {...props}/>}  />

        <Route path="/category/create" component={CategoryCreateUpdate}/>

        <Route path="/category/:id/update"  render={(props)=><CategoryCreateUpdate {...props}/>}  />

    </div>
);

export default AppRoutes;
