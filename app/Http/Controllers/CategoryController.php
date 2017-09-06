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
        $categories = $this->repository->loadCategories();

        return response()
            ->json($categories);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $category = $this->repository->loadSingleCategory($id);

        return response()
                    ->json($category);
    }
    /**
     * @param CreateUpdateCategoryRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateUpdateCategoryRequest $customRequest)
    {


        $category = $this->repository->createCategory($customRequest->only(['name', 'parentCategory']));

        return response()
                    ->json($category);
    }


    /**
     * @param CreateUpdateCategoryRequest $request
     * @param $name
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CreateUpdateCategoryRequest $customRequest, $id)
    {
//		var_dump($customRequest->all());

        $category = $this->repository->updateCategory($customRequest, $id);

        return response()
                    ->json($category);
    }

}
