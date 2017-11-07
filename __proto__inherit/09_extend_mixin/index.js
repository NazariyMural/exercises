//1
function extend(Subclass, Superclass) {
    function F() {};
    F.prototype = Superclass.prototype;
    Subclass.prototype = new F();
    Subclass.prototype.constructor = Subclass;
}
function Fgtu(desc, age, pass, supe){
    this.value = 450;
    this.desc = desc;
    this.age = age;
    this.pass = pass;
    this.supe = supe;
}
function Lg(name){
    extend(Lg, Fgtu)
    this.name = name;
    this.pricee = 690;
}

function Monjo(name, ...args){
    Lg.call(this, name);
    Fgtu.call(this, ...args);
}

let pffff = new Monjo('bing', 'Fgtu', 23, 'qwerty', 'Джміль');
console.log(pffff); //Monjo {name: "bing", pricee: 690, value: 450, desc: "Fgtu", age: 23, …}
//////////////////////////////////////////////////////////////////////

//2

function mixin(target, sources){
    for(let i = 0; i < sources.length; i++){
        for(let keys in sources[i]){
            target[keys] = sources[i][keys];
        }
    }
};

let obk = {
    name: 'Na',
    age: 25
}
let lki = {
    sudo: 'JSpna',
    platfolm: "C#"
}
let xxxx = {};
mixin(xxxx, [lki, obk]);