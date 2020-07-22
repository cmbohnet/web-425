/**
 * Title: app.routing.ts
 * Author: Chris Bohnet
 * Date: 21 July 2020
 * Description: Routing file
 */

import { SignInComponent } from './sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
      //add canActivate and pass in the signInGuard
      path: 'home',
      component: HomeComponent,
      canActivate: [SignInGuard]
    }
]
