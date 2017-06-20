<?php

namespace App\Http\Controllers;

use App\Books;
use App\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;



class LibraryController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
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


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
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

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCategories(Request $request)
    {
        if ($request->ajax()) {

            $categories = Categories::all();

            return response()
                ->json($categories); //, $categories
        }
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSingleBook(Request $request)
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
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
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
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createSingleBook(Request $request)
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
    public function updateSingleBook(Request $request)
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
//            $book->categories()->attach($category);

            return response()
                ->json($book);
        }
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createSingleCategory(Request $request)
    {
        if ($request->ajax()) {

            $post = $request->all();

//            $this->validate(request(),[
//                'title'=>'required|max:100|unique:articles',
//                'description'=>'min:50|max:300'
//            ]);

            $book=Books::create($post);

            return response()
                ->json($book);
        }
    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateSingleCategory(Request $request)
    {
        if ($request->ajax()) {

            $post = $request->all();

//            $this->validate(request(),[
//                'title'=>'required|max:100|unique:articles',
//                'description'=>'min:50|max:300'
//            ]);

            $category= Categories::where('id', $post['id'])->first();


            $category->name=$post['title'];
            $category->parent_id=$post['parent_id'];


            $category->save();


            return response()
                ->json($category);
        }
    }


    /**
     * @param Request $request
     * @return string
     */
    public function deleteSingleBook(Request $request)
    {
        if ($request->ajax()) {

            $post = $request->all();


            $book= Books::where('id', $post['id'])->first();
            $book->delete();

            return 'done';
        }
    }
}
