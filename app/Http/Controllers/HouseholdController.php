<?php

namespace App\Http\Controllers;

use App\Models\Household;
use Illuminate\Http\Request;

class HouseholdController extends Controller
{
    public function index()
    {
        $res = Household::get();
        return response()->json([
            'response' => $res,
        ], 200);
    }

    public function store(Request $request)
    {
        Household::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function show($id)
    {
        $res = Household::where('id', $id)->first();
        return response()->json([
            'response' => $res,
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $res = Household::where('id', $id)->first();
        $res->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function delete($id)
    {
        $res = Household::where('id', $id)->first();
        $res->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
