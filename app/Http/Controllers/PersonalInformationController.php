<?php

namespace App\Http\Controllers;

use App\Models\FarmProfile;
use App\Models\GovernmentAffiliation;
use App\Models\Household;
use App\Models\LandFarmer;
use App\Models\Parcel;
use App\Models\ParcelComponent;
use App\Models\PersonalInformation;
use Illuminate\Http\Request;

class PersonalInformationController extends Controller
{
    public function index()
    {
        $res = PersonalInformation::get();
        return response()->json([
            'response' => $res,
        ], 200);
    }

    public function store(Request $request)
    {
        $personalInfo = PersonalInformation::create([
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
        ]);

        Household::create([
            'register_id' => $personalInfo->id,
            'household_head' => $request->personal_info['household_head'] ?? null,
            'household_head_name' => $request->personal_info['household_head_name'] ?? null,
            'household_relation' => $request->personal_info['household_relation'] ?? null,
            'male_members' => $request->personal_info['male_members'] ?? null,
            'female_members' => $request->personal_info['female_members'] ?? null,
            'annual_income' => $request->personal_info['annual_income'] ?? null,
        ]);

        GovernmentAffiliation::create([
            'register_id' => $personalInfo->id,
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

        FarmProfile::create([
            'register_id' => $personalInfo->id,
            'main_livelihood' => $request->personal_info['main_livelihood'] ?? null,
            'farm_activity' => $request->personal_info['farm_activity'] ?? null,
        ]);
        foreach ($request->land_farmers as $key => $value) {
            LandFarmer::create([
                'register_id' => $personalInfo->id,
                'farmer_rotation_name' => $value['name'] ?? null,
            ]);
        }

        foreach ($request->parcels as $key => $value) {
            $parcel = Parcel::create([
                'register_id' => $personalInfo->id,
                'farm_location' => $value['farmlocation'] ?? null,
                'farm_area' => $value['farmarea'] ?? null,
                'ancestral_domain' => $value['ancestraldomain'] ?? null,
                'agrarian_beneficiary' => $value['agrarianreform'] ?? null,
                'ownership_doc_number' => $value['ownership_doc_number'] ?? '',
                'ownership_type' => $value['ownership_type'] ?? null,
            ]);
            foreach ($value['components'] as $key => $val) {
                ParcelComponent::create([
                    'register_id' => $personalInfo->id,
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
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function show($id)
    {
        $res = PersonalInformation::where('id', $id)->first();
        return response()->json([
            'response' => $res,
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $res = PersonalInformation::where('id', $id)->first();
        $res->update($request->all());
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
