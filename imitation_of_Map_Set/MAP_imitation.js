let map = {
    store: {}, //Місце для зберігання даних 

    //Кастомні методи для доступу до даних
    has(key){
        return key in this.store;
    },
    get(key){
        return this.store[key]
    },
    set(key, value){
        this.store[key] = value;
        return this;
    },
    delete(key){
        return delete this.store[key];
    },
    clear(){
        this.store = {}
        return this; 
    },
    size(){
        let size = 0;
        for(let key in this.store){
            size++;
        };
        return size;
    }, 
    keys(){
        let keys = [];
        for(let key in this.store){
            keys.push(key);
        };
        return keys;
    },
    values(){
        let values = [];
        for(let key in this.store){
            values.push(this.store[key]);
        };
        return values;
    },
    entries(){
        let keys_value = [];
        for(let key in this.store){
            keys_value.push({
                key,
                value: this.store[key]
            });
        };
        return keys_value;
    },
    forEach(calback){
        for(key in this.store){
            let value = this.store[key];
            calback(key, value, this); 
        }
    }
};

console.log(map.has('hello'));
map.set('hello', 'привіт');
map.set('godbye', 'допобачення');
map.set('thankyou', 'дякую');

console.log(map.get('hello'));
console.log(map.get('godbye'));
map.delete('godbye');
map.clear();
console.log(map);
map.set('hello', 'привіт');
map.set('godbye', 'допобачення');
map.set('thankyou', 'дякую');
console.log(map.size());
console.log(map.values());
console.log(map.entries());