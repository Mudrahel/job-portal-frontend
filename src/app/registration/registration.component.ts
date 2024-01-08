import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  saveUser() {
    this.userService.createUser(this.user).subscribe(
      data => {
        console.log(data);
        this.goToLogin();
      }
    )
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}
