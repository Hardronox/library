<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository
{
    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function loadCategories()
    {
        return Category::limit(30)->get();
    }

    /**
     * @param $request
     * @return Category
     */
    public function createCategory($request)
    {
        $parentCategory = Category::where('name', $request->input('parentCategory'))->first();

        $newCategory = new Category();

        $newCategory->parent_id = $parentCategory->id;
        $newCategory->name = $request->input('name');
        $newCategory->save();

        return $newCategory;
    }

    /**
     * @param $request
     * @param $name
     * @return mixed
     */
    public function updateCategory($request, $name)
    {
        $category = Category::where('name', $name)->first();
        $category->name = $request->input('name');

        $category->save();

        return $category;
    }
}