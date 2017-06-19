<?php

namespace App\Http\Controllers;

use App\Books;
use App\Categories;
use Request;


class LibraryController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('home');
    }

    public function getAllBooks()
    {

        if (Request::ajax()) {
            $books = Books::orderBy('created_at', 'desc')
                ->orderBy('id', 'desc')
                ->take(10)
                ->get();

            return response()
                        ->json($books); //, $categories
        }
    }

    public function getBooksByCategory()
    {


        if (Request::ajax()) {

            $limit = 5;
            $offset = Request::input('page') * $limit;

            $category=Categories::where('name', Request::input('name'))->first();

            //var_dump('<pre>', $books=$category->books()->offset($offset)->limit($limit)->get(), '</pre >'); exit;
            $books=$category->books()->offset($offset)->limit($limit)->get();
            $count = $category->books()->count();
            return response()
                        ->json([$books, $count]); //, $categories
        }
    }

    public function getCategories()
    {
        $categories = Categories::all();

        return response()
            ->json($categories); //, $categories
    }


    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function view()
    {
        if (Request::ajax()) {

            $books=Books::where('id', Request::input('id'))
                        ->with('categories')
                        ->first();

            return response()
                        ->json($books);
        }

    }

    /**
     * @param $query
     * @return mixed
     */
    public function getBooksBySearch()
    {
        if (Request::ajax()) {

            $books = Books::where('title', 'like', '%' . Request::input('search') . '%')
                ->orWhere('description', 'like', '%' . Request::input('search') . '%')
                ->with('categories')
                ->get();


            return response()
                        ->json($books);
        }
    }

    /**
     * @return Books
     */
    public function addBook(Request $request)
    {
        if (Request::ajax()) {

            $post = Request::all();

//            $this->validate(request(),[
//                'title'=>'required|max:100|unique:articles',
//                'description'=>'min:50|max:300'
//            ]);

            $book=Books::create($post);
            //$book=Books::create(['title'=>'123', 'description'=>'desc', 'picture'=>'adsfg']);


            $category= Categories::where('name','=', $post['category_name'])->get();
            //$category= Categories::where('name','=', 'Novel')->get();



            $book->categories()->attach($category); // associate($category);

            return response()
                ->json($book);
        }
    }

    /**
     * @return Books
     */
    public function updateBook(Request $request)
    {
        if (Request::ajax()) {

            $post = Request::all();

            $this->validate(request(),[
                'title'=>'required|max:100|unique:articles',
                'description'=>'min:50|max:300'
            ]);

            $book= Books::find($post['book_id'])->get();

            $book->title=$post['title'];
            $book->description=$post['description'];
            $book->save();

            $category= Categories::where('name','=', $post['category_name'])->get();

            $book->categories()->attach($category); // associate($category);

            return response()
                ->json($book);
        }
    }

    /**
     * @return mixed
     */
    public function categories(Request $request)
    {
        if (Request::ajax()) {

            $limit = 10;
            $offset = $request->input('page_number') * $limit;

            $books = Books::orderBy('created_at', 'desc')->offset($offset)->limit($limit);

            return response()
                        ->json($books);
        }
    }
}
