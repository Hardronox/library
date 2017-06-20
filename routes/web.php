<?php



Auth::routes();

Route::get('/', 'LibraryController@index')->name('main');

Route::get('/get-all-books', 'LibraryController@getAllBooks');

Route::get('/get-books-by-category', 'LibraryController@getBooksByCategory');

Route::get('/get-books-by-search', 'LibraryController@getBooksBySearch');

Route::get('/get-single-book', 'LibraryController@view');

Route::get('/get-categories', 'LibraryController@getCategories');


Route::post('/create-single-book', 'LibraryController@addBook');

Route::post('/update-single-book', 'LibraryController@updateBook');

Route::post('/delete-single-book', 'LibraryController@deleteBook');



Route::get('/home', function(){
    return view('home');
});

Route::get( '/{path?}', function(){
    return view( 'home' );
} )->where('path', '.*');