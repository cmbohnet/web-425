/**
 * Title: composer-list.component.ts
 * Author: Chris Bohnet
 * Date: 31 July 2020
 * Description: Composer list component; displays a list of composers
 */
//Add Composer service import
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

//Add composerservice to the constructor
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {
  }

}
