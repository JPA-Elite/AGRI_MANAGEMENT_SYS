<?php

namespace App\Notifications;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class DeclinedNotification extends Notification
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

        $userName = trim(
            $this->user->firstname . ' ' . ($this->user->middlename ?? '') . ' ' . $this->user->lastname
        );

        $beneficiaryAddress = $this->beneficiary->street_address . ' ' . $this->beneficiary->barangay;

        $url = url('https://rsbsa-sys.site/administrator/beneficiary?status=declined&search=' . $this->beneficiary->register_id);

        return (new MailMessage)
            ->subject('Beneficiary Verification Declined')
            ->line('This is to inform you that the following beneficiary has been declined:')
            ->line('**Beneficiary Name:** ' . $beneficiaryName)
            ->line('**Address of Beneficiary:** ' . $beneficiaryAddress)
            ->line('**Verified By:** ' . $userName)
            ->line('**Verification Time Stamp:** ' . $timestamp)
            ->action('View Declined Application', $url)
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
