<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUpdateBookRequest;
use App\Repositories\BookRepository;
use Illuminate\Http\Request;


class BooksController extends Controller
{
    private $repository;

    public function __construct(BookRepository $repository)
    {
        $this->repository = $repository;
    }


    public function index()
    {
        $books = $this->repository->loadBooksForMainPage();

        return response()
                    ->json($books);
    }

    public function show($id)
    {
        $book = $this->repository->loadBookForShow($id);

        return response()
                    ->json($book);

    }

    public function store(CreateUpdateBookRequest $request)
    {
        $book = $this->repository->createBook($request);

        return response()
                    ->json($book);
    }

    public function update(CreateUpdateBookRequest $request, $id)
    {
        $book = $this->repository->loadBookForShow($request, $id);

        return response()
                    ->json($book);
    }

    public function destroy($id)
    {
        $this->repository->deleteBook($id);

        return response()
                    ->json('done');
    }


    public function getBooksBySearch(Request $request)
    {
        $books = $this->repository->loadBooksForSearch($request);

        return response()
            ->json($books);
    }

    public function getBooksByCategory(Request $request)
    {
        $data = $this->repository->loadBooksForCategory($request);

        $books=$data[0];
        $count=$data[1];

        return response()
            ->json([$books, $count]); //, $categories
    }
}
