/**
 * Title: app.component.ts, assignment 2.3
 * Author: Chris Bohnet
 * Date: 15 July 2020
 * Description: App component
 * Modified:
 * 7/20/20 - Remove the isLoggedIn variable and change the variable title
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Secure Profile App';
}
