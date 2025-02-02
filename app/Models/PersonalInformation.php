<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
