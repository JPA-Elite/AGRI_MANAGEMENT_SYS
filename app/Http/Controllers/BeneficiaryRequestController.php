<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\BeneficiaryRequest;
use Illuminate\Http\Request;

class BeneficiaryRequestController extends Controller
{
    public function index()
    {
        $requests = BeneficiaryRequest::with('beneficiary')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
            
        return response()->json($requests);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'beneficiary_id' => 'required',
            'request_type' => 'required|string',
            'category' => 'required|string',
            'specific_type' => 'required|string',
            'purpose' => 'required|string',
            'requested_date' => 'required|date',
            'remarks' => 'nullable|string',
            'unit' => 'nullable|string',
            'schedule' => 'nullable|string',
            'tools' => 'required|array',
            'tools.*.name' => 'required|string',
            'tools.*.type' => 'required|string',
            'tools.*.category' => 'required|string',
            'tools.*.specific_type' => 'required|string',
            'request_context' => 'required|array',
            'request_context.category_info' => 'required|array',
            'request_context.beneficiary_type' => 'required|string',
            'request_context.schedule_options' => 'nullable|array'
        ]);

        $beneficiaryRequest = BeneficiaryRequest::create([
            'beneficiary_id' => $validated['beneficiary_id'],
            'request_type' => $validated['request_type'],
            'category' => $validated['category'],
            'specific_type' => $validated['specific_type'],
            'purpose' => $validated['purpose'],
            'requested_date' => $validated['requested_date'],
            'remarks' => $validated['remarks'],
            'unit' => $validated['unit'] ?? null,
            'schedule' => $validated['schedule'] ?? null,
            'status' => 'pending',
            'tools' => $validated['tools'],
            'request_context' => $validated['request_context']
        ]);

        return response()->json([
            'message' => 'Request created successfully',
            'data' => $beneficiaryRequest
        ], 201);
    }

    public function updateStatus(Request $request, $id)
    {
        $validated = $request->validate([
            'status' => 'required'
        ]);

        $beneficiaryRequest = BeneficiaryRequest::findOrFail($id);
        $beneficiaryRequest->update([
            'status' => $validated['status']
        ]);

        return response()->json([
            'message' => 'Status updated successfully',
            'data' => $beneficiaryRequest
        ]);
    }
}
