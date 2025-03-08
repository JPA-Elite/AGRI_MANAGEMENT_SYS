<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LGUProfile extends Model
{
    use HasFactory;
    protected $fillable = [
        'lgu_user_id',
        'address',
        'barangay',
        'brgy_code',
        'city',
        'city_code',
        'province',
        'province_code',
        'region',
        'region_code',
        'contact',  // LGU contact number
        'email',    // LGU email address
        'municipal_agricultural_office',  // Name of the municipal agricultural office
        'logo',     // Logo for the LGU
    ];
}
