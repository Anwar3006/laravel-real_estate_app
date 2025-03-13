<?php

namespace App\Http\Controllers;

use App\Models\PropertyListing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $likedListings = PropertyListing::where('');

        $paginated = PropertyListing::latest()->paginate();
        
        // get random article
        // $randomArticle = Article::inRandomOrder()->first();
        
        // get latest articles + articles based on most viewed
        
        return Inertia::render('Home', [
            'homeData' => $paginated
        ]);

    }
}
