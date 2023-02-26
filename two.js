
function printCount(array, animalName){
    for(let i = 0; i < array.length; i++){
        if(array[i].name === animalName){
            return array[i].count;
        }
    }
    return -1;
}

function printCounts(array){
    let counts = 0;
    for(let i = 0; i < array.length; i++){
        counts += array[i].count;
    }
    return counts;
}

function printAnimalsByCount(array, count){
    let arr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i].count === count){
            arr[arr.length] = array[i].name;
        }
    }
    return arr;
}

function printAnimalBySort(array){
    let t;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i].count > array[j].count){
                t = array[i];
                array[i] = array[j];
                array[j] = t;
            }
        }
    }

    return array;
}

function addAnimal(array, nameAnimal, countAnimal){
    if(typeof(countAnimal) != 'number'){
        return array;
    }

    let object = {
        name: nameAnimal,
        count: countAnimal
    };
    array[array.length] = object;
    return array;
}

function showAnimals(array){
    let string = "";
    for(let i = 0; i < array.length; i++){
        string = string + array[i].name + "\n";
    }
    return string;
}

function deleteAnimal(array, nameAnimal){
    for(let i = 0; i < array.length; i++){
        if(array[i].name === nameAnimal){
            for (i; i < array.length; i++) {
                array[i] = array[i+1];
            }
            array.length--;
            return array;
        }
    }
    return array;
}

function animalInArray(array, nameAnimal){
    for(let i = 0; i < array.length; i++){
        if(array[i].name === nameAnimal){
            return true;
        }
    }
    return false;
}

module.exports = {printCount, printCounts, printAnimalsByCount, printAnimalBySort,
    addAnimal, showAnimals, deleteAnimal,animalInArray};