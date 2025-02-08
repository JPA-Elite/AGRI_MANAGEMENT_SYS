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
        Schema::create('farm_profiles', function (Blueprint $table) {
            $table->id(); // Auto-incrementing 'id' field as primary key.
            $table->string('register_id')->nullable()->unique();
            $table->string('main_livelihood')->nullable();
            $table->string('farm_activity')->nullable();
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('farm_profiles');
    }
};
