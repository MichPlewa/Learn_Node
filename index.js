const fs = require('fs');

const gender = ['M', 'F'];
const maleName = ['John', 'Stive', 'Mateo', 'Darius', 'Jotaro'];
const femaleName = ['Violleta', 'Kinga', 'Elza', 'Anna', 'Moana'];
const lastName = ['Smith', 'Jonson', 'Mickels', 'Kowalski', 'King'];
const people = [];

const randomChoice = (arr) => {
  const arrIndex = Math.floor(Math.random() * arr.length);
  return arr[arrIndex];
};

for (let i = 0; i < 20; i++) {
  const obj = {};
  obj.gender = randomChoice(gender);
  if (obj.gender === 'M') {
    obj.name = randomChoice(maleName);
  } else {
    obj.name = randomChoice(femaleName);
  }
  obj.lastName = randomChoice(lastName);
  people.push(obj);
}

const peopleConvert = JSON.stringify(people);

fs.writeFile('people.json', peopleConvert, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
