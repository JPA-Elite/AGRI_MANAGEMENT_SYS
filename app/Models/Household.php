<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
        'household_members'
    ];

    public function personal_information(): HasOne
    {
        return $this->hasOne(PersonalInformation::class, 'register_id', 'register_id');
    }
}
