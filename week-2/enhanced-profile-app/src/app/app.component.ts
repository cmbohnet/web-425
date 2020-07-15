/**
 * Title: app.component.ts, assignment 2.3
 * Author: Chris Bohnet
 * Date: 15 July 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Assignment 2.3 - Data Binding';
}
