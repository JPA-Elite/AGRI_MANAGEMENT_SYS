<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CashAssistanceLivelihood extends Model
{
    use HasFactory;
    protected $fillable = [
        'cash_assistance_livelihood_id',
        'name',
    ];
}
