import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  isLoggedIn$: Observable<boolean>;
  title = 'covid3';

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn$ = this.authService.getUser().pipe(
      map(user => !!user)
    );
  }


  canActivate(): boolean {
    if (this.authService.getUser()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }



  }
}
