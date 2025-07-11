<?php

namespace App\Http\Controllers;

use App\Models\FarmProfile;
use App\Models\GovernmentAffiliation;
use App\Models\Household;
use App\Models\LandFarmer;
use App\Models\Parcel;
use App\Models\ParcelComponent;
use App\Models\PersonalInformation;
use App\Models\User;
use App\Notifications\ApprovedNotification;
use App\Notifications\DeclinedNotification;
use App\Notifications\PendingNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class PersonalInformationController extends Controller
{
    public function verify_beneficiary(Request $request)
    {
        $personalInformation = PersonalInformation::where('register_id', $request->register_id)->first();
        $auth = Auth::user();

        $users = User::where('role', '=', 'Admin')->get();
        foreach ($users as $key => $user) {
            if ($user) {
                if ($request->status == 'active') {
                    $user->notify(new ApprovedNotification($personalInformation, $auth));
                } else if ($request->status == 'declined') {
                    $user->notify(new DeclinedNotification($personalInformation, $auth));
                }
            }
        }


        if ($personalInformation) {
            $personalInformation->update([
                'status' => $request->status
            ]);
        }
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function index(Request $request)
    {
        $user = Auth::user();
        $query = PersonalInformation::where('status', $request->status);

        if ($user->role == 'Admin' && $request->has('search')) {
            $query->where('register_id', $request->search);
        } else if ($user->role != 'Admin' && $request->has('search')) {
            $query->where('register_id', '=', $request->search);
            $query->where('barangay', '=', $user->brgy);
        }
        if ($user->role != 'Encoder' && !$request->has('search') && $user->role != 'Admin' && !$request->has('search')) {
            $query->where('barangay', '=', $user->brgy);
        }

        $res = $query->with([
            'farm_profiles',
            'government_affiliation',
            'household',
            'land_farmers',
            'parcels',
            'parcel_components',
            'farm_profile'
        ])->paginate(10);

        return response()->json([
            'response' => $res,
        ], 200);
    }

    public function store(Request $request)
    {


        $personal_information = PersonalInformation::create([
            'register_id' => $request->register_id ?? null,
            'firstname' => $request->personal_info['firstname'] ?? null,
            'civil' => $request->personal_info['civil'] ?? null,
            'contact_person' => $request->personal_info['contact_person'] ?? null,
            'contact_person_mobile' => $request->personal_info['contact_person_mobile'] ?? null,
            'dob' => $request->personal_info['dob'] ?? null,
            'gender' => $request->personal_info['gender'] ?? null,
            'landline' => $request->personal_info['landline'] ?? null,
            'lastname' => $request->personal_info['lastname'] ?? null,
            'mobile' => $request->personal_info['mobile'] ?? null,
            'middlename' => $request->personal_info['middlename'] ?? null,
            'mothers_maiden' => $request->personal_info['mothers_maiden'] ?? null,
            'pob' => $request->personal_info['pob'] ?? null,
            'religion' => $request->personal_info['religion'] ?? null,
            'suffix' => $request->personal_info['suffix'] ?? null,
            'street_address' => $request->address_info['street_address'] ?? null,
            'street_address_2' => $request->address_info['street_address_2'] ?? null,
            'barangay' => $request->address_info['barangay'] ?? null,
            'city' => $request->address_info['city'] ?? null,
            'province' => $request->address_info['province'] ?? null,
            'region' => $request->address_info['region'] ?? null,
            'highest_education' => $request->education['highest_education'] ?? null,
            'avatar' => $request->personal_info['avatar'] ?? null,
            'verifier' => $request->personal_info['verifier'] ?? null,
            'register_date' => $request->personal_info['register_date'] ?? null,
            'status' => 'active'
        ]);

        $request->merge(['status' => 'active']);
        $this->verify_beneficiary($request);

        Household::create([
            'register_id' => $request->register_id,
            'household_head' => $request->personal_info['household_head'] ?? null,
            'household_head_name' => $request->personal_info['household_head_name'] ?? null,
            'household_relation' => $request->personal_info['household_relation'] ?? null,
            'male_members' => $request->personal_info['male_members'] ?? null,
            'household_members' => $request->personal_info['household_members'] ?? 0,
            'female_members' => $request->personal_info['female_members'] ?? null,
            'annual_income' => $request->farm_profile['annual_income'] ?? null,
        ]);

        GovernmentAffiliation::create([
            'register_id' => $request->register_id,
            'PWD' => $request->government_affiliation['PWD'] ?? null,
            '4Ps' => $request->government_affiliation['4Ps'] ?? null,
            'indigenous_group' => $request->government_affiliation['indigenous_group'] ?? null,
            'indigenous_group_name' => $request->government_affiliation['indigenous_group_name'] ?? null,
            'government_id' => $request->government_affiliation['government_id'] ?? null,
            'government_id_type' => $request->government_affiliation['government_id_type'] ?? null,
            'government_id_number' => $request->government_affiliation['government_id_number'] ?? null,
            'farmers_association' => $request->government_affiliation['farmers_association'] ?? null,
            'farmers_association_name' => $request->government_affiliation['farmers_association_name'] ?? null,
        ]);

        if ($request->farm_profile['farm_activity'] ?? null) {
            foreach ($request->farm_profile['farm_activity'] as $key => $activity) {
                FarmProfile::create([
                    'register_id' => $request->register_id,
                    'main_livelihood' => $request->farm_profile['main_livelihood'] ?? null,
                    'farm_activity' => $activity ?? null,
                ]);
            }
        }

        if ($request->land_farmers ?? null) {
            foreach ($request->land_farmers as $key => $value) {
                if ($value['name']) {
                    LandFarmer::create([
                        'register_id' => $request->register_id,
                        'farmer_rotation_name' => $value['name'] ?? null,
                    ]);
                }
            }
        }

        foreach ($request->parcels as $key => $value) {
            $parcel = Parcel::create([
                'register_id' => $request->register_id,
                'farm_location' => $value['farmlocation'] ?? null,
                'farm_area' => $value['farmarea'] ?? null,
                'ancestral_domain' => $value['ancestraldomain'] ?? null,
                'agrarian_beneficiary' => $value['agrarianreform'] ?? null,
                'ownership_doc_number' => $value['ownership_doc_number'] ?? null,
                'ownership_type' => $value['ownership_type'] ?? null,
            ]);
            if ($value['components'] ?? null) {
                foreach ($value['components'] as $key => $val) {
                    ParcelComponent::create([
                        'register_id' => $request->register_id,
                        'parcel_id' => $parcel->id,
                        'commodity' => $val['cropcommodity'] ?? null,
                        'size' => $val['sizeha'] ?? null,
                        'number_heads' => $val['heads'] ?? null,
                        'farm_type' => $val['farmtype'] ?? null,
                        'organic_practioner' => $val['organicpractitioner'] ?? null,
                        'remarks' => $val['remarks'] ?? null,
                    ]);
                }
            }

            $users = User::where([
                ['brgy', '=', $request->address_info['barangay']],
                ['role', '=', 'Verifier'],
            ])->get();

            foreach ($users as $key => $user) {
                if ($user) {
                    $user->notify(new PendingNotification($user, $request->all()));
                }
            }
        }
        
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function show($id)
    {
        $res = PersonalInformation::where('id', $id)->with(['farm_profiles', 'government_affiliation', 'household', 'land_farmers', 'parcels'])->first();
        return response()->json([
            'response' => [
                'personal_info' => $res,
                'farm_profiles' => $res->farm_profiles,
                'government_affiliation' => $res->government_affiliation,
                'household' => $res->household,
                'land_farmers' => $res->land_farmers,
                'parcels' => $res->parcels->map(function ($parcel) {
                    return array_merge($parcel->toArray(), [
                        'components' => $parcel->parcel_components,
                    ]);
                }),
            ],
        ], 200);
    }
    public function update(Request $request, $id)
    {


        PersonalInformation::where('register_id', $request->personal_info['register_id'])->update([
            'firstname' => $request->personal_info['firstname'] ?? null,
            'civil' => $request->personal_info['civil'] ?? null,
            'contact_person' => $request->personal_info['contact_person'] ?? null,
            'contact_person_mobile' => $request->personal_info['contact_person_mobile'] ?? null,
            'dob' => $request->personal_info['dob'] ?? null,
            'gender' => $request->personal_info['gender'] ?? null,
            'landline' => $request->personal_info['landline'] ?? null,
            'lastname' => $request->personal_info['lastname'] ?? null,
            'mobile' => $request->personal_info['mobile'] ?? null,
            'middlename' => $request->personal_info['middlename'] ?? null,
            'mothers_maiden' => $request->personal_info['mothers_maiden'] ?? null,
            'pob' => $request->personal_info['pob'] ?? null,
            'religion' => $request->personal_info['religion'] ?? null,
            'suffix' => $request->personal_info['suffix'] ?? null,
            'street_address' => $request->personal_info['street_address'] ?? null,
            'street_address_2' => $request->personal_info['street_address_2'] ?? null,
            'barangay' => $request->personal_info['barangay'] ?? null,
            'city' => $request->personal_info['city'] ?? null,
            'province' => $request->personal_info['province'] ?? null,
            'region' => $request->personal_info['region'] ?? null,
            'highest_education' => $request->personal_info['highest_education'] ?? null,
            'avatar' => $request->personal_info['avatar'] ?? null,
            'verifier' => $request->personal_info['verifier'] ?? null,
            'register_date' => $request->personal_info['register_date'] ?? null,
        ]);

        Household::where('register_id', $request->household['register_id'])->update([
            'household_head' => $request->household['household_head'] ?? null,
            'household_head_name' => $request->household['household_head_name'] ?? null,
            'household_relation' => $request->household['household_relation'] ?? null,
            'male_members' => $request->household['male_members'] ?? null,
            'household_members' => $request->household['household_members'] ?? 0,
            'female_members' => $request->household['female_members'] ?? null,
            // 'annual_income' => $request->farm_profile['annual_income'] ?? null,
        ]);

        GovernmentAffiliation::where('register_id', $request->government_affiliation['register_id'])->update([
            'PWD' => $request->government_affiliation['PWD'] ?? null,
            '4Ps' => $request->government_affiliation['4Ps'] ?? null,
            'indigenous_group' => $request->government_affiliation['indigenous_group'] ?? null,
            'indigenous_group_name' => $request->government_affiliation['indigenous_group_name'] ?? null,
            'government_id' => $request->government_affiliation['government_id'] ?? null,
            'government_id_type' => $request->government_affiliation['government_id_type'] ?? null,
            'government_id_number' => $request->government_affiliation['government_id_number'] ?? null,
            'farmers_association' => $request->government_affiliation['farmers_association'] ?? null,
            'farmers_association_name' => $request->government_affiliation['farmers_association_name'] ?? null,
        ]);

        foreach ($request->farm_profiles as $key => $value) {
            FarmProfile::where('id', $value['id'])->update([
                'main_livelihood' => $value['main_livelihood'] ?? null,
                'farm_activity' => $value['farm_activity'] ?? null,
            ]);
        }

        foreach ($request->land_farmers as $key => $value) {
            if ($value['farmer_rotation_name']) {
                LandFarmer::where('id',  $value['id'])->update([
                    'farmer_rotation_name' => $value['farmer_rotation_name'] ?? null,
                ]);
            }
        }

        foreach ($request->parcels as $key => $value) {
            Parcel::where('id',  $value['id'])->update([
                'farm_location' => $value['farm_location'] ?? null,
                'farm_area' => $value['farm_area'] ?? null,
                'ancestral_domain' => $value['ancestral_domain'] ?? null,
                'agrarian_beneficiary' => $value['agrarian_beneficiary'] ?? null,
                'ownership_doc_number' => $value['ownership_doc_number'] ?? null,
                'ownership_type' => $value['ownership_type'] ?? null,
            ]);
            if ($value['parcel_components'] ?? null) {
                foreach ($value['parcel_components'] as $key => $val) {
                    ParcelComponent::where('id', $val['id'])->update([
                        'commodity' => $val['commodity'] ?? null,
                        'size' => $val['size'] ?? null,
                        'number_heads' => $val['number_heads'] ?? null,
                        'farm_type' => $val['farm_type'] ?? null,
                        'organic_practioner' => $val['organic_practioner'] ?? null,
                        'remarks' => $val['remarks'] ?? null,
                    ]);
                }
            }
        }
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function delete($id)
    {
        $res = PersonalInformation::where('id', $id)->first();
        $res->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
