<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});


$factory->define(App\Books::class, function (Faker\Generator $faker) {

    return [
        'title' => $faker->sentence(3),
        'description' => $faker->text(500),
        'picture' => '1.png'
    ];
});

$factory->define(App\BookCategory::class, function (Faker\Generator $faker) {

    return [
        'book_id' => rand(1,100),
        'category_id' => rand(1,4),
    ];
});