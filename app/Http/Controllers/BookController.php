<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUpdateBookRequest;
use App\Repositories\BookRepository;
use Illuminate\Http\Request;


class BookController extends Controller
{
    /**
     * @var BookRepository
     */
    private $repository;

    /**
     * BookController constructor.
     * @param BookRepository $repository
     */
    public function __construct(BookRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $books = $this->repository->loadBooksForMainPage();

        return response()
                    ->json($books);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $book = $this->repository->loadBookForShow($id);

        return response()
                    ->json($book);
    }

    /**
     * @param CreateUpdateBookRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateUpdateBookRequest $request, FilesController $file)
    {
        $book = $this->repository->createBook($request, $file);

        return response()
                    ->json($book);
    }

    /**
     * @param CreateUpdateBookRequest $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CreateUpdateBookRequest $request, $id)
    {
        $book = $this->repository->updateBook($request, $id);

        return response()
                    ->json($book);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $this->repository->deleteBook($id);

        return response()
                    ->json('done');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBooksBySearch(Request $request)
    {
        $books = $this->repository->loadBooksForSearch($request);

        return response()
            ->json($books);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBooksByCategory(Request $request)
    {
        $data = $this->repository->loadBooksForCategory($request);

        $books=$data[0];
        $count=$data[1];

        return response()
            ->json([$books, $count]);
    }
}
