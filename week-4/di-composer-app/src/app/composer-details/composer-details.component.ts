/**
 * Title: composer-details.component.ts
 * Author: Chris Bohnet
 * Date: 31 July 2020
 * Description: Composer details component (Composer details page)
 */

 //add composer service import
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

//add composerService to the constructor
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {

  }
}
