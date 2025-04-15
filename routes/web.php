<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\SearchController;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::middleware('redirectBasedOnRole')->get('/', function () {
    return Inertia::render('login/page');
})->name('login');

Route::middleware('auth:sanctum', 'role:Admin')->prefix('administrator')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('admin/dashboard/page');
    });

    Route::get('beneficiary/register', function () {
        return Inertia::render('admin/register/page');
    });

    Route::get('beneficiary', function () {
        return Inertia::render('admin/beneficiary/page');
    });

    Route::get('assistance', function () {
        return Inertia::render('admin/assistance/page');
    });

    Route::get('request', function () {
        return Inertia::render('admin/request/page');
    });

    Route::get('assistance/{id}', function () {
        return Inertia::render('admin/assistance-details/page');
    });

    Route::get('reports', function () {
        return Inertia::render('admin/dashboard/page');
    });

    Route::get('reports/brgy', function () {
        return Inertia::render('admin/brgy-reports/page');
    });

    Route::prefix('accounts')->group(function () {
        Route::get('list', function () {
            return Inertia::render('admin/accounts/page');
        });
    });

    Route::get('create-account', function () {
        return Inertia::render('admin/create-account/page');
    });

    Route::prefix('system_maintenance')->group(function () {
        Route::get('lgu-profile', function () {
            return Inertia::render('admin/lgu-profile/page');
        });

        Route::get('verifier', function () {
            return Inertia::render('admin/accounts/page');
        });

        Route::get('organization', function () {
            return Inertia::render('admin/organization/page');
        });
    });


    Route::get('contact', function () {
        return Inertia::render('admin/contact/page');
    });

    Route::get('settings', function () {
        return Inertia::render('admin/settings/page');
    });

    Route::get('profile/{id}', function () {
        return Inertia::render('admin/profile/page');
    });

    Route::get('search', function () {
        return Inertia::render('admin/search/page');
    });
   
});
Route::get('profile/{id}/pdf', function () {
    return Inertia::render('admin/profile/pdf/page');
});

Route::middleware('auth:sanctum', 'role:Verifier')->prefix('verifier')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('verifier/dashboard/page');
    });

    Route::get('beneficiary', function () {
        return Inertia::render('verifier/beneficiary/page');
    });

    Route::get('beneficiary/{id}', function () {
        return Inertia::render('verifier/profile/page');
    });

    Route::get('reports', function () {
        return Inertia::render('verifier/reports/page');
    });

    Route::get('contact', function () {
        return Inertia::render('verifier/contact/page');
    });

    Route::get('settings', function () {
        return Inertia::render('verifier/settings/page');
    });


    Route::get('profile/{id}', function () {
        return Inertia::render('verifier/profile/page');
    });
    Route::get('profile/{id}/pdf', function () {

        return Inertia::render('verifier/profile/pdf/page');
    });
});

// Route::get('verify', function () {
//     return Inertia::render('verifier/verify/page');
// });
Route::middleware('auth:sanctum')->prefix('encoder', 'role:Encoder')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('encoder/dashboard/page');
    });

    Route::get('register', function () {
        return Inertia::render('encoder/register/page');
    });

    Route::get('beneficiary', function () {
        return Inertia::render('encoder/beneficiary/page');
    });

    Route::get('reports', function () {
        return Inertia::render('encoder/reports/page');
    });

    Route::get('accounts', function () {
        return Inertia::render('encoder/accounts/page');
    });

    Route::get('create-account', function () {
        return Inertia::render('encoder/create-account/page');
    });

    Route::get('lgu-profile', function () {
        return Inertia::render('encoder/lgu-profile/page');
    });

    Route::get('verifier', function () {
        return Inertia::render('encoderpage');
    });

    Route::get('organization', function () {
        return Inertia::render('encoder/organization/page');
    });

    Route::get('contact', function () {
        return Inertia::render('encoder/contact/page');
    });

    Route::get('settings', function () {
        return Inertia::render('encoder/settings/page');
    });

    Route::get('profile/{id}', function () {
        return Inertia::render('encoder/profile/page');
    });
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
