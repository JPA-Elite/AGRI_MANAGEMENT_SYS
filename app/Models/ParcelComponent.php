<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParcelComponent extends Model
{
    use HasFactory;
    protected $fillable = [
        'register_id',
        'parcel_id',
        'commodity', 
        'size', 
        'number_heads',
        'farm_type', 
        'organic_practioner',
        'remarks',
    ];
}
