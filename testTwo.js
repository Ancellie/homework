let two = require('./two.js');
let two1 = require('./two.js');
let assert = require('assert');

function test_two(){
    let array = [{name: "cat", count: 3}, {name: "dog", count: 7}, {name: "ruskyi", count: 4}];

    let result = two.printCount(array, 'cat');
    assert.equal(result, 3, 'Test two_1 failed');

    result = two.printCount(array, 'kmo');
    assert.equal(result, -1, 'Test two_2 failed');

    result = two.printCounts(array);
    assert.equal(result, 14, 'Test two_3 failed');

    result = two.printAnimalsByCount(array, 7);
    assert.equal(result, 'dog', 'Test two_4 failed');

    result = two.addAnimal(array, "bird", 5);
    assert.deepEqual(result, [{name: "cat", count: 3}, {name: "dog", count: 7}, {name: "ruskyi", count: 4}, {name: "bird", count: 5}], 'Test two_5 failed')

    array = [{name: "cat", count: 3}, {name: "dog", count: 7}, {name: "ruskyi", count: 4}];
    result = two.showAnimals(array);
    assert.deepEqual(result, 'cat\ndog\nruskyi\n', 'Test two_6 failed');

    result = two.printAnimalBySort(array);
    assert.deepEqual(result, [{name: "cat", count: 3}, {name: "ruskyi", count: 4}, {name: "dog", count: 7}], 'Test two_7 failed')

    result = two.deleteAnimal(array, 'dog');
    assert.deepEqual(result, [{name: "cat", count: 3}, {name: "ruskyi", count: 4}], 'Test two_8 failed');

    result = two.animalInArray(array, 'cat');
    assert(result, true, 'Test two_9 failed')
}


function test_two1(){
    let array = [{name: "cat", count: 3}, {name: "dog", count: 7}, {name: "ruskyi", count: 4}];

    let result = two1.printCount(array, 'cat');
    assert.equal(result, 3, 'Test two_1 failed');

    result = two1.printCount(array, 'kmo');
    assert.equal(result, -1, 'Test two_2 failed');

    result = two1.printCounts(array);
    assert.equal(result, 14, 'Test two_3 failed');

    result = two1.printAnimalsByCount(array, 7);
    assert.equal(result, 'dog', 'Test two_4 failed');

    result = two1.addAnimal(array, "bird", 5);
    assert.deepEqual(result, [{name: "cat", count: 3}, {name: "dog", count: 7}, {name: "ruskyi", count: 4}, {name: "bird", count: 5}], 'Test two_5 failed')

    array = [{name: "cat", count: 3}, {name: "dog", count: 7}, {name: "ruskyi", count: 4}];
    result = two1.showAnimals(array);
    assert.deepEqual(result, 'cat\ndog\nruskyi\n', 'Test two_6 failed');

    result = two1.printAnimalBySort(array);
    assert.deepEqual(result, [{name: "cat", count: 3}, {name: "ruskyi", count: 4}, {name: "dog", count: 7}], 'Test two_7 failed')

    result = two1.deleteAnimal(array, 'dog');
    assert.deepEqual(result, [{name: "cat", count: 3}, {name: "ruskyi", count: 4}], 'Test two_8 failed');

    result = two1.animalInArray(array, 'cat');
    assert(result, true, 'Test two_9 failed')
}

module.exports = {test_two, test_two1};