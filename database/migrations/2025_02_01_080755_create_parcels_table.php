<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('parcels', function (Blueprint $table) {
            $table->id();
            $table->string('register_id')->nullable();
            $table->string('farm_location')->nullable();
            $table->decimal('farm_area', 10, 2)->nullable(); // Farm area in hectares or relevant units
            $table->boolean('ancestral_domain')->nullable(); // True if the farm is in ancestral domain
            $table->boolean('agrarian_beneficiary')->nullable(); // True if the farmer is an agrarian reform beneficiary
            $table->string('ownership_doc_number')->nullable(); // Document number for land ownership
            $table->string('ownership_type')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parcels');
    }
};
