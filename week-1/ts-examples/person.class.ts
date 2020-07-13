 /**
 * Title: person.class.ts
 * Author: Chris Bohnet
 * Date: 12 July 2020
 * Description: Person class that implements a Person interface 
 */

import { IPerson } from "./person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const fullName = new Person("Chris", "Bohnet");
console.log(`Hi, ${fullName.firstName} ${fullName.lastName}`);
 
 