<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('property_listings', function (Blueprint $table) {
            $table->id();
            $table->string("type");
            $table->decimal("price", 10, 2); // Handles prices with cents
            $table->longText("description");
            $table->boolean("liked");
            $table->boolean("saved");
            $table->unsignedTinyInteger("beds"); // Small storage for beds (1-255)
            $table->unsignedTinyInteger("baths"); // Small storage for baths
            $table->unsignedInteger("sqft"); // Unsigned as sqft is always positive
            $table->string("address");
            $table->unsignedInteger("number_of_views")->default(0);
            $table->unsignedInteger("number_of_saves")->default(0);
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_listings');
    }
};
