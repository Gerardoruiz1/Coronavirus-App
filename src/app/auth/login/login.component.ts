import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  login() {
    this.authService.login(this.email, this.password).then(() => {
      this.router.navigate(['/summary']);
    }).catch(error => {
      this.errorMessage = 'Authentication failed. Please check your credentials.';
    });
  }
}
