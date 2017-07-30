<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository
{
    public function loadCategoriesForMainPage()
    {
        return Category::all();
    }

    public function createCategory($request)
    {
        $post = $request->all();

        $category=Category::create($post);

        return $category;
    }

    public function updateCategory($request, $name)
    {
        $category= Category::where('name', $name)->first();
        $category->name=$request->input('name');

        $category->save();

        return $category;
    }

    public function deleteCategory($id)
    {
        //
    }
}