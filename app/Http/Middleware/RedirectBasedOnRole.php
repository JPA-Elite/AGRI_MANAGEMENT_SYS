<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RedirectBasedOnRole
{
    public function handle(Request $request, Closure $next)
    {
        $account = $request->user(); // Assuming user is authenticated and account information is available

        if ($account) {
            if ($account->role == 'Admin') {
                return redirect('/administrator/dashboard');
            } else if ($account->role == 'Verifier') {
                return redirect('/customer/dashboard');
            } else if ($account->role == 'Encoder') {
                return redirect('/encoder/dashboard');
            }
        }


        return $next($request);
    }
}
