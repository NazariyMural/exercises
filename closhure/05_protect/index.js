function protect() {
    return function(string){
        if(string === password) return value;
        return false;
    }
}
let tryOne = protect('5433_id_privatBank', '123456');
let tryTwo = protect('5433_id_privatBank', '123456');
console.log(tryOne('123456'));
console.log(tryTwo('19942806'));

//Цю ф-цію можна переписати в одну лінію за доп. ES6
let protect = (value, password) => string => string === password ? value : false;