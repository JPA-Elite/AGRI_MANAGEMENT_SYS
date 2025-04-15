<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\EquipmentRequest;
use Illuminate\Http\Request;

class EquipmentRequestController extends Controller
{
    public function index()
    {
        return EquipmentRequest::with('beneficiary')->paginate(10);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'beneficiary_id' => 'required|exists:personal_information,id',
            'equipment_type' => 'required|string',
            'purpose' => 'required|string',
            'requested_date' => 'required|date',
            'remarks' => 'nullable|string'
        ]);

        $equipmentRequest = EquipmentRequest::create($validated);
        
        return response()->json($equipmentRequest, 201);
    }

    public function updateStatus(Request $request, $id)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,approved,rejected'
        ]);

        $equipmentRequest = EquipmentRequest::findOrFail($id);
        $equipmentRequest->update($validated);

        return response()->json($equipmentRequest);
    }
}
