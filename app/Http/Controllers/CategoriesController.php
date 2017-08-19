<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUpdateCategoryRequest;
use App\Repositories\CategoryRepository;

class CategoriesController extends Controller
{

    /**
     * @var CategoryRepository
     */
    private $repository;

    /**
     * CategoryController constructor.
     * @param CategoryRepository $repository
     */
    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $categories = $this->repository->loadCategories();

        return response()
            ->json($categories);
    }


    /**
     * @param CreateUpdateCategoryRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateUpdateCategoryRequest $customRequest)
    {
        $category = $this->repository->createCategory($customRequest);

        return response()
                    ->json($category);
    }


    /**
     * @param CreateUpdateCategoryRequest $request
     * @param $name
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CreateUpdateCategoryRequest $customRequest, $name)
    {
        $category = $this->repository->updateCategory($customRequest, $name);

        return response()
                    ->json($category);
    }

}
