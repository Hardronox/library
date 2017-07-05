<?php

namespace App\Http\Controllers;

use App\Books;
use App\Categories;
use App\Http\Requests\CreateUpdateBookRequest;
use Illuminate\Http\Request;


class BooksController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $books = Books::orderBy('created_at', 'desc')
            ->orderBy('id', 'desc')
            ->take(10)
            ->get();

        return response()
                    ->json($books);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $books=Books::where('id', $id)
                    ->with('categories')
                    ->first();

        return response()
                    ->json($books);

    }

    /**
     * @param CreateUpdateBookRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateUpdateBookRequest $request)
    {
        $post = $request->all();

        $book=new Books();
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

    /**
     * @return Books
     */
    public function update(CreateUpdateBookRequest $request, $id)
    {
        $post = $request->all();

        $book= Books::where('id', $id)->first();

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

    /**
     * @return string
     */
    public function destroy($id)
    {
        $book= Books::where('id', $id)->first();
        $book->delete();

        return response()
                    ->json('done');

    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBooksBySearch(Request $request)
    {
        $books = Books::where('title', 'like', '%' . $request->input('search') . '%')
            ->orWhere('description', 'like', '%' . $request->input('search') . '%')
            ->with('categories')
            ->get();


        return response()
            ->json($books);

    }
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBooksByCategory(Request $request)
    {
        $limit = 5;
        $offset = $request->input('page') * $limit;

        $category=Categories::where('name', $request->input('name'))->first();

        $books=$category->books()->offset($offset)->limit($limit)->get();
        $count = $category->books()->count();

        return response()
            ->json([$books, $count]); //, $categories

    }
}
