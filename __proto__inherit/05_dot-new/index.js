let Character = {
    one: 'm8',
    new: function () {
        return Object.create(this);
    }
}

let o = Character.new();
console.log(o.one); //m8