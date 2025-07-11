<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CashAssistanceEventController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FarmProfileController;
use App\Http\Controllers\GovernmentAffiliationController;
use App\Http\Controllers\HouseholdController;
use App\Http\Controllers\LandFarmerController;
use App\Http\Controllers\LGUProfileController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\ParcelComponentController;
use App\Http\Controllers\ParcelController;
use App\Http\Controllers\PersonalInformationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifierController;
use App\Http\Controllers\SubsidyController;
use App\Http\Controllers\EquipmentRequestController;
use App\Http\Controllers\BeneficiaryController;
use App\Http\Controllers\FertilizerRequestController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\BeneficiaryRequestController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $user = User::where('id', $request->user()->id)->with(['profile'])->first();
    return  $user;
});

Route::get('/admin_dashboard', [DashboardController::class, 'admin_dashboard']);
Route::get('/verifier_dashboard', [DashboardController::class, 'verifier_dashboard']);
Route::resource('farm_profile', FarmProfileController::class);
Route::resource('government_affiliation', GovernmentAffiliationController::class);
Route::resource('household', HouseholdController::class);
Route::resource('land_farmer', LandFarmerController::class);
Route::resource('lgu_profile', LGUProfileController::class);
Route::resource('organization', OrganizationController::class);
Route::resource('parcel_component', ParcelComponentController::class);
Route::resource('parcel', ParcelController::class);
Route::resource('personal_information', PersonalInformationController::class);
Route::post('/verify_beneficiary', [PersonalInformationController::class, 'verify_beneficiary']);
Route::resource('users', UserController::class);
Route::resource('accounts', AccountController::class);
Route::resource('verifier', VerifierController::class);
Route::resource('cash_assistance_event', CashAssistanceEventController::class);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/beneficiaries', [BeneficiaryController::class, 'index']);

Route::get('/search', [SearchController::class, 'search']);

Route::prefix('subsidies')->group(function () {
    Route::post('/', [SubsidyController::class, 'store']);
    Route::get('/', [SubsidyController::class, 'index']);
    Route::get('/{subsidy}', [SubsidyController::class, 'show']);
    Route::put('/{id}/approve', [SubsidyController::class, 'approve']);
    Route::put('/{id}/status', [SubsidyController::class, 'updateStatus']);
});

Route::prefix('equipment-requests')->group(function () {
    Route::get('/', [EquipmentRequestController::class, 'index']);
    Route::post('/', [EquipmentRequestController::class, 'store']);
    Route::put('/{id}/status', [EquipmentRequestController::class, 'updateStatus']);
});

Route::prefix('fertilizer-requests')->group(function () {
    Route::get('/', [FertilizerRequestController::class, 'index']);
    Route::post('/', [FertilizerRequestController::class, 'store']);
    Route::put('/{id}/status', [FertilizerRequestController::class, 'updateStatus']);
});

Route::prefix('beneficiary-requests')->group(function () {
    Route::get('/', [BeneficiaryRequestController::class, 'index']);
    Route::post('/', [BeneficiaryRequestController::class, 'store']);
    Route::put('/{id}/status', [BeneficiaryRequestController::class, 'updateStatus']);
});
