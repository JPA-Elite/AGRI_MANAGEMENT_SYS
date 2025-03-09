<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Organization extends Model
{
    use HasFactory;
    protected $fillable = [
        'organization_name',
        'status',
    ];

    public function government_affiliation(): HasMany
    {
        return $this->hasMany(GovernmentAffiliation::class, 'farmers_asssocation_name', 'organization_name');
    }
}
