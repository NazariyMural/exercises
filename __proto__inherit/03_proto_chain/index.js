'use strict';

let character0 = {
    name: "Benedict",
    hp: 100,

};

let warrior0 = {
    weapon: 'Sword'
};

let knight0 = {
    mp: 100,
    spell: 'Holy Blast'
}

//2
warrior0.__proto__ = character0;
knight0.__proto__ = warrior0;

console.log(warrior0.name);
console.log(knight0.name);

console.log(Object.getPrototypeOf(warrior0));
console.log(Object.getPrototypeOf(knight0)); 

//3
character0.race = 'Human'
console.log(knight0.race);