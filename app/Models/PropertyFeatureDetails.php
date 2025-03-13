<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PropertyFeatureDetails extends Model
{
    use HasFactory;

    protected $fillable = ['section', 'key', 'value'];
    /**
     * Get the feature that owns the PropertyFeatureDetails
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function feature(): BelongsTo
    {
        return $this->belongsTo(PropertyFeature::class);
    }
}
