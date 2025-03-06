<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Parcel extends Model
{
    use HasFactory;

    protected $fillable = [
        'register_id',
        'farm_location',
        'farm_area' ,
        'ancestral_domain', 
        'agrarian_beneficiary', 
        'ownership_doc_number', 
        'ownership_type',
    ];
    public function parcel_components(): HasMany
    {
        return $this->hasMany(ParcelComponent::class,'parcel_id','id');
    }
}
