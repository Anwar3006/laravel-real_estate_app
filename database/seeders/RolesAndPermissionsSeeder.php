<?php

namespace Database\Seeders;

use App\Enum\PermissionsEnum;
use App\Enum\RolesEnum;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Create all permissions first
        $allPermissions = [
            //Admin
            PermissionsEnum::AccessAdminDashboard->value,
            PermissionsEnum::ManageAllProperties->value,
            PermissionsEnum::ManageAgents->value,
            PermissionsEnum::ManageUsers->value,
            PermissionsEnum::ViewFinancialReports->value,
            PermissionsEnum::ManageSiteSettings->value,

            //Admin & Agent
            PermissionsEnum::CreateProperties->value,

            //Agent
            PermissionsEnum::AccessAgentBoard->value,
            PermissionsEnum::ApproveListings->value,
            PermissionsEnum::ManageTransactions->value,
            PermissionsEnum::ManageAssignedProperties->value,
            PermissionsEnum::CreateClientAccounts->value,
            PermissionsEnum::ViewClientDetails->value,
            PermissionsEnum::SchedulePropertyViewings->value,
            PermissionsEnum::GeneratePropertyReports->value,
            PermissionsEnum::SubmitTransactionOffers->value,

            //User
            PermissionsEnum::ViewPublicProperties->value,
            PermissionsEnum::SaveFavoriteProperties->value,
            PermissionsEnum::RequestPropertyViewing->value,
            PermissionsEnum::SubmitInquiry->value,
            PermissionsEnum::ViewPropertyDetails->value,
            PermissionsEnum::CompareProperties->value,
            PermissionsEnum::ReceivePropertyAlerts->value,
        ];

        //Create Permissions
        foreach ($allPermissions as $permissionName) {
            Permission::firstOrCreate(['name' => $permissionName, 'guard_name' => 'web']);
        }

        //Create Roles and Assign Permissions
        $roleAdmin = Role::firstOrCreate(['name' => RolesEnum::Admin->value, 'guard_name' => 'web']);
        $roleAdmin->syncPermissions([
            PermissionsEnum::AccessAdminDashboard->value,
            PermissionsEnum::ManageAllProperties->value,
            PermissionsEnum::ManageAgents->value,
            PermissionsEnum::ManageUsers->value,
            PermissionsEnum::ViewFinancialReports->value,
            PermissionsEnum::ManageSiteSettings->value,
            PermissionsEnum::CreateProperties->value,
        ]);

        $roleAgent = Role::firstOrCreate(['name' => RolesEnum::Agent->value, 'guard_name' => 'web']);
        $roleAgent->syncPermissions([
            PermissionsEnum::CreateProperties->value,
            PermissionsEnum::AccessAgentBoard->value,
            PermissionsEnum::ApproveListings->value,
            PermissionsEnum::ManageTransactions->value,
            PermissionsEnum::ManageAssignedProperties->value,
            PermissionsEnum::CreateClientAccounts->value,
            PermissionsEnum::ViewClientDetails->value,
            PermissionsEnum::SchedulePropertyViewings->value,
            PermissionsEnum::GeneratePropertyReports->value,
            PermissionsEnum::SubmitTransactionOffers->value,
        ]);

        $roleUser = Role::firstOrCreate(['name' => RolesEnum::User->value, 'guard_name' => 'web']);
        $roleUser->syncPermissions([
            PermissionsEnum::ViewPublicProperties->value,
            PermissionsEnum::SaveFavoriteProperties->value,
            PermissionsEnum::RequestPropertyViewing->value,
            PermissionsEnum::SubmitInquiry->value,
            PermissionsEnum::ViewPropertyDetails->value,
            PermissionsEnum::CompareProperties->value,
            PermissionsEnum::ReceivePropertyAlerts->value,
        ]);
    }
}
