<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class FarmProfile extends Model
{
    use HasFactory;
    protected $fillable = [
        'register_id',
        'main_livelihood',
        'farm_activity',
    ];

    public function personal_information(): HasOne
    {
        return $this->hasOne(PersonalInformation::class, 'register_id', 'register_id');
    }
}
