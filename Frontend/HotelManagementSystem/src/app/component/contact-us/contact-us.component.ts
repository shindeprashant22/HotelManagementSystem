import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  smessage = "Email sent successfully";
  sendthemail = false;

  public sendEmail(formData: any) {
    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your EmailJS details
    emailjs.send('service_yes7kow', 'template_djofpon', {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      mobile_number: formData.mobile_number,
      message: formData.message
    }, 'zb1jOwuICw2_QN2VE')
    .then((response: EmailJSResponseStatus) => {
      console.log('Email sent successfully!', response);
      this.sendthemail = true;
    }, (error) => {
      this.sendthemail = false;
      console.log('Failed to send email:', error);
    });
  }
}
