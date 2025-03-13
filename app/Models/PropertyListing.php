<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PropertyListing extends Model
{
    use HasFactory;

    protected $fillable = [
        "type", "price", "description",
        "beds", "baths", "sqft", "address",
        "number_of_views", "number_of_saves"
    ];

    /**
     * Get the user(agent) that owns the Listings
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function agent(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    /**
     * Get all of the images for the PropertyListing
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function images(): HasMany
    {
        return $this->hasMany(PropertyListingGallery::class);
    }

    /**
     * Get all of the features for the PropertyListing
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function features(): HasMany
    {
        return $this->hasMany(PropertyFeature::class);
    }
}
