import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;


  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
    }
}
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer> = [];


  constructor() {
    this.composers.push(new Composer("Johann Sebastian Bach", "Classical"));
    this.composers.push(new Composer("Ludwig van Beethoven", "Classical"));
    this.composers.push(new Composer("Wolfgang Amadeus Mozart", "Classical"));
    this.composers.push(new Composer("Johannes Brahms", "Classical"));
    this.composers.push(new Composer("Richard Wagner", "Classical"));
  }

  ngOnInit(): void {
  }

}
