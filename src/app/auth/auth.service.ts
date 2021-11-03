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

interface SignupResponse {
  username: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signedin$: any = new BehaviorSubject(null);
  username = '';
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
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth() {
    return this.http.get<SignedinResponse>(url + 'auth/signedin').pipe(
      tap(({ authenticated, username }) => {
        this.signedin$.next(authenticated);
        this.username = username;
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
    return this.http
      .post<SignupResponse>(url + 'auth/signin', credentials)
      .pipe(
        tap(({ username }) => {
          this.signedin$.next(true);
          this.username = username;
        })
      );
  }
}
