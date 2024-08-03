import Building from './5-building.js';

const b = new Building(100);
console.log(b); // This will throw an error

class TestBuilding extends Building {}

try {
    new TestBuilding(200);
} catch (err) {
    console.log(err);
}

class OfficeBuilding extends Building {
  evacuationWarningMessage() {
    return 'Evacuate the building immediately!';
  }
}

const office = new OfficeBuilding(300);
console.log(office.sqft); // 300
console.log(office.evacuationWarningMessage()); // Evacuate the building immediately!

