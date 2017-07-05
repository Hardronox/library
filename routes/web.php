<?php

Route::group(['middleware'=>'isAjax'], function() {

    Auth::routes();


    Route::resource('books', 'BooksController');

    Route::get('/get-books-by-category', 'BooksController@getBooksByCategory');
    Route::get('/get-books-by-search', 'BooksController@getBooksBySearch');


    Route::resource('categories', 'CategoriesController');

});

Route::get( '/{path?}', function(){
    return view( 'home' );
} )->where('path', '.*');