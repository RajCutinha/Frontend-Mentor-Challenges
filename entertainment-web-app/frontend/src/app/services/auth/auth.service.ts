import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUserInterface } from 'src/app/utils';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient) {}

  signUp(User: AppUserInterface, password: string, rpassword: string): void {
    if (password.trim() === rpassword.trim()) {
      fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          // prettier-ignore
          'Content-Type': "application/json",
        },
        body: JSON.stringify(User),
      })
        .then((res) =>
          res.status === 200 ? console.log(res.statusText) : null
        )
        .catch((err) => console.error(err));
    }
  }

  login(User: AppUserInterface): void {
    fetch('http://localhost:3000/api/user', {
      method: 'POST',
      headers: {
        // prettier-ignore
        'Content-Type': "application/json",
      },
      credentials: 'include',
      redirect: 'follow',
      body: JSON.stringify(User),
    })
      .then((res) => res)
      // .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }
}
