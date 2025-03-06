<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class PersonalInformation extends Model
{
    use HasFactory;
    protected $fillable = [
        'rsbsa_id',
        'register_id',
        'firstname',
        'middlename',
        'lastname',
        'suffix',
        'mothers_maiden',
        'dob',
        'pob',
        'religion',
        'gender',
        'civil',
        'mobile',
        'landline',
        'contact_person',
        'contact_person_mobile',
        'street_address',
        'street_address_2',
        'barangay',
        'city',
        'province',
        'region',
        'highest_education',
        'status',
        'avatar',
        'verifier',
        'register_date',
    ];


    public function farm_profiles(): HasMany
    {
        return $this->hasMany(FarmProfile::class,'register_id','register_id');
    }

    public function government_affiliation(): HasOne
    {
        return $this->hasOne(GovernmentAffiliation::class,'register_id','register_id');
    }
    public function household(): HasOne
    {
        return $this->hasOne(Household::class,'register_id','register_id');
    }
    public function land_farmers(): HasMany
    {
        return $this->hasMany(LandFarmer::class,'register_id','register_id');
    }
    public function parcels(): HasMany
    {
        return $this->hasMany(Parcel::class,'register_id','register_id')->with(['parcel_components']);
    }
    public function parcel_components(): HasMany
    {
        return $this->hasMany(ParcelComponent::class,'register_id','register_id');
    }
    
}
