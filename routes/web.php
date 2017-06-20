<?php



Auth::routes();

Route::get('/', 'LibraryController@index')->name('main');

Route::get('/get-all-books', 'LibraryController@getAllBooks');

Route::get('/get-books-by-category', 'LibraryController@getBooksByCategory');

Route::get('/get-books-by-search', 'LibraryController@getBooksBySearch');

Route::get('/get-single-book', 'LibraryController@getSingleBook');

Route::get('/get-categories', 'LibraryController@getCategories');


Route::post('/create-single-book', 'LibraryController@createSingleBook');

Route::post('/update-single-book', 'LibraryController@updateSingleBook');

Route::post('/delete-single-book', 'LibraryController@deleteSingleBook');


Route::post('/create-single-category', 'LibraryController@addSingleCategory');

Route::post('/update-single-category', 'LibraryController@updateSingleCategory');


//Route::get('/home', function(){
//    return view('home');
//});

Route::get( '/{path?}', function(){
    return view( 'home' );
} )->where('path', '.*');