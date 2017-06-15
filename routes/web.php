<?php



Auth::routes();

Route::get('/', 'LibraryController@index')->name('main');

Route::get('/get-books', 'LibraryController@getBooks')->name('main');


Route::get('/book/{id}', 'LibraryController@view')->name('view');

//Route::post('/add-book', 'LibraryController@addBook')->name('add-book');

Route::get('/', 'LibraryController@index')->name('search');


Route::get('/home', function(){
    return view('home');
});

Route::get( '/{path?}', function(){
    return view( 'home' );
} )->where('path', '.*');