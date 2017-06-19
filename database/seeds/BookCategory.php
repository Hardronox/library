<?php

use Illuminate\Database\Seeder;

class BookCategory extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\BookCategory::class, 100)->create();
    }
}
