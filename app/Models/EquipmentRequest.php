<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EquipmentRequest extends Model
{
    protected $fillable = [
        'beneficiary_id',
        'equipment_type',
        'purpose',
        'requested_date',
        'status',
        'remarks'
    ];

    public function beneficiary()
    {
        return $this->belongsTo(PersonalInformation::class, 'beneficiary_id');
    }
}
