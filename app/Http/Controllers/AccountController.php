<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function index(Request $request)
    {
        if ($request->role == 'admin') {
            $accounts = User::where('role', '<>', 'Encoder')->get();
        } else {
            $accounts = User::where('role', '=', 'Encoder')->get();
        }
        return response()->json($accounts, 200);
    }
}
