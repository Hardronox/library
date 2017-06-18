<?php



Auth::routes();

Route::get('/', 'LibraryController@index')->name('main');

Route::get('/get-all-books', 'LibraryController@getAllBooks');

Route::get('/get-books-by-category', 'LibraryController@getBooksByCategory');

Route::get('/get-single-book', 'LibraryController@view');

Route::get('/get-categories', 'LibraryController@getCategories');




Route::post('/add-book', 'LibraryController@addBook');

Route::patch('/update-book', 'LibraryController@updateBook');


Route::get('/book/{id}', 'LibraryController@view')->name('view');

//Route::post('/add-book', 'LibraryController@addBook')->name('add-book');

Route::get('/', 'LibraryController@index')->name('search');


Route::get('/home', function(){
    return view('home');
});

Route::get( '/{path?}', function(){
    return view( 'home' );
} )->where('path', '.*');