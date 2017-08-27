<?php

Route::group(['middleware'=>'isAjax'], function() {

    Route::resource('books', 'BookController');
    Route::resource('categories', 'CategoryController');

    Route::get('/get-books-by-category', 'BookController@getBooksByCategory');
    Route::get('/get-books-by-search', 'BookController@getBooksBySearch');

    Route::post('/register', 'AuthController@register');
    Route::post('/login', 'AuthController@login');
    Route::post('/user/get', 'AuthController@getUser');
});

Route::get( '/{path?}', function(){
    return view( 'home' );
} )->where('path', '.*');