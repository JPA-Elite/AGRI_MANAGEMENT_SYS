<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, $role)
    {
        if (!$request->user() || !$this->checkRole($request->user()->role, $role)) {
            return Inertia::location(route('login')); 
        }

        return $next($request);
    }

    private function checkRole($userRoleId, $requiredRoleId)
    {
        // Define your logic for checking the role here
        return $userRoleId == $requiredRoleId;
    }
}
