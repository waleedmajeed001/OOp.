"use strict";
// In this project you are going to follow this video which explains object oriented
// programming using C# and write the same code in TypeScript.
// Create a GitHub repository for the project and submit its URL in the project submission form.
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        console.log(`Car: ${this.year} ${this.make} ${this.model}`);
    }
}
const myCar = new Car('Toyota', 'Camry', 2022);
myCar.displayInfo();
