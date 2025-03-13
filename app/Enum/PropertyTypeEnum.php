<?php

namespace App\Enum;

enum PropertyTypeEnum: string
{
    case SINGLE_FAMILY = 'Single Family';
    case APARTMENT = 'Apartment';
    case CONDO = 'Condo';
    case TOWNHOUSE = 'Townhouse';
    case VILLA = 'Villa';
    case COTTAGE = 'Cottage';
    
}
