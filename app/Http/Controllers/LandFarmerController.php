<?php

namespace App\Http\Controllers;

use App\Models\LandFarmer;
use Illuminate\Http\Request;

class LandFarmerController extends Controller
{
    public function index()
    {
        $res = LandFarmer::get();
        return response()->json([
            'response' => $res,
        ], 200);
    }

    public function store(Request $request)
    {
        LandFarmer::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function show($id)
    {
        $res = LandFarmer::where('id', $id)->first();
        return response()->json([
            'response' => $res,
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $res = LandFarmer::where('id', $id)->first();
        $res->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function delete($id)
    {
        $res = LandFarmer::where('id', $id)->first();
        $res->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
