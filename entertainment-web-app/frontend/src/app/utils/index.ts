export interface AppUserInterface {
  email: string;
  password: string;
}

export class AppUser implements AppUserInterface {
  constructor(public email: string, public password: string) {
    this.email = email;
    this.password = password;
  }

  getUser(): AppUserInterface {
    return { email: this.email, password: this.password };
  }
}
