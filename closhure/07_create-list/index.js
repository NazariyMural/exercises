function createList(elements){
    let list = [].slice.call(arguments);
    return {
        getLength: function(){
            return list.length;
        },
        add: function(item){
            return list.push(item);
        },
        showList: function(){
            return list;
        },
        getItem: function(index){
            return list[index];
        },
        setItem: function(index, item){
            return list[index] = item;
        },
        remove: function(item){
            let index = list.indexOf(item);
            if(index !== -1) list.splice(index, 1);
            return false;
        },
        toString: function(){
            return list.join(', ');
        }
    }
}
let list = createList(2.40, 4, 10, 8, 'absdef');
console.log(list.getLength());
console.log(list.add(6));
console.log(list.showList());
console.log('');
console.log(list.getItem(5));
console.log(list.setItem(0, 777));
console.log(list.remove('absdef'));
console.log(list.showList());
console.log(list.toString());




const arra = [2.40, 4, 10, 8, 'absdef'];

function createListF(list = []){
    function getLength(){
        return list.length;
    };
    function add(item){
        return list.push(item);
    };
    function showList(){
        return list;
    };
    function getItem(index){
        return list[index];
    };
    function setItem(index, item){
        return list[index] = item;
    };
    function remove(item){
        let index = list.indexOf(item);
        if(index !== -1) {
            return list.splice(index, 1);
        }
        else{
            return false;
        }
    };
    function toString(){
        return list.join(', ');
    };
    return {
        getLength,
        add,
        showList,
        getItem, 
        setItem,
        remove,
        toString
    }
}

let listF = createListF(arra);
console.log(listF.getLength());
listF.add(6);
console.log(listF.showList());
console.log('');
console.log(listF.getItem(5));
listF.setItem(0, 777);
listF.remove('absdef');
console.log(listF.showList());
console.log(listF.toString());