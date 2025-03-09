<?php

namespace App\Http\Controllers;

use App\Models\FarmProfile;
use App\Models\GovernmentAffiliation;
use App\Models\Household;
use App\Models\Organization;
use App\Models\PersonalInformation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

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
        $eighteen_24 = PersonalInformation::whereBetween('dob', [
            Carbon::now()->subYears(24)->toDateString(),
            Carbon::now()->subYears(18)->toDateString(),
        ])->count();

        $twentyfive_39 = PersonalInformation::whereBetween('dob', [
            Carbon::now()->subYears(39)->toDateString(),
            Carbon::now()->subYears(25)->toDateString(),
        ])->count();

        $forty_59 = PersonalInformation::whereBetween('dob', [
            Carbon::now()->subYears(59)->toDateString(),
            Carbon::now()->subYears(40)->toDateString(),
        ])->count();

        $above_60 = PersonalInformation::where('dob', '<=', Carbon::now()->subYears(60)->toDateString())->count();


        $fisherfolk = FarmProfile::where('main_livelihood', '=', 'Fisherfolk')->count();
        $farmworker = FarmProfile::where('main_livelihood', '=', 'FarmWorker')->count();
        $laborer = FarmProfile::where('main_livelihood', '=', 'Farm-Workers/Laborer')->count();
        $agri_youth = FarmProfile::where('main_livelihood', '=', 'Agri-Youth')->count();


        $income_below_5k = Household::whereRaw('(annual_income / 12) < ?', [5000])->count();
        $income_5k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [5000, 10999])->count();
        $income_11k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [11000, 20999])->count();
        $income_21k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [21000, 30999])->count();
        $income_31k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [31000, 40999])->count();
        $income_above = Household::whereRaw('(annual_income / 12) > ?', [40000])->count();

        $top_organizations = Organization::join('government_affiliations', 'organizations.organization_name', '=', 'government_affiliations.farmers_association_name')
            ->select('organizations.organization_name', \DB::raw('COUNT(government_affiliations.id) as member_count'))
            ->groupBy('organizations.organization_name')
            ->orderByDesc('member_count')
            ->limit(5)
            ->get();

        // Calculate the total number of members in the top 5 organizations
        $total_top_5_members = $top_organizations->sum('member_count');


        return response()->json([
            'total_farmer' =>  $total_farmer,
            'total_workers' => $total_workers,
            'total_fisherfolks' => $total_fisherfolks,
            'total_agri_youth' => $total_agri_youth,
            'total_male' => $total_male,
            'total_female' => $total_female,
            'eighteen_24' => $eighteen_24,
            'twentyfive_39' => $twentyfive_39,
            'forty_59' => $forty_59,
            'above_60' => $above_60,
            'fisherfolk' => $fisherfolk,
            'farmworker' => $farmworker,
            'laborer' => $laborer,
            'agri_youth' => $agri_youth,
            'income_below_5k' => $income_below_5k,
            'income_5k' => $income_5k,
            'income_11k' => $income_11k,
            'income_21k' => $income_21k,
            'income_31k' => $income_31k,
            'income_above' => $income_above,
            'top_organizations' => $top_organizations,
            'total_top_5_members' => $total_top_5_members,
        ], 200);
    }
}
