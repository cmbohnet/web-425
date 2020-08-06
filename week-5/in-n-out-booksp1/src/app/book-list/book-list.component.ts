/**
 * Title: book-list.component.ts
 * Author: Chris Bohnet
 * Date: 5 August 2020
 * Description: book list component  module
 *
 */

 //imports
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
