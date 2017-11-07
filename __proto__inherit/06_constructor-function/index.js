function Character_pr() {
    //return this.prototype = Character_pr;
    return this;
}

let t = new Character_pr();
console.log(t instanceof Character_pr); //true
console.log(t.constructor === Character_pr); //true
console.log(Character_pr());

function Warrior() {
    return {};
}

let global = new Warrior();
console.log(global instanceof Warrior); //false
console.log(Warrior());