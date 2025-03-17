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
    public function verifier_dashboard(Request $request)
    {
        $user = Auth::user();
        $barangay = $user->brgy;

        $total_farmer_query = PersonalInformation::where('status', 'Active');
        $total_workers_query = PersonalInformation::where('status', 'Pending');
        $total_fisherfolks_query = PersonalInformation::where('status', 'Declined');
        $total_agri_youth_query = PersonalInformation::where('status', 'Declined');
        $total_male_query = PersonalInformation::where('gender', 'male')->where('status', 'active');
        $total_female_query = PersonalInformation::where('gender', 'female')->where('status', 'active');

        // Age group queries
        $eighteen_24_query = PersonalInformation::whereBetween('dob', [
            Carbon::now()->subYears(24)->toDateString(),
            Carbon::now()->subYears(18)->toDateString(),
        ])->where('status', 'active');

        $twentyfive_39_query = PersonalInformation::whereBetween('dob', [
            Carbon::now()->subYears(39)->toDateString(),
            Carbon::now()->subYears(25)->toDateString(),
        ])->where('status', 'active');

        $forty_59_query = PersonalInformation::whereBetween('dob', [
            Carbon::now()->subYears(59)->toDateString(),
            Carbon::now()->subYears(40)->toDateString(),
        ])->where('status', 'active');

        $above_60_query = PersonalInformation::where('dob', '<=', Carbon::now()->subYears(60)->toDateString())
            ->where('status', 'active');

        // Livelihood-based queries
        $fisherfolk_query = PersonalInformation::where('status', 'active')
            ->whereHas('farm_profiles', function ($query) {
                $query->where('main_livelihood', 'Fisherfolk');
            });

        $farmworker_query = PersonalInformation::where('status', 'active')
            ->whereHas('farm_profiles', function ($query) {
                $query->where('main_livelihood', 'Farmer');
            });

        $laborer_query = PersonalInformation::where('status', 'active')
            ->whereHas('farm_profiles', function ($query) {
                $query->where('main_livelihood', 'Farm-Workers/Laborer');
            });

        $agri_youth_query = PersonalInformation::where('status', 'active')
            ->whereHas('farm_profiles', function ($query) {
                $query->where('main_livelihood', 'Agri Youth');
            });

        // Apply barangay filter if provided
        if ($barangay) {
            $total_farmer_query->where('barangay', $barangay);
            $total_workers_query->where('barangay', $barangay);
            $total_fisherfolks_query->where('barangay', $barangay);
            $total_agri_youth_query->where('barangay', $barangay);
            $total_male_query->where('barangay', $barangay);
            $total_female_query->where('barangay', $barangay);
            $eighteen_24_query->where('barangay', $barangay);
            $twentyfive_39_query->where('barangay', $barangay);
            $forty_59_query->where('barangay', $barangay);
            $above_60_query->where('barangay', $barangay);
            $fisherfolk_query->where('barangay', $barangay);
            $farmworker_query->where('barangay', $barangay);
            $laborer_query->where('barangay', $barangay);
            $agri_youth_query->where('barangay', $barangay);
        }

        // Execute count queries
        $total_farmer = $total_farmer_query->count();
        $total_workers = $total_workers_query->count();
        $total_fisherfolks = $total_fisherfolks_query->count();
        $total_agri_youth = $total_agri_youth_query->count();
        $total_male = $total_male_query->count();
        $total_female = $total_female_query->count();
        $eighteen_24 = $eighteen_24_query->count();
        $twentyfive_39 = $twentyfive_39_query->count();
        $forty_59 = $forty_59_query->count();
        $above_60 = $above_60_query->count();
        $fisherfolk = $fisherfolk_query->count();
        $farmworker = $farmworker_query->count();
        $laborer = $laborer_query->count();
        $agri_youth = $agri_youth_query->count();



        $income_below_5k = Household::whereRaw('(annual_income / 12) < ?', [5000])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();


        $income_5k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [5000, 10999])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();

        $income_11k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [11000, 20999])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();

        $income_21k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [21000, 30999])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();

        $income_31k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [31000, 40999])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();

        $income_above = Household::whereRaw('(annual_income / 12) > ?', [40000])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();


        $top_organizations = Organization::join('government_affiliations', 'organizations.organization_name', '=', 'government_affiliations.farmers_association_name')
            ->join('personal_information', 'government_affiliations.register_id', '=', 'personal_information.register_id')
            ->where('personal_information.status', 'active')
            ->when($request->search, function ($query) use ($barangay) {
                return $query->where('personal_information.barangay', $barangay);
            })
            ->select('organizations.organization_name', \DB::raw('COUNT(government_affiliations.id) as member_count'))
            ->groupBy('organizations.organization_name')
            ->orderByDesc('member_count')
            ->limit(5)
            ->get();

        // Calculate the total number of members in the top 5 organizations
        $total_top_5_members = $top_organizations->sum('member_count');



        return response()->json([
            'active_beneficiary' => $total_farmer_query->with(['farm_profile'])->get(),
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
    public function admin_dashboard(Request $request)
    {
        $user = Auth::user();
        $barangay = $request->search;

        // Queries with optional barangay filtering
        $total_farmer_query = PersonalInformation::where('status', 'Active');
        $total_workers_query = PersonalInformation::where('status', 'Pending');
        $total_fisherfolks_query = PersonalInformation::where('status', 'Declined');
        $total_agri_youth_query = PersonalInformation::where('status', 'Declined');
        $total_male_query = PersonalInformation::where('gender', 'male')->where('status', 'active');
        $total_female_query = PersonalInformation::where('gender', 'female')->where('status', 'active');

        // Age group queries
        $eighteen_24_query = PersonalInformation::whereBetween('dob', [
            Carbon::now()->subYears(24)->toDateString(),
            Carbon::now()->subYears(18)->toDateString(),
        ])->where('status', 'active');

        $twentyfive_39_query = PersonalInformation::whereBetween('dob', [
            Carbon::now()->subYears(39)->toDateString(),
            Carbon::now()->subYears(25)->toDateString(),
        ])->where('status', 'active');

        $forty_59_query = PersonalInformation::whereBetween('dob', [
            Carbon::now()->subYears(59)->toDateString(),
            Carbon::now()->subYears(40)->toDateString(),
        ])->where('status', 'active');

        $above_60_query = PersonalInformation::where('dob', '<=', Carbon::now()->subYears(60)->toDateString())
            ->where('status', 'active');

        // Livelihood-based queries
        $fisherfolk_query = PersonalInformation::where('status', 'active')
            ->whereHas('farm_profiles', function ($query) {
                $query->where('main_livelihood', 'Fisherfolk');
            });

        $farmworker_query = PersonalInformation::where('status', 'active')
            ->whereHas('farm_profiles', function ($query) {
                $query->where('main_livelihood', 'Farmer');
            });

        $laborer_query = PersonalInformation::where('status', 'active')
            ->whereHas('farm_profiles', function ($query) {
                $query->where('main_livelihood', 'Farm-Workers/Laborer');
            });

        $agri_youth_query = PersonalInformation::where('status', 'active')
            ->whereHas('farm_profiles', function ($query) {
                $query->where('main_livelihood', 'Agri Youth');
            });

        // Apply barangay filter if provided
        if ($barangay) {
            $total_farmer_query->where('barangay', $barangay);
            $total_workers_query->where('barangay', $barangay);
            $total_fisherfolks_query->where('barangay', $barangay);
            $total_agri_youth_query->where('barangay', $barangay);
            $total_male_query->where('barangay', $barangay);
            $total_female_query->where('barangay', $barangay);
            $eighteen_24_query->where('barangay', $barangay);
            $twentyfive_39_query->where('barangay', $barangay);
            $forty_59_query->where('barangay', $barangay);
            $above_60_query->where('barangay', $barangay);
            $fisherfolk_query->where('barangay', $barangay);
            $farmworker_query->where('barangay', $barangay);
            $laborer_query->where('barangay', $barangay);
            $agri_youth_query->where('barangay', $barangay);
        }

        // Execute count queries
        $total_farmer = $total_farmer_query->count();
        $total_workers = $total_workers_query->count();
        $total_fisherfolks = $total_fisherfolks_query->count();
        $total_agri_youth = $total_agri_youth_query->count();
        $total_male = $total_male_query->count();
        $total_female = $total_female_query->count();
        $eighteen_24 = $eighteen_24_query->count();
        $twentyfive_39 = $twentyfive_39_query->count();
        $forty_59 = $forty_59_query->count();
        $above_60 = $above_60_query->count();
        $fisherfolk = $fisherfolk_query->count();
        $farmworker = $farmworker_query->count();
        $laborer = $laborer_query->count();
        $agri_youth = $agri_youth_query->count();



        $income_below_5k = Household::whereRaw('(annual_income / 12) < ?', [5000])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();


        $income_5k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [5000, 10999])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();

        $income_11k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [11000, 20999])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();

        $income_21k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [21000, 30999])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();

        $income_31k = Household::whereRaw('(annual_income / 12) BETWEEN ? AND ?', [31000, 40999])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();

        $income_above = Household::whereRaw('(annual_income / 12) > ?', [40000])
            ->whereHas('personal_information', function ($query) use ($barangay, $request) {
                if ($request->search) {
                    $query->where('barangay', $barangay);
                }
                $query->where('status', 'active');
            })->count();


        $top_organizations = Organization::join('government_affiliations', 'organizations.organization_name', '=', 'government_affiliations.farmers_association_name')
            ->join('personal_information', 'government_affiliations.register_id', '=', 'personal_information.register_id')
            ->where('personal_information.status', 'active')
            ->when($request->search, function ($query) use ($barangay) {
                return $query->where('personal_information.barangay', $barangay);
            })
            ->select('organizations.organization_name', \DB::raw('COUNT(government_affiliations.id) as member_count'))
            ->groupBy('organizations.organization_name')
            ->orderByDesc('member_count')
            ->limit(5)
            ->get();

        // Calculate the total number of members in the top 5 organizations
        $total_top_5_members = $top_organizations->sum('member_count');



        return response()->json([
            'active_beneficiary' => $total_farmer_query->with(['farm_profile'])->get(),
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
