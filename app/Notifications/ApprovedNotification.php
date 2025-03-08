<?php

namespace App\Notifications;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ApprovedNotification extends Notification
{
    use Queueable;

    protected $beneficiary;
    protected $user;

    /**
     * Create a new notification instance.
     */
    public function __construct($beneficiary, $user)
    {
        $this->beneficiary = $beneficiary;
        $this->user = $user;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $timestamp = Carbon::now()->isoFormat('LLL');

        $beneficiaryName = trim(
            $this->beneficiary->firstname . ' ' . ($this->beneficiary->middlename ?? '') . ' ' . $this->beneficiary->lastname
        );

        $beneficiaryAddress = $this->beneficiary->street_address . ' ' . $this->beneficiary->barangay;

        $verifierName = trim(
            $this->user->firstname . ' ' . ($this->user->middlename ?? '') . ' ' . $this->user->lastname
        );

        $verificationUrl = url('https://rsbsa-sys.site/administrator/beneficiary?status=active&search=' . $this->beneficiary->register_id);

        return (new MailMessage)
            ->line('![Logo](https://rsbsa-sys.site/images/DOA.png)')
            ->subject('Beneficiary Verification Confirmation')
            ->line('This is to inform you that the following beneficiary has been successfully verified:')
            ->line('**Beneficiary Name:** ' . $beneficiaryName)
            ->line('**Address of Beneficiary:** ' . $beneficiaryAddress)
            ->line('**Verified By:** ' . $verifierName)
            ->line('**Verification Time Stamp:** ' . $timestamp)
            ->action('Open Approved Application', $verificationUrl)
            ->line('Best regards!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [];
    }
}
