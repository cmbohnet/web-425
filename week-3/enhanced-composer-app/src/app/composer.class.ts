/**
 * Title: composer.class.ts
 * Author: Chris Bohnet
 * Date: 21 July 2020
 * Description: Class file for the Composer object
 */

import { IComposer } from './composer.interface';

export class Composer {

  composers: Array<IComposer>;
//Add a new field called composers of type Array<IComposers> and populate
//the comopser's array with 5 composer objects.
  constructor() {
    this.composers = [
      {composerId: 100, fullName: "Johann Sebastian Bach", genre: "Classical"},
      {composerId: 101, fullName: "Ludwig van Beethoven", genre: "Classical"},
      {composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"},
      {composerId: 103, fullName: "Johannes Brahms", genre: "Classical"},
      {composerId: 104, fullName: "Richard Wagner", genre: "Classical"}
    ]
  }
//Returns the composers array
  getComposers() {
    return this.composers;
  }
//Loop over the composers array and return the composer by composerId
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
