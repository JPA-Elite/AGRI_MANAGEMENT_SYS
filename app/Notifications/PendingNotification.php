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
        return (new MailMessage)
            ->subject('Subject: Verification Request for Newly Registered Beneficiary')
            ->line('Dear ' . ' ' . $this->user->firstname . ',')
            ->line('I hope this message finds you well.')
            ->line('We would like to inform you that a new beneficiary has been successfully registered. Kindly verify the following details:')
            ->line('Name of Beneficiary: ' . $this->request['personal_info']['firstname'] . ' ' . $this->request['personal_info']['middlename'] . ' ' . $this->request['personal_info']['lastname'])
            ->line('Address of Beneficiary: ' . $this->request['address_info']['barangay'] . ' ' . $this->request['address_info']['street_address_2'])
            ->line('To confirm the accuracy of the information, please visit the following link for further verification:')
            ->line('Should you need any further details or assistance, please feel free to contact us.')
            ->line('Thank you for your prompt attention to this matter.')
            ->action('Open Pending Application', url('https://rsbsa-sys.site/verifier/beneficiary?status=pending&search=' . $this->request['register_id']))
            ->line('Best regards!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
