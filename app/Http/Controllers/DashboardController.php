<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function admin_dashboard(Request $request){
        return response()->json([
            'total_farmer' => 0,
            'total_workers' => 0,
            'total_fisherfolks' => 0,
            'total_agri_youth' => 0,
            'total_male' => 0,
            'total_female' => 0,
            'age_bracket' => [],
            'salary' => [],
            'organization' => [],
        ], 200);
    }
}
