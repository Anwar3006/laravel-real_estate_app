<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PropertyFeature extends Model
{
    use HasFactory;

    protected $fillable = ['category'];
    
    /**
     * Get the listing that owns the PropertyFeature
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function listing(): BelongsTo
    {
        return $this->belongsTo(PropertyListing::class);
    }

    /**
     * Get all of the details for the PropertyFeature
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function details(): HasMany
    {
        return $this->hasMany(PropertyFeatureDetails::class);
    }
}
