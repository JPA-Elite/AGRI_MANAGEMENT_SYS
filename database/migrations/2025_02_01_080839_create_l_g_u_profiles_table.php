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
        Schema::create('l_g_u_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('lgu_user_id')->nullable();
            $table->string('address')->nullable();
            $table->string('barangay')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('region')->nullable();
            $table->string('contact')->nullable(); // LGU contact number
            $table->string('email')->nullable(); // LGU email address
            $table->string('municipal_agricultural_office')->nullable(); // Name of the municipal agricultural office
            $table->string('logo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('l_g_u_profiles');
    }
};
