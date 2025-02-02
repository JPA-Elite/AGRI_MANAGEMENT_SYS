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
        Schema::create('personal_information', function (Blueprint $table) {
            $table->id(); // This will create an auto-incrementing 'id' field as primary key.
            $table->string('rsbsa_id')->nullable()->unique();
            $table->string('register_id')->nullable()->unique();
            $table->string('firstname')->nullable();
            $table->string('middlename')->nullable();
            $table->string('lastname')->nullable();
            $table->string('suffix')->nullable();
            $table->string('mothers_maiden')->nullable();
            $table->date('dob')->nullable(); // Date of Birth
            $table->string('pob')->nullable(); // Place of Birth
            $table->string('religion')->nullable();
            $table->enum('gender', ['male', 'female', 'other'])->nullable();
            $table->enum('civil', ['single', 'married', 'widowed', 'separated', 'divorced'])->nullable();
            $table->string('mobile')->nullable();
            $table->string('landline')->nullable();
            $table->string('contact_person')->nullable();
            $table->string('contact_person_mobile')->nullable();
            $table->string('street_address')->nullable();
            $table->string('street_address_2')->nullable();
            $table->string('barangay')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('region')->nullable();
            $table->string('highest_education')->nullable();
            $table->enum('status', ['active', 'inactive'])->nullable();
            $table->string('avatar')->nullable();
            $table->string('verifier')->nullable();
            $table->date('register_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_information');
    }
};
