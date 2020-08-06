/**
 * Title: books.service.ts
 * Author: Chris Bohnet
 * Date: 6 August 2020
 * Description: Service class for book objects
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '0786838655',
        title: 'Percy Jackson:  The Lightning Thief',
        description: 'Twelve-year-old Percy Jackson is on the most dangerous quest of his life. With the help of a satyr and a daughter of Athena, Percy must journey across the United States to catch a thief who has stolen the original weapon of mass destruction — Zeus master bolt. Along the way, he must face a host of mythological enemies determined to stop him. Most of all, he must come to terms with a father he has never known, and an Oracle that has warned him of betrayal by a friend.',
        numOfPages: 375,
        authors: ['Rick Riordan']
      },
      {
        isbn: '0545003407',
        title: 'Percy Jackson:  The Sea of Monsters',
        description: "When Thalia’s tree is mysteriously poisoned, the magical borders of Camp Half-Blood begin to fail. Now Percy and his friends have just days to find the only magic item powerful to save the camp before it is overrun by monsters. The catch: they must sail into the Sea of Monsters to find it. Along the way, Percy must stage a daring rescue operation to save his old friend Grover, and he learns a terrible secret about his own family, which makes him question whether being the son of Poseidon is an honor or a curse.",
        numOfPages: 279,
        authors: ['Rick Riordan']
      },
      {
        isbn: '0545078334',
        title: "Percy Jackson:  The Titan's Curse",
        description: "When Percy Jackson gets an urgent distress call from his friend Grover, he immediately prepares for battle. He knows he will need his powerful demigod allies at his side, his trusty bronze sword Riptide, and… a ride from his mom.  The demigods rush to the rescue to find that Grover has made an important discovery: two powerful half-bloods whose parentage is unknown. But that’s not all that awaits them. The titan lord Kronos has devised his most treacherous plot yet, and the young heroes have just fallen prey.  They’re not the only ones in danger. An ancient monster has arisen — one rumored to be so powerful it could destroy Olympus — and Artemis, the only goddess who might know how to track it, is missing. Now Percy and his friends, along with the Hunters of Artemis, have only a week to find the kidnapped goddess and solve the mystery of the monster she was hunting. Along the way, they must face their most dangerous challenge yet: the chilling prophecy of the titan’s curse.",
        numOfPages: 312,
        authors: ['Rick Riordan']
      },
      {
        isbn: '1423101464',
        title: 'Percy Jackson:  The Battle of the Labyrinth',
        description: "Percy Jackson isn’t expecting freshman orientation to be any fun, but when a mysterious mortal acquaintance appears, pursued by demon cheerleaders, things quickly go from bad to worse.  Time is running out for Percy. War between the gods and the Titans is drawing near. Even Camp Half-Blood isn’t safe, as Kronos’ army prepares to invade its once impenetrable borders. To stop them, Percy and his friends must set out on a quest through the Labyrinth — a sprawling underground world with surprises and danger at every turn.  Along the way Percy will confront powerful enemies, find out the truth about the lost god Pan, and face the Titan lord Kronos’ most terrible secret. The final war begins… with the Battle of the Labyrinth.",
        numOfPages: 361,
        authors: ['Rick Riordan']
      },
      {
        isbn: '1423101502',
        title: 'Percy Jackson:  The Last Olympian',
        description: "All year the half-bloods have been preparing for battle against the Titans, knowing the odds of victory are grim. Kronos’s army is stronger than ever, and with every god and half-blood he recruits, the evil Titan’s power only grows.  While the Olympians struggle to contain the rampaging monster Typhon, Kronos begins his advance on New York City, where Mount Olympus stands virtually unguarded. Now it’s up to Percy Jackson and an army of young demigods to stop the Lord of Time. In this momentous final book in the New York Times best-selling Percy Jackson and the Olympians series, the long-awaited prophecy surrounding Percy’s sixteenth birthday unfolds. And as the battle for Western civilization rages on the streets of Manhattan, Percy faces a terrifying suspicion that he may be fighting against his own fate.",
        numOfPages: 381,
        authors: ['Rick Riordan']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
