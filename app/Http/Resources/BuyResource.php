<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BuyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'address' => $this->address,
            'baths' => $this->baths,
            'beds' => $this->beds,
            'description' => $this->description,
            'created_at' => $this->created_at,
            'created_at' => $this->updated_at,
            'images' => $this->images,
            'number_of_saves' => $this->number_of_saves,
            'number_of_views' => $this->number_of_views,
            'price' => $this->price,
            'sqft' => $this->sqft,
            'type' => $this->type,
            'agent_id' => $this->user_id,
            
        ];
    }
}
