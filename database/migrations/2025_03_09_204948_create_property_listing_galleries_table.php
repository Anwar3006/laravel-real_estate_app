<?php

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
        Schema::create('property_listing_galleries', function (Blueprint $table) {
            $table->id();
            $table->foreignId("property_listing_id")->constrained()->cascadeOnDelete();
            $table->text("imageUrl");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_listing_galleries');
    }
};
