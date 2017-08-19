<?php

use App\Models\Book;
use Illuminate\Database\Seeder;
use App\Models\Category;

class BookCategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $book=Book::all();

      foreach ($book as $item) {
        $category = Category::whereIn('id', [rand(1,10), rand(1,10), rand(1,10)])->get();
        $item->categories()->attach($category);
      }
    }
}
