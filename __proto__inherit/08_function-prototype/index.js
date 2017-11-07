function Person_pro(name, hp = 100) {
    this.name = name;
    this.hp = hp;
}
Person_pro.prototype.greet = function(){
        return 'Welcome!';
};

function Warrior_pr(name, weapon){
    Person_pro.call(this, name);
    this.weapon = weapon;
    this.stamina = 100;
}
/*
4. Зв'язати прототип `Warrior` з прототипом` Character`.
Конструктором прототипу `Warrior` зробити функцію` Warrior`.
*/

Warrior_pr.prototype = Object.create(Person_pro.prototype);
Warrior_pr.prototype.constructor = Warrior_pr;

Warrior_pr.prototype.attack = function(person){
    return (
        this.hp -= Math.ceil(Math.random()*10),
        this.stamina -= 10
    );
};
let warrior1 = new Warrior_pr('Солдат', 'guns');
warrior1.attack();
console.log(warrior1);

function Knight(name, weapon){
    Warrior_pr.call(this, name, weapon);
    this.mp = 100;
}
Knight.prototype = Object.create(Warrior_pr.prototype);
Knight.prototype.constructor = Knight;


Knight.prototype.heal = function(person){
    return (
        this.hp += Math.floor(Math.random()*10),
        this.mp -= 10
    )
}

let knight1 = new Knight('Лицар', 'меч');
knight1.attack();
knight1.heal();
console.log(knight1);