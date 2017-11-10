function CoffeeMachine(power) {
    this.power = power;
    this.waterAmount = 0;
}

CoffeeMachine.prototype.WATER_HEAT_CAPACITY= 4200;

CoffeeMachine.prototype.getTimeToBoil = function(){
    return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
}

CoffeeMachine.prototype.run = function(){
    let time = this.getTimeToBoil();
    setTimeout(function(){
        console.log(`Кава готова. Час варіння ${(time/1000).toFixed(1)} секунд`)
    }, this.getTimeToBoil())
}

CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this.waterAmount = amount;
};
//Маленька чашка кави
let small_cup = new CoffeeMachine(100000);
small_cup.setWaterAmount(320);
small_cup.run(); //Кава готова. Час варіння 1.1 секунд

//Велика чашка кави
let big_cup = new CoffeeMachine(100000);
big_cup.setWaterAmount(1200);
big_cup.run(); //Кава готова. Час варіння 4.0 секунд