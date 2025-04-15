<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\FertilizerRequest;
use Illuminate\Http\Request;

class FertilizerRequestController extends Controller
{
    public function index()
    {
        return FertilizerRequest::with('beneficiary')->paginate(10);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'beneficiary_id' => 'required|exists:personal_information,id',
            'fertilizer_type' => 'required|string',
            'quantity' => 'required|integer|min:1',
            'requested_date' => 'required|date',
            'remarks' => 'nullable|string'
        ]);

        $fertilizerRequest = FertilizerRequest::create($validated);
        
        return response()->json($fertilizerRequest, 201);
    }

    public function updateStatus(Request $request, $id)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,approved,rejected'
        ]);

        $fertilizerRequest = FertilizerRequest::findOrFail($id);
        $fertilizerRequest->update($validated);

        return response()->json($fertilizerRequest);
    }
}
