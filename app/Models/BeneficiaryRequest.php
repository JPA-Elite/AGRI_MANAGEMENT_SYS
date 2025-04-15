<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BeneficiaryRequest extends Model
{
    protected $fillable = [
        'beneficiary_id',
        'request_type',
        'category',
        'specific_type',
        'purpose',
        'requested_date',
        'remarks',
        'unit',
        'schedule',
        'status',
        'tools',
        'request_context'
    ];

    protected $casts = [
        'tools' => 'array',
        'request_context' => 'array',
        'requested_date' => 'date'
    ];

    public function beneficiary()
    {
        return $this->belongsTo(PersonalInformation::class, 'beneficiary_id');
    }
}
