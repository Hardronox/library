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

    Route::resource('books', 'BookController');

    Route::get('/get-books-by-category', 'BookController@getBooksByCategory');
    Route::get('/get-books-by-search', 'BookController@getBooksBySearch');

    Route::post('/register', 'AuthController@register');
    Route::post('/login', 'AuthController@login');

    Route::resource('categories', 'CategoryController');

});

Route::get( '/{path?}', function(){
    return view( 'home' );
} )->where('path', '.*');