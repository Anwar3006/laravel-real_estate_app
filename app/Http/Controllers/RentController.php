<?php

namespace App\Http\Controllers;

use App\Http\Resources\RentResource;
use App\Models\PropertyListing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $paginated = PropertyListing::with('images')->latest()->paginate(3);
        return Inertia::render('Buy_Rent/Index', [
            'homeData' => RentResource::collection($paginated)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PropertyListing $propertyListing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PropertyListing $propertyListing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PropertyListing $propertyListing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PropertyListing $propertyListing)
    {
        //
    }
}
