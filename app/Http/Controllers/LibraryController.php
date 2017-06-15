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
        $books=Books::orderBy('created_at', 'desc')
            ->take(10)
            ->get();

        $categories=Categories::all();

        //var_dump('<pre>',$books,'</pre>');
        return view('home');
    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function view($id)
    {
        $books=Books::find($id)
                    ->get();

        return view('home');
    }

    /**
     * @param $query
     * @return mixed
     */
    public function search($query)
    {
        if (Request::ajax()) {

            $books = Books::where('title', 'like', '%' . $query . '%')
                ->orWhere('description', 'like', '%' . $query . '%')
                ->get();


            return $books;
        }
    }

    /**
     * @return Books
     */
    public function addBook()
    {
        //if (Request::ajax()) {

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

            return $book;
        //}
    }

    /**
     * @return Books
     */
    public function updateBook()
    {
        //if (Request::ajax()) {

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

        return $book;
        //}
    }

    /**
     * @return mixed
     */
    public function categories()
    {
        $post = Request::all();

        $limit=10;
        $offset= $post['page_number'] * $limit;

        $books=Books::orderBy('created_at','desc')->offset($offset)->limit($limit);

        return $books;
    }
}
