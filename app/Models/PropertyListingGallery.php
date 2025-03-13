<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PropertyListingGallery extends Model
{
    use HasFactory;

    protected $fillable = ['imageUrl'];
    /**
     * Get the listing that owns the PropertyListingGallery
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function listing(): BelongsTo
    {
        return $this->belongsTo(PropertyListing::class);
    }
}
