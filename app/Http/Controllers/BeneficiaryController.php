<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PersonalInformation;
use Illuminate\Http\Request;

class BeneficiaryController extends Controller
{
    public function index(Request $request)
    {
        $query = PersonalInformation::query();
        
        if ($request->has('status')) {
            $query->where('status', $request->status)->with('farm_profile');
        }

        return $query->paginate(10);
    }
}
