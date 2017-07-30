<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUpdateCategoryRequest;
use App\Repositories\CategoryRepository;


class CategoriesController extends Controller
{

    private $repository;

    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $categories = $this->repository->loadCategoriesForMainPage();

        return response()
            ->json($categories);
    }


    public function store(CreateUpdateCategoryRequest $request)
    {

        $category = $this->repository->createCategory($request);

        return response()
                    ->json($category);
    }


    public function update(CreateUpdateCategoryRequest $request, $name)
    {
        $category = $this->repository->updateCategory($request, $name);

        return response()
                    ->json($category);
    }

}
