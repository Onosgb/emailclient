import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { skipWhile, tap } from 'rxjs/operators';
const url = 'https://api.angular-email.com/';
interface UniqueAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

interface SignedinResponse {
  authenticated: boolean;
  username: string;
}

interface SigninCredentials {
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signedin$: any = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<UniqueAvailableResponse>(url + 'auth/username', {
      username: username,
    });
  }

  signup(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(url + 'auth/signup', credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http.get<SignedinResponse>(url + 'auth/signedin').pipe(
      tap(({ authenticated }) => {
        this.signedin$.next(authenticated);
      })
    );
  }

  signOut() {
    return this.http.post(url + 'auth/signout', {}).pipe(
      skipWhile((value) => value === null),
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }

  signin(credentials: SigninCredentials) {
    return this.http.post(url + 'auth/signin', credentials).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }
}
