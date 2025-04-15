<?php

namespace App\Http\Controllers;

use App\Models\Subsidy;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Notifications\ApprovedSubsidyNotification;
use App\Notifications\DeclinedSubsidyNotification;

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

    public function updateStatus(Request $request, $id)
    {
        $auth = Auth::user();
        $validated = $request->validate([
            'status' => 'required'
        ]);

        $subsidy = Subsidy::findOrFail($id);
        $personalInformation = $subsidy->beneficiary;
        $subsidy->update($validated);

        $users = User::where('role', '=', 'Admin')->get();
        foreach ($users as $key => $user) {
            if ($user) {
                if ($validated['status'] == 'approved') {
                    $user->notify(new ApprovedSubsidyNotification($personalInformation, $auth));
                } elseif ($validated['status'] == 'declined') {
                    $user->notify(new DeclinedSubsidyNotification($personalInformation, $auth));
                }
            }
        }
        return response()->json($subsidy);
    }
}
