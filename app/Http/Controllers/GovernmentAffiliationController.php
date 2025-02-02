<?php

namespace App\Http\Controllers;

use App\Models\GovernmentAffiliation;
use Illuminate\Http\Request;

class GovernmentAffiliationController extends Controller
{
    public function index()
    {
        $res = GovernmentAffiliation::get();
        return response()->json([
            'response' => $res,
        ], 200);
    }

    public function store(Request $request)
    {
        GovernmentAffiliation::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function show($id)
    {
        $res = GovernmentAffiliation::where('id', $id)->first();
        return response()->json([
            'response' => $res,
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $res = GovernmentAffiliation::where('id', $id)->first();
        $res->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function delete($id)
    {
        $res = GovernmentAffiliation::where('id', $id)->first();
        $res->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
