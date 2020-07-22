/**
 * Title: app-routing.module.ts, composer list
 * Author: Chris Bohnet
 * Date: 14 July 2020
 * Description: Routing file
 * Modified:
 * 7/20/20 - Add a new entry for the composer details page with an id parameter called composerId
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  {
    path: '',
   redirectTo: '/composer-list',
    //redirectTo: '/contact',
    pathMatch: 'full'
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }