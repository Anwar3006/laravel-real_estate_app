<?php

namespace Database\Seeders;

use App\Enum\RolesEnum;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $this->call(RolesAndPermissionsSeeder::class);
        
        User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
        ])->assignRole(RolesEnum::Admin);
            
        User::factory()->create([
            'name' => 'Agent User',
            'email' => 'agent@example.com',
        ])->assignRole(RolesEnum::Agent);
            
        User::factory()->create([
            'name' => 'User User',
            'email' => 'user@example.com',
        ])->assignRole(RolesEnum::User);

        $this->call(PropertyListingSeeder::class);
    }

}
