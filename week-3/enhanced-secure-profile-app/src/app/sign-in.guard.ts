/**
 * Title: sign-in.guard.ts
 * Author: Chris Bohnet
 * Date: 21 July 2020
 * Description: Sign in guard
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import for Angular built-in router
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
//Add the router to the guards constructor
  constructor(private router: Router) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//assign the returned value from the queryParams function
    let isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true;
    } else {
      //if false navigate back to sign in page
      this.router.navigate(['/']);
      return false;
    }
  }
}
