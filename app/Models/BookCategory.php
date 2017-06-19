<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\BookCategory
 *
 * @property int $book_id
 * @property int $category_id
 * @method static \Illuminate\Database\Query\Builder|\App\BookCategory whereBookId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\BookCategory whereCategoryId($value)
 * @mixin \Eloquent
 */
class BookCategory extends Model
{
    const CREATED_AT = NULL;
    const UPDATED_AT = NULL;

    protected $table='book_category';

    protected $fillable = [
        'book_id',
        'category_id',
    ];
}
