import { Component } from '@angular/core';
import { ToastService } from '../shared/services/toast';
import { FormsModule,NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  constructor(private toastr: ToastService) {

  }
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  isSending = false;
  sendEmail(form: NgForm) {
    if (form.invalid) {
      this.toastr.warning(
        'Please fill in all required fields.'
      );
      return;
    }
    this.isSending = true;
    emailjs.send(
      'service_zdvfvjj',
      'template_z2zvrfr',
      {
        from_name: this.contact.name.trim(),
        from_email: this.contact.email.trim(),
        sub: this.contact.subject.trim(),
        message: this.contact.message.trim()
      },
      'CY3GYRwBxLIPDXCFj'
    ).then(() => {
      this.toastr.success(
        'Your message has been sent successfully!'
      );
      form.resetForm();
    }).catch(() => {
      this.toastr.error(
        'Failed to send message.'
      );
    })
      .finally(() => {
        this.isSending = false;
      });
  }
}
