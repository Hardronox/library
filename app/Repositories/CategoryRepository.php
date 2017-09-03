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


    public function loadSingleCategory($id)
    {
        return Category::find($id);
    }

    /**
     * @param $request
     * @return Category
     */
    public function createCategory($request)
    {
        $newCategory = new Category();

        $newCategory->parent_id = array_get($request, 'parentCategory');
        $newCategory->name = array_get($request, 'name');
        $newCategory->save();

        return $newCategory;
    }

    /**
     * @param $request
     * @param $name
     * @return mixed
     */
    public function updateCategory($request, $id)
    {
        $category = Category::find($id);
        $category->name = $request->input('name');

        $category->save();

        return $category;
    }
}