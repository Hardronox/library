<?php

Route::group(['middleware'=>'isAjax'], function() {

    Auth::routes();

    Route::get('/get-all-books', 'LibraryController@getAllBooks');

    Route::get('/get-books-by-category', 'LibraryController@getBooksByCategory');

    Route::get('/get-books-by-search', 'LibraryController@getBooksBySearch');

    Route::get('/get-single-book', 'LibraryController@getSingleBook');

    Route::get('/get-categories', 'LibraryController@getCategories');


    Route::post('/create-single-book', 'LibraryController@createSingleBook');

    Route::post('/update-single-book', 'LibraryController@updateSingleBook');

    Route::post('/delete-single-book', 'LibraryController@deleteSingleBook');


    Route::post('/create-single-category', 'LibraryController@createSingleCategory');

    Route::post('/update-single-category', 'LibraryController@updateSingleCategory');

});

Route::get( '/{path?}', function(){
    return view( 'home' );
} )->where('path', '.*');