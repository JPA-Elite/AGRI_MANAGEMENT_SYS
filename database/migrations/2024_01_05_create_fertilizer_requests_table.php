<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('fertilizer_requests', function (Blueprint $table) {
            $table->id();
            $table->foreignId('beneficiary_id')->constrained('personal_information')->onDelete('cascade');
            $table->string('fertilizer_type');
            $table->integer('quantity');
            $table->date('requested_date');
            $table->string('status')->default('pending');
            $table->text('remarks')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('fertilizer_requests');
    }
};
