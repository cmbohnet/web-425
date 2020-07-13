"use strict";
/**
* Title: person.class.ts
* Author: Chris Bohnet
* Date: 12 July 2020
* Description: Person class that implements a Person interface
*/
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var fullName = new Person("Chris", "Bohnet");
console.log("Hi, " + fullName.firstName + " " + fullName.lastName);
