/**
 * Title: home.component.ts, assignment 3.3
 * Author: Chris Bohnet
 * Date: 20 July 2020
 * Description: Home component
 * Modified:
 * 7/20/20 - Add isLoggedIn Logic
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }

  ngOnInit(): void {
  }

}
