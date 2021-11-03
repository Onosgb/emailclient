import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './email';
const rootUrl = 'https://api.angular-email.com';
interface EmailSumarry {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}

  getEmails() {
    return this.http.get<EmailSumarry[]>(`${rootUrl}/emails`);
  }

  getEmail(id: string) {
    return this.http.get<Email>(`${rootUrl}/emails/${id}`);
  }

  sendEmail(email: Email) {
    return this.http.post<Email>(`${rootUrl}/emails`, email);
  }
}
