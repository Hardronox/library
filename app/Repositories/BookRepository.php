<?php

namespace App\Repositories;

use App\Http\Controllers\FilesController;
use App\Models\Book;
use App\Models\Category;

class BookRepository
{
    /**
     * @return \Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection|static[]
     */
    public function loadBooksForMainPage()
    {
        return Book::orderBy('created_at', 'desc')
                    ->with('image')
                    ->orderBy('id', 'desc')
                    ->take(10)
                    ->get();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function loadBookForShow($id)
    {
        return Book::where('id', $id)
            ->with('categories')
            ->with('image')
            ->first();
    }

    /**
     * @param $request
     * @return Book
     */
    public function createBook($request, $file)
    {
        $book=new Book();
        $book->title=$request->input('title');
        $book->description=$request->input('description');
        $book->save();

        if ($request->hasFile('image')) {
          $file->uploadImage($request, 'books', $book->id);
        }
        $book->save();

        if ($request->input('categories'))
        {
            $category= Category::whereIn('name', $request->input('categories'))->get();
            $book->categories()->attach($category);
        }

        return $book;
    }

    /**
     * @param $request
     * @param $id
     * @return mixed
     */
    public function updateBook($request, $id)
    {
        $book= Book::where('id', $id)->first();

        $book->title=$request->input('title');
        $book->description=$request->input('description');

        if ($request->hasFile('picture')){

            $imageName = $book->id . '.' .
                $request->file('picture')->getClientOriginalExtension();

            $request->file('picture')
                ->move(base_path() . '/public/images/', $imageName
                );

            $book->picture= $imageName;
        }
        $book->save();

        return $book;
    }

    /**
     * @param $id
     */
    public function deleteBook($id)
    {
        $book= Book::where('id', $id)->first();
        $book->delete();
    }

    /**
     * @param $request
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function loadBooksForSearch($request)
    {
        return Book::where('title', 'like', '%' . $request->input('search') . '%')
            ->orWhere('description', 'like', '%' . $request->input('search') . '%')
            ->with('categories')
            ->with('image')
            ->get();
    }

    /**
     * @param $request
     * @return array
     */
    public function loadBooksForCategory($request)
    {
        $limit = 5;
        $offset = $request->input('page') * $limit;

        $category=Category::where('name', $request->input('name'))->first();

        $books=$category->books()->offset($offset)->limit($limit)->with('image')->get();
        $count = $category->books()->count();

        return [$books, $count];
    }
}