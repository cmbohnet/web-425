/**
 * Title: composer-details.component.ts
 * Author: Chris Bohnet
 * Date: 20 July 2020
 * Description: Composer details component
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;
//Add the activatedRoute object to the component's constructor
  constructor(private route: ActivatedRoute) {
    //call the snapshot function to retrieve the composerId parameter
    //and assign it to the composerId variable.  Use parseInt to parse
    //the string that is returned to a numerical value
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);
//check the composerId value and create a new composer object and assign the
//getCompser function to the composer variable
    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {

  }

}
