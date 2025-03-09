<?php

namespace App\Http\Controllers;

use App\Models\PersonalInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function admin_dashboard()
    {

        $user = Auth::user();

        $total_farmer = PersonalInformation::where('status', 'Approved')->count();
        $total_workers = PersonalInformation::where('status', '=', 'Pending')->count();
        $total_fisherfolks = PersonalInformation::where('status', '=', 'Declined')->count();
        $total_agri_youth = PersonalInformation::where('status', '=', 'Declined')->count();
        $total_male = PersonalInformation::where('gender', '=', 'male')->count();
        $total_female = PersonalInformation::where('gender', '=', 'female')->count();
        $age_bracket = PersonalInformation::where('status', '=', 'Declined')->count();
        $salary = PersonalInformation::where('status', '=', 'Declined')->count();
        $organization = PersonalInformation::where('status', '=', 'Declined')->count();

        return response()->json([
            'total_farmer' =>  $total_farmer,
            'total_workers' => $total_workers,
            'total_fisherfolks' => $total_fisherfolks,
            'total_agri_youth' => $total_agri_youth,
            'total_male' => $total_male,
            'total_female' => $total_female,
            'age_bracket' => $age_bracket,
            'salary' => $salary,
            'organization' => $organization,
        ], 200);
    }
}
