/**
 * Title: book.interface.ts
 * Author: Chris Bohnet
 * Date: 5 August 2020
 * Description: Book interface object
 */

export interface IBook {
   isbn: string;
   title: string;
   description: string;
   numOfPages: number;
   authors: Array<string>;
 }
