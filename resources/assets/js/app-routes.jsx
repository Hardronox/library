import React from 'react';
import { Route } from 'react-router-dom';


import Header from './components/layouts/Header';

import BookCreateUpdate from './components/create-update-book/BookCreateUpdate';

import Books from './components/main-page/Books';

import CategoryCreateUpdate from './components/create-update-category/CategoryCreateUpdate';

import CategoryBooks from './components/category-page/Books';

import Search from './components/search-page/Search';

import View from './components/view-page/View';

import DeleteBook from './components/create-update-book/DeleteBook';



const AppRoutes = (
    <div>

        <Header/>

        {/* Book Routes*/}
        <Route path="/" exact name="books" component={Books}/>

        <Route path="/add-book" component={BookCreateUpdate}/>

        <Route path="/update-book/:id"  render={(props)=><BookCreateUpdate {...props}/>}  />

        <Route path="/delete-book/:id"  render={(props)=><DeleteBook {...props}/>}  />

        <Route path="/search/:query"  render={(props)=><Search {...props}/>}  />

        <Route path="/book/:id"  render={(props)=><View {...props}/>}  />

        {/* Category Routes*/}
        <Route path="/category/:name/page/:page"  render={(props)=><CategoryBooks {...props}/>}  />

        <Route path="/create-category" component={CategoryCreateUpdate}/>

        <Route path="/update-category/:name"  render={(props)=><CategoryCreateUpdate {...props}/>}  />

    </div>
);

export default AppRoutes;
