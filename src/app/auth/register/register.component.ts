import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.email, this.password).then(() => {
      this.router.navigate(['/login']);
    }).catch(error => {  
      if (error.code === 'auth/email-already-in-use') {
        this.errorMessage = 'User already exists. Please use a different email.';
    }
     else {
      this.errorMessage = 'Registration error. Please try again.';
    }
    });
  }
}
