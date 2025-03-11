<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CashAssistanceEvent extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'sponsor',
        'date',
        'location',
        'description',
        'livelihood',
    ];

    public function livelihoods(): HasMany
    {
        return $this->hasMany(CashAssistanceLivelihood::class,'cash_assistance_livelihood_id','id');
    }
}
