/**
 * Title: app.routing.ts
 * Author: Chris Bohnet
 * Date: 21 July 2020
 * Description: Routing file
 */

import { SignInComponent } from './sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//Create and export an array of Route Objects
export const AppRoutes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
      path: 'home',
      component: HomeComponent
    }
]
