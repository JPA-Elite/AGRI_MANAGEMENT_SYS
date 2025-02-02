<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LandFarmer extends Model
{
    use HasFactory;
    protected $fillable = [
        'register_id',
        'farmer_rotation_name',
    ];
}
