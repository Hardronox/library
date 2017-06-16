<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Categories
 *
 * @property int $id
 * @property string $name
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Categories[] $products
 * @method static \Illuminate\Database\Query\Builder|\App\Categories whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Categories whereName($value)
 * @mixin \Eloquent
 */
class Categories extends Model
{
    protected $fillable = [
        'name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function books()
    {
        return $this->belongsToMany('App\Books', 'book_category', 'category_id', 'book_id')->withPivot('category_id');
    }
}
