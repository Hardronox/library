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
        $parentCategory= Category::where('name', $request->input('parentCategory'))->first();

        $newCategory= new Category();

        $newCategory->parent_id=$parentCategory->id;
        $newCategory->name=$request->input('name');
        $newCategory->save();

        return $newCategory;
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