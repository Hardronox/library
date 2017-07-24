<?php

namespace App\Repositories;

use App\Models\Book;
use App\Models\Category;

class BookRepository
{
    public function loadBooksForMainPage()
    {
        return Book::orderBy('created_at', 'desc')
                    ->orderBy('id', 'desc')
                    ->take(10)
                    ->get();
    }

    public function loadBookForShow($id)
    {
        return Book::where('id', $id)
            ->with('categories')
            ->first();
    }

    public function createBook($request)
    {
        $book=new Book();
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

        $category= Category::whereIn('name', $request->input('categories'))->get();
        //var_dump('<pre>',$category);

        $book->save();
        $book->categories()->attach($category); // associate($category);
        return $book;
    }

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

    public function deleteBook($id)
    {
        $book= Book::where('id', $id)->first();
        $book->delete();
    }

    public function loadBooksForSearch($request)
    {
        return Book::where('title', 'like', '%' . $request->input('search') . '%')
            ->orWhere('description', 'like', '%' . $request->input('search') . '%')
            ->with('categories')
            ->get();
    }

    public function loadBooksForCategory($request)
    {
        $limit = 5;
        $offset = $request->input('page') * $limit;

        $category=Category::where('name', $request->input('name'))->first();

        $books=$category->books()->offset($offset)->limit($limit)->get();
        $count = $category->books()->count();

        return [$books, $count];
    }
}