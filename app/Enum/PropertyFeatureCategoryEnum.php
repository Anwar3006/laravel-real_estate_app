<?php

namespace App\Enum;

enum PropertyFeatureCategoryEnum: string
{
    case INTERIOR = 'Interior';
    case PROPERTY = 'Property';
    case CONSTRUCTION = 'Construction';
    case UTILITIES_AND_GREEN_ENERGY = 'Utilities & Green energy';
    case COMMUNITY_AND_HOA = 'Community & HOA';
    case FINANCIAL_AND_LISTING_DETAILS = 'Financial & Listing details';
}
