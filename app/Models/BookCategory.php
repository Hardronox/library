<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\BookCategoryTableSeeder
 *
 * @property int $book_id
 * @property int $category_id
 * @method static \Illuminate\Database\Query\Builder|\App\BookCategory whereBookId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\BookCategory whereCategoryId($value)
 * @mixin \Eloquent
 */
class BookCategory extends Model
{

    protected $table='book_category';

    protected $fillable = [
        'book_id',
        'category_id',
    ];
}
