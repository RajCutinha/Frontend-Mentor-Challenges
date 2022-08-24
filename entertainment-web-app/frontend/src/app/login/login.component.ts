import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppUser, AppUserInterface } from '../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  url!: string;
  signUp!: boolean;
  email: string = '';
  password: string = '';
  rpassword: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => (this.url = url[0]?.path));
    this.signUp = this.loginHandler(this.url);
  }

  loginHandler(currentUrl: string): boolean {
    if (currentUrl === 'signup') {
      return true;
    }

    return false;
  }

  handleAuth(e: Event): void {
    e.preventDefault();

    if (this.password.length > 4) {
      const User = new AppUser(this.email, this.password);
      if (this.loginHandler(this.url)) {
        this.handleAuthSignUp(User);
        return;
      }

      this.handleAuthLogin(User);
    }

    console.log(this.loginHandler(this.url));
  }

  handleAuthSignUp(User: AppUserInterface): void {
    if (this.password.trim() === this.rpassword.trim()) {
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

  handleAuthLogin(User: AppUserInterface): void {
    fetch('http://localhost:3000/api/user', {
      method: 'POST',
      headers: {
        // prettier-ignore
        'Content-Type': "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(User),
    })
      .then((res) => (res.status === 200 ? res.json() : null))
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }
}
