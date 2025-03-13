<?php

namespace Database\Seeders;

use App\Enum\PropertyFeatureCategoryEnum;
use App\Enum\PropertyTypeEnum;
use App\Models\PropertyFeature;
use App\Models\PropertyFeatureDetails;
use App\Models\PropertyListing;
use App\Models\PropertyListingGallery;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PropertyListingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // agents can create a new listing
        $randomAgent = User::role('agent')->inRandomOrder()->first();
        
        $faker = Faker::create();
        //create property listing
        for ($i=0; $i < 10; $i++) { 
            $propertyListing = PropertyListing::create([
                'type' => $faker->randomElement([PropertyTypeEnum::SINGLE_FAMILY->value, 
                                                 PropertyTypeEnum::APARTMENT->value, 
                                                 PropertyTypeEnum::CONDO->value, 
                                                 PropertyTypeEnum::COTTAGE->value, 
                                                 PropertyTypeEnum::TOWNHOUSE->value, 
                                                 PropertyTypeEnum::VILLA->value]),
                'price' => $faker->numberBetween(200000, 900000),
                'description' => $faker->sentence(),
                'liked' => $faker->boolean(40),
                'saved' => $faker->boolean(30),
                'beds' => $faker->numberBetween(2,5),
                'baths' => $faker->numberBetween(1, 4),
                'sqft' => $faker->numberBetween(800, 5000),
                'address' => $faker->address(),
                'number_of_views' => $faker->numberBetween(10, 500),
                'number_of_saves' => $faker->numberBetween(1, 50),
                'user_id' => $randomAgent->id,
            ]);

            // Create gallery images for this listing
            $images = [
                'https://photos.zillowstatic.com/fp/50474d3aea55ad0b7f60adbff9a3c209-cc_ft_1536.webp',
                'https://photos.zillowstatic.com/fp/2a582f036e4230a4e5f082190b0ab6d6-cc_ft_768.webp',
                'https://photos.zillowstatic.com/fp/865e7d7290d467cdbbdc16f8fe973656-cc_ft_768.webp'
            ];

            foreach ($images as $imageUrl) {
                PropertyListingGallery::create([
                    'imageUrl' => $imageUrl,
                    'property_listing_id' => $propertyListing->id,
                ]);
            }

            // create listing features
            $feature = PropertyFeature::create([
                'property_listing_id' => $propertyListing->id,
                'category' => $faker->randomElement([
                    PropertyFeatureCategoryEnum::INTERIOR->value,
                    PropertyFeatureCategoryEnum::PROPERTY->value,
                    PropertyFeatureCategoryEnum::CONSTRUCTION->value,
                    PropertyFeatureCategoryEnum::COMMUNITY_AND_HOA->value,
                    PropertyFeatureCategoryEnum::UTILITIES_AND_GREEN_ENERGY->value,
                    PropertyFeatureCategoryEnum::FINANCIAL_AND_LISTING_DETAILS->value,
                ])
            ]);

            // create feature details
            PropertyFeatureDetails::create([
                'property_feature_id' => $feature->id,
                'section' => $faker->randomElement(['Bedrooms & bathrooms', 'Heating', 'Cooling', 'Appliances', 'Features', 'Interior area']),
                'key' => $faker->sentence(1),
                'value' => $faker->sentence(1)
            ]);
        }

    }
}
