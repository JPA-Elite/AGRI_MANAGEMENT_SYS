<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class GovernmentAffiliation extends Model
{
    use HasFactory;
    protected $fillable = [
        'register_id',
        'PWD',  // Person with Disability
        '4Ps',  // 4Ps (Pantawid Pamilyang Pilipino Program)
        'indigenous_group',
        'indigenous_group_name',
        'government_id',
        'government_id_type',
        'government_id_number',
        'farmers_association',
        'farmers_association_name',
    ];

    public function personal_information(): HasOne
    {
        return $this->hasOne(PersonalInformation::class, 'register_id', 'register_id');
    }
}
