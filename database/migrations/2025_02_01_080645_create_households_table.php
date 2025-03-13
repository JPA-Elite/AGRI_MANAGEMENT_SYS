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
        Schema::create('households', function (Blueprint $table) {
            $table->id(); // This will create an auto-incrementing 'id' field as primary key.
            $table->string('register_id')->nullable();
            $table->string('household_head')->nullable();
            $table->string('household_members')->nullable();
            $table->string('household_head_name')->nullable();
            $table->string('household_relation')->nullable();
            $table->integer('male_members')->nullable();
            $table->integer('female_members')->nullable();
            $table->decimal('annual_income', 10, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('households');
    }
};
