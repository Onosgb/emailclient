import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Email } from '../email';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit {
  @Input() email: Email | any;
  emailForm: FormGroup = new FormGroup({});
  @Output() emailSubmit = new EventEmitter();
  @Input() submitted: boolean = false;
  constructor() {}

  ngOnInit(): void {
    const { subject, from, to, text } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }

  abs(abs: AbstractControl | null): FormControl {
    return abs as FormControl;
  }
  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
    this.submitted = true;
    this.emailSubmit.emit(this.emailForm.getRawValue());
  }
}
