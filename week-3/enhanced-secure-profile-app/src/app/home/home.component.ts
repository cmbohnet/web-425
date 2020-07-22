/**
 * Title: home.component.ts, assignment 3.4
 * Author: Chris Bohnet
 * Date: 20 July 2020
 * Description: Home component
 * Modified:
 * 7/20/20 - Remove isLoggedIn Logic
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() {
   }

  ngOnInit(): void {
  }

}
