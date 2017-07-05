<?php

namespace App\Http\Controllers;

use App\Categories;
use App\Http\Requests\CreateUpdateCategoryRequest;
use Illuminate\Http\Request;


class CategoriesController extends Controller
{

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $categories = Categories::all();

        return response()
            ->json($categories); //, $categories
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CreateUpdateCategoryRequest $request)
    {
        $post = $request->all();

        $book=Categories::create($post);

        return response()
                    ->json($book);

    }


    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(CreateUpdateCategoryRequest $request, $name)
    {
        $post = $request->all();

        $category= Categories::where('name', $name)->first();
        $category->name=$post['newName'];

        $category->save();

        return response()
                    ->json($category);
    }

}
