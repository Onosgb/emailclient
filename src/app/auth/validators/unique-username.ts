import { AuthService } from './../auth.service';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator } from '@angular/forms';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    return this.authService.usernameAvailable(control.value).pipe(
      map((value) => null),
      catchError((err) => {
        if (err.error.username) return of({ nonUniqueUsername: true });
        return of({ noConnection: true });
      })
    );
  };
}
