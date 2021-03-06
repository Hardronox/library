<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Book
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string $picture
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Category[] $categories
 * @method static \Illuminate\Database\Query\Builder|\App\Book whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Book whereDescription($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Book whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Book wherePicture($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Book whereTitle($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Book whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Book extends Model
{
    protected $fillable = [
        'writer_id', 'title', 'description', 'picture'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function writer()
    {
        return $this->belongsTo('App\Models\User','id', 'writer_id');
    }

    public function categories()
    {
        return $this->belongsToMany('App\Models\Category');
    }

    public function image()
    {
      return $this->hasOne('App\Models\File', 'type_id', 'id');
    }
}
