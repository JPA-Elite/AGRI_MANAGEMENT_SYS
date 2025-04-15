<?php

namespace App\Http\Controllers;

use App\Models\PersonalInformation;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');
        
        $results = PersonalInformation::query()
            ->when($query, function ($q) use ($query) {
                $q->where(function($q) use ($query) {
                    $q->where('firstname', 'like', "%{$query}%")
                      ->orWhere('lastname', 'like', "%{$query}%")
                      ->orWhere('register_id', 'like', "%{$query}%")
                      ->orWhere('barangay', 'like', "%{$query}%");
                });
            })
            ->with('farm_profile')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($results);
    }
}
