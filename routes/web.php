<?php

//
//Route::get('/', function () {
//    return view('index');
//});
//
//Route::group(['prefix' => 'api'], function()
//{
//    Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
//    Route::post('authenticate', 'AuthenticateController@authenticate');
//});


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