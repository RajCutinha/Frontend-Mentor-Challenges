import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { AppUser } from '../utils';

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

  constructor(private route: ActivatedRoute, private auth: AuthService) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => (this.url = url[0]?.path));
    this.signUp = this.loginHandler(this.url);
    console.log(this.auth.isAuthenticated);
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
        this.auth.signUp(User, this.password, this.rpassword);
        return;
      }

      this.auth.login(User);
    }
  }
}
