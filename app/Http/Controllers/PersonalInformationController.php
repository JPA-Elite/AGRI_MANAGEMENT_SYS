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
            'firstname' => $request->personal_info['firstname'],
            'civil' => $request->personal_info['civil'],
            'contact_person' => $request->personal_info['contact_person'],
            'contact_person_mobile' => $request->personal_info['contact_person_mobile'],
            'dob' => $request->personal_info['dob'],
            'gender' => $request->personal_info['gender'],
            'landline' => $request->personal_info['landline'],
            'lastname' => $request->personal_info['lastname'],
            'mobile' => $request->personal_info['mobile'],
            'middlename' => $request->personal_info['middlename'],
            'mothers_maiden' => $request->personal_info['mothers_maiden'],
            'pob' => $request->personal_info['pob'],
            'religion' => $request->personal_info['religion'],
            'suffix' => $request->personal_info['suffix'],
        ]);

        Household::create([
            'register_id' => $personalInfo->id,
            'household_head' => $request->personal_info['household_head'],
            'household_head_name' => $request->personal_info['household_head_name']??null,
            'household_relation' => $request->personal_info['household_relation']??null,
            'male_members' => $request->personal_info['male_members'],
            'female_members' => $request->personal_info['female_members'],
            'annual_income' => $request->personal_info['annual_income']??null,
        ]);

        GovernmentAffiliation::create([
            'register_id' => $personalInfo->id,
            'PWD' => $request->government_affiliation['PWD'],
            '4Ps' => $request->government_affiliation['4Ps'],
            'indigenous_group' => $request->government_affiliation['indigenous_group'],
            'indigenous_group_name' => $request->government_affiliation['indigenous_group_name'],
            'government_id' => $request->government_affiliation['government_id'],
            'government_id_type' => $request->government_affiliation['government_id_type'],
            'government_id_number' => $request->government_affiliation['government_id_number'],
            'farmers_association' => $request->government_affiliation['farmers_association'],
            'farmers_association_name' => $request->government_affiliation['farmers_association_name'] ?? null,
        ]);

        FarmProfile::create([
            'register_id' => $personalInfo->id,
            'main_livelihood' => $request->main_livelihood,
            'farm_activity' => $request->farm_activity,
        ]);
        foreach ($request->land_farmers as $key => $value) {
            LandFarmer::create([
                'register_id' => $personalInfo->id,
                'farmer_rotation_name' => $value['name'],
            ]);
        }

        foreach ($request->parcels as $key => $value) {
            $parcel = Parcel::create([
                'register_id' => $personalInfo->id,
                'farm_location' => $value['farmlocation'],
                'farm_area' => $value['farmarea'],
                'ancestral_domain' => $value['ancestraldomain'],
                'agrarian_beneficiary' => $value['agrarianreform'],
                'ownership_doc_number' => $value['ownership_doc_number'] ?? '',
                'ownership_type' => $value['ownership_type'] ?? null,
            ]);
            foreach ($value['components'] as $key => $val) {
                ParcelComponent::create([
                    'register_id' => $personalInfo->id,
                    'parcel_id' => $parcel->id,
                    'commodity' => $val['cropcommodity'],
                    'size' => $val['sizeha'],
                    'number_heads' => $val['heads'],
                    'farm_type' => $val['farmtype'],
                    'organic_practioner' => $val['organicpractitioner'],
                    'remarks' => $val['remarks'],
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
