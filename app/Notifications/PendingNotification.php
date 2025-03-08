<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PendingNotification extends Notification
{
    use Queueable;

    protected $user;
    protected $request;

    /**
     * Create a new notification instance.
     */
    public function __construct($user, $request)
    {
        $this->user = $user;
        $this->request = $request;
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
        $beneficiary = $this->request['personal_info'] ?? [];
        $address = $this->request['address_info'] ?? [];

        $beneficiaryName = trim(
            ($beneficiary['firstname'] ?? '') . ' ' . ($beneficiary['middlename'] ?? '') . ' ' . ($beneficiary['lastname'] ?? '')
        );

        $beneficiaryAddress = trim(
            ($address['barangay'] ?? '') . ' ' . ($address['street_address_2'] ?? '')
        );

        $verificationUrl = url('https://rsbsa-sys.site/verifier/beneficiary?status=pending&search=' . ($this->request['register_id'] ?? ''));

        return (new MailMessage)
            ->subject('Verification Request for Newly Registered Beneficiary')
            ->greeting('Dear ' . $this->user->firstname . ',')
            ->line('I hope this message finds you well.')
            ->line('A new beneficiary has been successfully registered. Please verify the following details:')
            ->line('**Name of Beneficiary:** ' . $beneficiaryName)
            ->line('**Address of Beneficiary:** ' . $beneficiaryAddress)
            ->line('To confirm the accuracy of the information, please visit the link below for verification.')
            ->action('Open Pending Application', $verificationUrl)
            ->line('If you need any further details or assistance, please feel free to contact us.')
            ->line('Thank you for your prompt attention to this matter.')
            ->salutation('Best regards!');
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
