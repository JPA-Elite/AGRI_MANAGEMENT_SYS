<?php

namespace App\Http\Controllers;

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
        $personalInfo = PersonalInformation::create($request->personal_info);
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
