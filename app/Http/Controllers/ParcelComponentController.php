<?php

namespace App\Http\Controllers;

use App\Models\ParcelComponent;
use Illuminate\Http\Request;

class ParcelComponentController extends Controller
{
    public function index()
    {
        $res = ParcelComponent::get();
        return response()->json([
            'response' => $res,
        ], 200);
    }

    public function store(Request $request)
    {
        ParcelComponent::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function show($id)
    {
        $res = ParcelComponent::where('id', $id)->first();
        return response()->json([
            'response' => $res,
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $res = ParcelComponent::where('id', $id)->first();
        $res->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function delete($id)
    {
        $res = ParcelComponent::where('id', $id)->first();
        $res->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
