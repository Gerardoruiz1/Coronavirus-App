import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid3';
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
