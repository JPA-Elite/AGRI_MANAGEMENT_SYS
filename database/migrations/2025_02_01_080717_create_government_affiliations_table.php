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
        Schema::create('government_affiliations', function (Blueprint $table) {
            $table->id(); // Auto-incrementing 'id' field as primary key.
            $table->string('register_id')->nullable()->unique();
            $table->boolean('PWD')->nullable(); // Person with Disability
            $table->boolean('4Ps')->nullable(); // 4Ps (Pantawid Pamilyang Pilipino Program)
            $table->boolean('indigenous_group')->nullable();
            $table->string('indigenous_group_name')->nullable();
            $table->string('government_id')->nullable();
            $table->string('government_id_type')->nullable();
            $table->string('government_id_number')->nullable();
            $table->string('farmers_association')->nullable();
            $table->string('farmers_association_name')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('government_affiliations');
    }
};
