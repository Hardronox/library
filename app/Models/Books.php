<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Books
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $picture
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Categories[] $categories
 * @method static \Illuminate\Database\Query\Builder|\App\Books whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Books whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Books whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Books wherePicture($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Books whereTitle($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Books whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Books extends Model
{
    protected $fillable = [
        'title', 'description','picture'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function categories()
    {
        return $this->belongsToMany('App\Categories', 'book_category', 'book_id', 'category_id')->withPivot('category_id');
    }
}
