import { Email } from './../email';
import { Component, Input, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css'],
})
export class EmailReplyComponent implements OnInit {
  showModal = false;
  @Input() email: Email = {
    id: '',
    to: '',
    subject: '',
    html: '',
    text: '',
    from: '',
  };
  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ');
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: this.email.subject.includes('Re:')
        ? this.email.subject
        : `Re:${this.email.subject}`,
      text: `\n\n\n----------- ${this.email.from} wrote:\n ${text}`,
    };
  }
  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
