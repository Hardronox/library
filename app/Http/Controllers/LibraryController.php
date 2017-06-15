<?php

namespace App\Http\Controllers;

use App\Books;
use App\Categories;
use function MongoDB\BSON\toJSON;
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

    public function getBooks()
    {

        if (Request::ajax()) {
            //var_dump($_GET);
            $books = Books::orderBy('created_at', 'desc')
                ->take(10)
                ->get();

            $categories = Categories::all()->toJson();

            return response()
                        ->json($books); //, $categories
        }
    }
    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function view(Request $request)
    {
        if (Request::ajax()) {

            $books=Books::find($request->input('id'))
                        ->get();

            return response()
                        ->json($books);
        }

    }

    /**
     * @param $query
     * @return mixed
     */
    public function search(Request $request)
    {
        if (Request::ajax()) {

            $books = Books::where('title', 'like', '%' . $request->input('search') . '%')
                ->orWhere('description', 'like', '%' . $request->input('search') . '%')
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
