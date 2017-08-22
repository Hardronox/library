<?php

namespace App\Repositories;

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
    public function loadSingleBook($id)
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
        $book = new Book();
        $book->title = array_get($request->all(), 'title');
        $book->description = array_get($request->all(), 'description');
        $book->save();

        if ($request->hasFile('image')) {
            $file->uploadImage($request, 'books', $book->id);
        }
        $book->save();

        if ($request->input('categories'))
        {
            $category = Category::whereIn('name', $request->input('categories'))->get();
            $book->categories()->attach($category);
        }

        return $book;
    }

    /**
     * @param $request
     * @param $id
     * @return mixed
     */
    public function updateBook($request, $id, $file)
    {
        $book = Book::where('id', $id)->first();

        $book->title = array_get($request->all(), 'title');
        $book->description = array_get($request->all(), 'description');

        if ($request->hasFile('image')) {
            $file->uploadImage($request, 'books', $book->id);
        }
        $book->save();

        if ($request->input('categories'))
        {
            $category = Category::whereIn('name', $request->input('categories'))->get();
            $book->categories()->attach($category);
        }

        return $book;
    }

    /**
     * @param $id
     */
    public function deleteBook($id)
    {
      Book::destroy($id);
    }

    /**
     * @param $request
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function loadBooksForSearch($query)
    {
        $search=array_get($query, 'search');

        return Book::where('title', 'like', '%' . $search . '%')
            ->orWhere('description', 'like', '%' . $search . '%')
            ->with('categories')
            ->with('image')
            ->limit(20)
            ->get();
    }

    /**
     * @param $request
     * @return array
     */
    public function loadBooksForCategory($request)
    {
        $limit = 5;
        $offset = $request['page'] * $limit;

        $category = Category::where('name', $request['name'])->first();

        $books = $category->books()->offset($offset)->limit($limit)->with('image')->get();
        $count = $category->books()->count();

        return [$books, $count];
    }
}