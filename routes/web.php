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
});

Route::get('/admin/dashboard', function () {
    return Inertia::render('admin/dashboard/page');
});

Route::get('/admin/register', function () {
    return Inertia::render('admin/register/page');
});

Route::get('/admin/beneficiary', function () {
    return Inertia::render('admin/beneficiary/page');
});

Route::get('/admin/reports', function () {
    return Inertia::render('admin/reports/page');
});

Route::get('/admin/accounts', function () {
    return Inertia::render('admin/accounts/page');
});

Route::get('/admin/create-account', function () {
    return Inertia::render('admin/create-account/page');
});

Route::get('/admin/lgu-profile', function () {
    return Inertia::render('admin/lgu-profile/page');
});

Route::get('/admin/verifier', function () {
    return Inertia::render('admin/verifier/page');
});

Route::get('/admin/organization', function () {
    return Inertia::render('admin/organization/page');
});

Route::get('/admin/contact', function () {
    return Inertia::render('admin/contact/page');
});

Route::get('/admin/settings', function () {
    return Inertia::render('admin/settings/page');
});

Route::get('/admin/profile', function () {
    return Inertia::render('admin/profile/page');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
