import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  handleAuth(): void {
    if (this.loginHandler(this.url)) {
      if (this.password.trim() === this.rpassword.trim()) {
        const User = new AppUser(this.email, this.password);

        fetch('http://localhost:3000/api/user', {
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
    console.log(this.loginHandler(this.url));

    // console.log(User.getUser());
    // setTimeout(() => {
    //   this.email = '';
    // }, 10000);
    // setTimeout(() => {
    //   console.log(this.email);
    // }, 15000);
  }
}
