import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  submitted: boolean = false;
  email: Email;
  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${authService.username}@angular-email.com`,
    };
  }

  ngOnInit(): void {}

  onSubmit(email: any) {
    // Send the email off via the email service
    console.log('reaching here', email);
    this.emailService.sendEmail(email).subscribe((email) => {
      this.showModal = false;
      this.submitted = false;
    });
  }
}
