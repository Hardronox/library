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

            $book=Categories::create($post);

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

            $category= Categories::where('name', $post['oldName'])->first();
            $category->name=$post['newName'];

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

            return response()
                ->json('done');
        }
    }
}
