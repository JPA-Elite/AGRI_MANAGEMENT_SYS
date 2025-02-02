<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Household extends Model
{
    use HasFactory;
    protected $fillable = [
        'register_id',
        'household_head',
        'household_head_name',
        'household_relation',
        'male_members',
        'female_members',
        'annual_income',
    ];
}
