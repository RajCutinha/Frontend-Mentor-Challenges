import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  url!: string | undefined;
  signUp!: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((url) => (this.url = url[0]?.path));
    this.signUp = this.loginHandler(this.url);
  }

  loginHandler(currentUrl: string | undefined): boolean {
    if (currentUrl === 'signup') {
      return true;
    }

    return false;
  }
}
