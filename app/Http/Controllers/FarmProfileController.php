<?php

namespace App\Http\Controllers;

use App\Models\FarmProfile;
use Illuminate\Http\Request;

class FarmProfileController extends Controller
{
    public function index()
    {
        $res = FarmProfile::get();
        return response()->json([
            'response' => $res,
        ], 200);
    }

    public function store(Request $request)
    {
        FarmProfile::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function show($id)
    {
        $res = FarmProfile::where('id', $id)->first();
        return response()->json([
            'response' => $res,
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $res = FarmProfile::where('id', $id)->first();
        $res->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function delete($id)
    {
        $res = FarmProfile::where('id', $id)->first();
        $res->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
