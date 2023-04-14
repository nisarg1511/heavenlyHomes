import { Component } from '@angular/core';
import * as sgMail from '@sendgrid/mail';
sgMail.setApiKey('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');
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  toEmail: string;
  fromEmail: string;
  subject: string;
  text: string;

  sendEmail() {
    // Set up email message
    const msg = {
      to: 'nisarg.joshi121@gmail.com',
      from: 'nisarg.joshi121@gmail.com',
      subject: 'Test mail',
      text: 'hello'
    };

    // Send email using SendGrid
    sgMail.send(msg).then(() => {
      console.log('Email sent successfully');
    }).catch((error) => {
      console.error(error);
    });
  }
}
