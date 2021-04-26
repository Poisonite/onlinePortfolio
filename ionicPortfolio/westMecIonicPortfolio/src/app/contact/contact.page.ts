import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  constructor(
    public formBuilder: FormBuilder,
    // Controllers and routers
    private alertController: AlertController,
    private router: Router
  ) {}
  contactForm: FormGroup;
  message = {
    color: 'danger',
    length: 0,
  };

  async msgChange(event) {
    this.message.length = event.detail.value.length;
    if (this.message.length < 15) {
      this.message.color = 'danger';
    }
    if (this.message.length >= 15) {
      this.message.color = 'sucuess';
    }
  }

  // Submits the form to the database after completing data validation
  async contactSubmit() {
    // Makes sure that the "valid" property on the form is set to "VALID",
    // if it's not (meaning a required field was not filled in), it alerts the user and doesn't add the doc
    if (this.contactForm.status === 'VALID') {
      const formData = {
        timeStamp: Date.now(),
        contact: this.contactForm.controls.email.value,
        msgSubject: this.contactForm.controls.subject.value,
        msgBody: this.contactForm.controls.message.value,
      };
      console.log(
        'In a production enviroment this info will be sent to the database!',
        formData
      );
      console.info('Message was saved!');
      this.successAlert();
      return;
    } else {
      // alerts the user when not all the form fields are filled in
      console.error('All required fields were not filled out');
      this.failedAlert();
      return;
    }
  }

  async failedAlert() {
    const alert = await this.alertController.create({
      header: 'All required fields were not filled out',
      message: 'Please fill out all fields!',
      buttons: ['Ok'],
    });

    await alert.present();
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Message Saved!',
      message: "We'll be in touch shortly!",
      buttons: [
        {
          text: 'Nice!',
          handler: () => {
            this.router.navigate(['/home']);
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit() {
    // Define reactive form structure
    this.contactForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
      ]),
    });
  }
}
