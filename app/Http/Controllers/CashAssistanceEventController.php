<?php

namespace App\Http\Controllers;

use App\Models\CashAssistanceEvent;
use App\Models\CashAssistanceLivelihood;
use App\Models\User;
use App\Notifications\CashAssistanceNotification;
use Illuminate\Http\Request;

class CashAssistanceEventController extends Controller
{
    // Display a listing of the events
    public function index()
    {
        return response()->json(CashAssistanceEvent::with('livelihoods')->orderBy('id', 'desc')->get());
    }

    // Store a newly created event
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'sponsor' => 'required|string',
            'date' => 'required',
            'location' => 'required|string',
            'description' => 'required|string',
            'livelihoods' => 'required',
        ]);

        $event = CashAssistanceEvent::create($validatedData);
        foreach ($validatedData['livelihoods'] as $key => $value) {
            CashAssistanceLivelihood::create([
                'cash_assistance_livelihood_id' => $event['id'],
                'name' => $value,
            ]);
        }
        $verifiers = User::where('role', 'Verifier')->get();
        foreach ($verifiers as $verifier) {
            $verifier->notify(new CashAssistanceNotification($event, $verifier->firstname . ' ' . $verifier->middlename . ' ' . $verifier->lastname));
        }

        return response()->json($event, 200);
    }

    // Display the specified event
    public function show($id)
    {
        $event = CashAssistanceEvent::where('id', $id)->with('livelihoods')->first();
        return response()->json($event);
    }

    // Update the specified event
    public function update(Request $request, $id)
    {
        $event = CashAssistanceEvent::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string',
            'sponsor' => 'required|string',
            'date' => 'required',
            'location' => 'required|string',
            'description' => 'required',
            'livelihood' => 'nullable',
        ]);
        
        $event->update($validatedData);
        // $verifiers = User::where('role', 'Verifier')->get();
        // foreach ($verifiers as $verifier) {
        //     $verifier->notify(new CashAssistanceNotification($event, $verifier->firstname . ' ' . $verifier->middlename . ' ' . $verifier->lastname));
        // }
        
       return response()->json($event,200);
    }

    // Remove the specified event
    public function destroy($id)
    {
        $event = CashAssistanceEvent::findOrFail($id);
        $event->delete();
        return response()->json(['message' => 'Event deleted successfully']);
    }
}
