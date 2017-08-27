<?php

namespace Tests\Feature;

use App\Models\Book;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class BooksTest extends TestCase
{

    use DatabaseTransactions;
    use DatabaseMigrations;

    /** @test */
    public function a_user_can_see_books_on_main_page()
    {
        $book=factory(Book::class)->create();

        $response = $this->get('/');
        $response->assertStatus(200);

        $response->assertSee($book->title);
    }
}
