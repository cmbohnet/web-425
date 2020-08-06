/**
 * Title: app.routing.module.ts
 * Author: Chris Bohnet
 * Date: 5 August 2020
 * Description: App routing module component
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { BookListComponent } from './book-list/book-list.component';
import { AboutComponent } from './about/about.component';

//add each components path to the routes array
const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
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
