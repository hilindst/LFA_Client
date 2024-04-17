import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment.development';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isModalShown: boolean = false;

  /* sendEmail(contactForm: NgForm) {
    if (contactForm.valid) {
      const templateParams = {
        user_name: 'NPC character Archive Team',
        email_subject: contactForm.value.subject,
        email_message: contactForm.value.message,
        sender_email: contactForm.value.email,
      };
      // to send the email
      // emailjs
      //   .send(
      //     environment.serviceID,
      //     environment.templateID,
      //     templateParams,
      //     environment.userID
      //   )
      //   .then(
      //     (res) => {
      //       console.log('SUCCES', res.status, res.text);
      //       contactForm.resetForm();
      //     },
      //     (err) => {
      //       console.log('FAILED...', err);
      //     }
      //   );
    }
  }

  closeModal() {
    this.isModalShown = false;
  }*/
}
