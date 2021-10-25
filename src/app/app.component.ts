import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  signedin$ = new BehaviorSubject(false);
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.signedin$ = this.authService.signedin$;
    this.authService.checkAuth().subscribe(() => {});
  }
}
