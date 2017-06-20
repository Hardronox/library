<?php

namespace App\Http\Controllers;

use App\Books;
use App\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;



class LibraryController extends Controller
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('home');
    }

    public function getAllBooks(Request $request)
    {
        if ($request->ajax()) {
            $books = Books::orderBy('created_at', 'desc')
                ->orderBy('id', 'desc')
                ->take(10)
                ->get();

            return response()
                        ->json($books); //, $categories
        }
    }


    public function getBooksByCategory(Request $request)
    {

        if ($request->ajax()) {

            $limit = 5;
            $offset = $request->input('page') * $limit;

            $category=Categories::where('name', $request->input('name'))->first();

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
    public function view(Request $request)
    {
        if ($request->ajax()) {

            $books=Books::where('id', $request->input('id'))
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
    public function getBooksBySearch(Request $request)
    {
        if ($request->ajax()) {

            $books = Books::where('title', 'like', '%' . $request->input('search') . '%')
                ->orWhere('description', 'like', '%' . $request->input('search') . '%')
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
        if ($request->ajax()) {


            $post = $request->all();

//            $this->validate(request(),[
//                'title'=>'required|max:100|unique:articles',
//                'description'=>'min:50|max:300'
//            ]);

            $book=Books::create($post);



            if ($request->hasFile('picture')){

                $imageName = $book->id . '.' .
                    $request->file('picture')->getClientOriginalExtension();

                $request->file('picture')
                    ->move(base_path() . '/public/images/', $imageName
                    );

                $book->picture= $imageName;
                $book->save();
            }


            //$category= Categories::where('name','=', $post['category_name'])->get();


            //$book->categories()->attach($category); // associate($category);

            return response()
                ->json($book);
        }
    }

    /**
     * @return Books
     */
    public function updateBook(Request $request)
    {
        if ($request->ajax()) {

            $post = $request->all();


            $book= Books::where('id', $post['id'])->first();


//            $this->validate(request(),[
//                'title'=>'required|max:100|unique:articles',
//                'description'=>'min:50|max:300'
//            ]);

            $book->title=$post['title'];
            $book->description=$post['description'];



            if ($request->hasFile('picture')){

                $imageName = $book->id . '.' .
                    $request->file('picture')->getClientOriginalExtension();

                $request->file('picture')
                    ->move(base_path() . '/public/images/', $imageName
                    );

                $book->picture= $imageName;

            }
            $book->save();

//            $category= Categories::where('name','=', $post['category_name'])->get();
//
//            $book->categories()->attach($category); // associate($category);

            return response()
                ->json($book);
        }
    }

    /**
     * @return mixed
     */
    public function deleteBook(Request $request)
    {
        if ($request->ajax()) {

            $post = $request->all();


            $book= Books::where('id', $post['id'])->first();
            $book->delete();

            return 'done';
        }
    }
}
