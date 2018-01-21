import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  constructor(
    @Inject(Router) private router: Router
  ) { }

  isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true' ? true : false;
  }

  logOut() {
    localStorage.setItem('loggedIn', 'false');
    this.router.navigate(['/login']);
  }

}
