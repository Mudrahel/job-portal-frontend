import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = new User();
  errorMessage: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    console.log(this.user);
    this.login();
  }

  login() {
    console.log('Login clicked');

    this.loginService.login(this.user).subscribe(
      (response) => {
        this.goToJobListing();
      },
      (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid username or password';
      }
    )

  }
  goToJobListing() {
    this.router.navigate(['/job-listing-list']);
  }

  goToRegistration() {
    this.router.navigate(['/registration']);
  }
}
