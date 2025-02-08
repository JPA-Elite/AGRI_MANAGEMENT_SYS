<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FarmProfile extends Model
{
    use HasFactory;
    protected $fillable = [
        'register_id',
        'main_livelihood',
        'farm_activity',
    ];
}
