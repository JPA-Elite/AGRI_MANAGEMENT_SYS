<?php

namespace App\Notifications;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class DeclinedSubsidyNotification extends Notification
{
    use Queueable;

    protected $beneficiary;
    protected $user;

    public function __construct($beneficiary, $user)
    {
        $this->beneficiary = $beneficiary;
        $this->user = $user;
    }

    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        $timestamp = Carbon::now()->isoFormat('LLL');

        $beneficiaryName = trim(
            $this->beneficiary->firstname . ' ' . 
            ($this->beneficiary->middlename ?? '') . ' ' . 
            $this->beneficiary->lastname
        );

        $declinerName = trim(
            $this->user->firstname . ' ' . 
            ($this->user->middlename ?? '') . ' ' . 
            $this->user->lastname
        );

        $subsidyUrl = url('https://rsbsa-sys.site/administrator/subsidy');

        return (new MailMessage)
            ->line('Department of Agriculture - LGU Vallehermoso')
            ->subject('Subsidy Request Declined Notification')
            ->line('This is to inform you that a subsidy request has been declined:')
            ->line('**Beneficiary Name:** ' . $beneficiaryName)
            ->line('**Declined By:** ' . $declinerName)
            ->line('**Declined Time:** ' . $timestamp)
            ->action('View Subsidy Details', $subsidyUrl)
            ->line('Please review the request details for more information.');
    }

    public function toArray(object $notifiable): array
    {
        return [];
    }
}
