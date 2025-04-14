<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subsidy extends Model
{
    protected $fillable = [
        'beneficiary_id',
        'amount',
        'description',
        'date_released',
        'remarks',
        'status'
    ];

    public function beneficiary()
    {
        return $this->belongsTo(PersonalInformation::class, 'beneficiary_id');
    }
}
