function createCounter(start, byStep){
    let counter;
    let argLen = createCounter.arguments.length;

    if(argLen < 2){
        counter = 0;
        return function(){
            return counter++;
        }
    }
    else{
        counter = start;
        return function(){
            return counter+=byStep;
        }
    }
}
let count = createCounter(1, 2);
console.log(count()); //3
console.log(count()); //5
console.log(count()); //7

let emptyCount = createCounter();
console.log(emptyCount()); //0
console.log(emptyCount()); //1
console.log(emptyCount()); //2

//Також ми можемо зробити цю ф-цію із дефолтними параметрами 
function createCounterNew(start = 0, step = 1){
    return function(){
        return start += step;
    }
}
let newCoun = createCounterNew(7, 10);
console.log(newCoun());
console.log(newCoun());
console.log(newCoun());
let newCounEmpty = createCounterNew();
console.log(newCounEmpty());
console.log(newCounEmpty());