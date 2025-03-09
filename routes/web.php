<?php

use App\Http\Controllers\ProfileController;
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

Route::get('/', function () {
    return Inertia::render('login/page');
})->name('login');

Route::middleware('auth:sanctum')->prefix('administrator')->group(function () {
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

    Route::get('assistance-details', function () {
        return Inertia::render('admin/assistance-details/page');
    });

    Route::get('reports', function () {
        return Inertia::render('admin/reports/page');
    });

    Route::get('brgy-reports', function () {
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
            return Inertia::render('admin/verifier/page');
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
});


Route::get('/verifier/dashboard', function () {
    return Inertia::render('verifier/dashboard/page');
});

Route::get('/verifier/beneficiary', function () {
    return Inertia::render('verifier/beneficiary/page');
});

Route::get('/verifier/beneficiary/{id}', function () {
    return Inertia::render('verifier/profile/page');
});

Route::get('/verifier/reports', function () {
    return Inertia::render('verifier/reports/page');
});

Route::get('/verifier/contact', function () {
    return Inertia::render('verifier/contact/page');
});

Route::get('/verifier/settings', function () {
    return Inertia::render('verifier/settings/page');
});

Route::get('/verifier/profile', function () {
    return Inertia::render('verifier/profile/page');
});

// Route::get('/verifier/verify', function () {
//     return Inertia::render('verifier/verify/page');
// });

Route::get('/encoder/dashboard', function () {
    return Inertia::render('encoder/dashboard/page');
});

Route::get('/encoder/register', function () {
    return Inertia::render('encoder/register/page');
});

Route::get('/encoder/beneficiary', function () {
    return Inertia::render('encoder/beneficiary/page');
});

Route::get('/encoder/reports', function () {
    return Inertia::render('encoder/reports/page');
});

Route::get('/encoder/accounts', function () {
    return Inertia::render('encoder/accounts/page');
});

Route::get('/encoder/create-account', function () {
    return Inertia::render('encoder/create-account/page');
});

Route::get('/encoder/lgu-profile', function () {
    return Inertia::render('encoder/lgu-profile/page');
});

Route::get('/encoder/verifier', function () {
    return Inertia::render('encoder/verifier/page');
});

Route::get('/encoder/organization', function () {
    return Inertia::render('encoder/organization/page');
});

Route::get('/encoder/contact', function () {
    return Inertia::render('encoder/contact/page');
});

Route::get('/encoder/settings', function () {
    return Inertia::render('encoder/settings/page');
});

Route::get('/encoder/profile', function () {
    return Inertia::render('encoder/profile/page');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
