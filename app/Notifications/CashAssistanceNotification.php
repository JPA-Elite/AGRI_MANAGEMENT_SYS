<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class CashAssistanceNotification extends Notification
{
    use Queueable;

    protected $event;
    protected $verifierName;

    public function __construct($event, $verifierName)
    {
        $this->event = $event;
        $this->verifierName = $verifierName;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Notification of Upcoming Cash Assistance Program')
            ->greeting('Dear ' . $this->verifierName . ',')
            ->line('We are pleased to inform you that a cash assistance program will be provided to eligible beneficiaries in your barangay. Below are the details of the assistance:')
            ->line('📌 **Cash Assistance Name:** ' . $this->event->name)
            ->line('🏛️ **Sponsored By:** ' . $this->event->sponsor)
            ->line('📅 **Date & Time:** ' . $this->event->date)
            ->line('📍 **Location:** ' . $this->event->location)
            ->line('👥 **Beneficiaries:** ' . $this->event->livelihood)
            ->line('📖 **Program Overview:**')
            ->line($this->event->description)
            ->line('We kindly request your assistance in informing and coordinating with potential recipients to ensure a smooth and organized distribution.')
            ->line('Should you require further details, please do not hesitate to reach out.')
            ->line('Thank you for your cooperation.')
            ->salutation('Best regards,\nYour Organization Name');
    }
}
