<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FertilizerRequest extends Model
{
    protected $fillable = [
        'beneficiary_id',
        'fertilizer_type',
        'quantity',
        'requested_date',
        'status',
        'remarks'
    ];

    public function beneficiary()
    {
        return $this->belongsTo(PersonalInformation::class, 'beneficiary_id');
    }
}
