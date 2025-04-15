<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('beneficiary_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('beneficiary_id');
            $table->string('request_type');
            $table->string('category');
            $table->string('specific_type');
            $table->string('unit')->nullable(); // For farmer fertilizer requests
            $table->string('schedule')->nullable(); // For farmworker equipment requests
            $table->text('purpose')->nullable();
            $table->date('requested_date');
            $table->string('status')->default('pending');
            $table->text('remarks')->nullable();
            $table->json('tools')->nullable(); // Add this line for storing selected tools
            $table->json('request_context')->nullable(); // Add this line
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('beneficiary_requests');
    }
};
