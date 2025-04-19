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
                $keywords = preg_split('/\s+/', trim($query)); // Split query by spaces
                
                $q->where(function ($q) use ($keywords, $query) {
                    // Search each keyword individually in all name fields
                    foreach ($keywords as $word) {
                        $q->orWhere('firstname', 'like', "%{$word}%")
                          ->orWhere('middlename', 'like', "%{$word}%")
                          ->orWhere('lastname', 'like', "%{$word}%");
                    }

                    // Optional: Search full name combination
                    $q->orWhereRaw("CONCAT_WS(' ', firstname, middlename, lastname) LIKE ?", ["%{$query}%"])
                      ->orWhereRaw("CONCAT_WS(' ', firstname, lastname) LIKE ?", ["%{$query}%"]);
                });

                // Also allow searching by other fields
                $q->orWhere('register_id', 'like', "%{$query}%")
                  ->orWhere('barangay', 'like', "%{$query}%");
            })
            ->with('farm_profile')
            ->orderBy('created_at', 'desc')
            ->paginate(10);

        return response()->json($results);
    }
}
