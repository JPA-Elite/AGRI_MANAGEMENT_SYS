<?php

namespace App\Http\Controllers;

use App\Models\Subsidy;
use Illuminate\Http\Request;

class SubsidyController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'beneficiary_id' => 'required|exists:personal_information,id',
            'amount' => 'required|numeric',
            'description' => 'required|string',
            'date_released' => 'required|date',
            'remarks' => 'nullable|string',
        ]);

        $subsidy = Subsidy::create($validated);

        return response()->json($subsidy, 201);
    }

    public function index()
    {
        $subsidies = Subsidy::with(['beneficiary.farm_profile'])->get();
        return response()->json($subsidies);
    }

    public function show(Subsidy $subsidy)
    {
        return response()->json($subsidy->load('beneficiary'));
    }

    public function approve($id)
    {
        $subsidy = Subsidy::findOrFail($id);
        $subsidy->update(['status' => 'approved']);
        return response()->json($subsidy);
    }
}
