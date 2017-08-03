<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUpdateCategoryRequest;
use App\Repositories\CategoryRepository;

class CategoryController extends Controller
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
        $categories = $this->repository->loadCategoriesForMainPage();

        return response()
            ->json($categories);
    }


    /**
     * @param CreateUpdateCategoryRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateUpdateCategoryRequest $request)
    {
        $category = $this->repository->createCategory($request);

        return response()
                    ->json($category);
    }


    /**
     * @param CreateUpdateCategoryRequest $request
     * @param $name
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CreateUpdateCategoryRequest $request, $name)
    {
        $category = $this->repository->updateCategory($request, $name);

        return response()
                    ->json($category);
    }

}
