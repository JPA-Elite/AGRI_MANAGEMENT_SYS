<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Login method
    public function login(Request $request)
    {
        // Validate the incoming data
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // Check if the user exists
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['error' => 'Email not registered'], 404);
        }

        // Check if the password matches
        if (!Hash::check($request->password, $user->password)) {
            return response()->json(['error' => 'Incorrect password'], 401);
        }

        // Check user role and return appropriate response
        $role = $user->role;
        if ($role === 'encoder') {
            return response()->json(['message' => 'Login successful', 'role' => 'LGU Encoder']);
        } elseif ($role === 'supervisor') {
            return response()->json(['message' => 'Login successful', 'role' => 'LGU Supervisor']);
        } elseif ($role === 'verifier') {
            return response()->json(['message' => 'Login successful', 'role' => 'Verifier']);
        }

        return response()->json(['error' => 'User role not found'], 400);
    }
}
