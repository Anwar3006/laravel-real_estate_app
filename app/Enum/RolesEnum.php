<?php

namespace App\Enum;

enum RolesEnum : string
{
    case Admin = 'admin';
    case Agent = 'agent';
    case User = 'user';
}
