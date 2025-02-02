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
        Schema::create('parcel_components', function (Blueprint $table) {
            $table->id(); // Auto-incrementing 'id' field as primary key.
            $table->string('register_id')->nullable()->unique();
            $table->foreignId('parcel_id')->nullable()->constrained('parcels')->onDelete('cascade');
            $table->string('commodity')->nullable(); // The type of crop or product (e.g., rice, corn, etc.)
            $table->decimal('size', 10, 2)->nullable(); // Size of the parcel component in appropriate units (e.g., hectares)
            $table->integer('number_heads')->nullable(); // Number of livestock or farm animals, if applicable
            $table->string('farm_type')->nullable(); // Type of farm (e.g., crop farm, livestock farm)
            $table->boolean('organic_practioner')->nullable(); // Indicates whether the farm is practicing organic farming
            $table->text('remarks')->nullable();// Type of ownership (e.g., titled, untitled, lease)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('parcel_components');
    }
};
