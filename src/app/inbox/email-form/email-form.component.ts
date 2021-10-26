import { Component, Input, OnInit } from '@angular/core';
import { Email } from '../email';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email: Email | any;
  emailForm: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit(): void {
    const { subject, from, to, text } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to),
      from: new FormControl(from),
      subject: new FormControl(subject),
      text: new FormControl(text),
    });
  }

  abs(abs: AbstractControl | null): FormControl {
    return abs as FormControl;
  }
  onSubmit() {}
}
