<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\User::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => hash ('sha256', '123456'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Models\Book::class, function (Faker\Generator $faker) {

    return [
        'writer_id' => factory(App\Models\User::class)->create()->id,
        'title' => $faker->sentence(rand(2, 5)),
        'description' => $faker->text(500)
    ];
});

$factory->define(App\Models\Category::class, function (Faker\Generator $faker) {

    return [
        'name' => $faker->sentence(1),
        'parent_id' => null
    ];
});

$factory->define(App\Models\File::class, function () {

    static $i=1;

    return [
        'type' => 'books',
        'type_id' => $i++,
        'url' => '/images/1.png'
    ];
});