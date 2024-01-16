import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) {  this.isLoggedIn$ = this.authService.getUser().pipe(
    map(user => !!user)
  );}

  navigate(path: string) {
    this.router.navigate([path]);
  }
  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']); // Redirect to login page after logout
    }).catch(error => {
      console.error('Logout error:', error);
    });
  }
}
