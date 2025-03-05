<?php

namespace App\Enum;

enum PermissionsEnum : string
{
    // Admin Permissions
    case ManageAllProperties = 'manage_all_properties';
    case ManageAgents = 'manage_agents';
    case ManageUsers = 'manage_users';
    case AccessAdminDashboard = 'access_admin_dashboard';
    case ViewFinancialReports = 'view_financial_reports';
    case ManageSiteSettings = 'manage_site_settings';
    // Admin + Agent Properties
    case CreateProperties = 'create_properties';
    // Agent Permissions
    case ApproveListings = 'approve_listings';
    case ManageTransactions = 'manage_transactions';
    case ManageAssignedProperties = 'manage_assigned_properties';
    case CreateClientAccounts = 'create_client_accounts';
    case ViewClientDetails = 'view_client_details';
    case SchedulePropertyViewings = 'schedule_property_viewings';
    case GeneratePropertyReports = 'generate_property_reports';
    case SubmitTransactionOffers = 'submit_transaction_offers';
    case AccessAgentBoard = 'access_agent_board';
    // User Permissions
    case ViewPublicProperties = 'view_public_properties';
    case SaveFavoriteProperties = 'save_favorite_properties';
    case RequestPropertyViewing = 'request_property_viewing';
    case SubmitInquiry = 'submit_inquiry';
    case ViewPropertyDetails = 'view_property_details';
    case CompareProperties = 'compare_properties';
    case ReceivePropertyAlerts = 'receive_property_alerts';
}
