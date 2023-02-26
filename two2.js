
function printCount(array, nameAnimal){
    function isAnimal(fruit) {
        return fruit.name === nameAnimal;
    }
    let str = array.find(isAnimal);
    return str.count;
}

function printCounts(array){
    let counts = 0;
    for(let i = 0; i < array.length; i++){
        counts += array[i].count;
    }
    return counts;
}

function printAnimalsByCount(array, count){
    function num(obj) {
        if(obj === undefined){
            return undefined;
        }
        return obj.count === count;
    }

    let arr = [];
    let obj = array.find(num);
    while (obj !== undefined){
        arr.push(obj.name);
        delete array[array.findIndex(num)];
        obj = array.find(num);
    }
    return arr;
}

function printAnimalBySort(array){
    return array.sort((a, b) => a.count - b.count);
}

function addAnimal(array, nameAnimal, countAnimal){
    if(typeof(countAnimal) != 'number'){
        return array;
    }

    let object = {
        name: nameAnimal,
        count: countAnimal
    };

    array.push(object);
    return array;
}

function showAnimals(array){
    let string = "";
    for(let i = 0; i < array.length; i++){
        if(array[i] === undefined){
            continue;
        }
        string = string + array[i].name + "\n";
    }
    return string;
}

function deleteAnimal(array, nameAnimal){
    function num(obj) {
        if(obj === undefined){
            return undefined;
        }
        return obj.name === nameAnimal;
    }
    delete  array[array.findIndex(num)]
    return array;
}

function animalInArray(array, nameAnimal){
    if((array.find(element => element.name === nameAnimal)) !== undefined){
        return true
    }
    return false;
}

module.exports = {printCount, printCounts, printAnimalsByCount, printAnimalBySort,
    addAnimal, showAnimals, deleteAnimal,animalInArray};