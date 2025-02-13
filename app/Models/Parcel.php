<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parcel extends Model
{
    use HasFactory;

    protected $fillable = [
        'register_id',
        'farm_location',
        'farm_area' ,
        'ancestral_domain', 
        'agrarian_beneficiary', 
        'ownership_doc_number', 
        'ownership_type',
    ];
    
}
