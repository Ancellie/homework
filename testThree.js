let three = require('./three.js');
let assert = require('assert');

function testThree(){
    let obj = {
        str: 'Random. text srttt? fdse  cx ds aser... as.'
    };

    let result = three.iteratorOne(obj);
    let str1 = "";
    for(str of result){
        str1 = str1 + str;
    }
    assert.deepEqual(str1, 'Rno.txsttfscdae..a.', 'Iterator_One_Error');


    result = three.iteratorTwo(obj);
    str1 = "";
    for(str of result){
        str1 = str1 + str;
    }
    assert.deepEqual(str1, 'Randomtextsrtttfdsecxdsaseras', 'Iterator_Two_Error')


    result = three.iteratorThree(obj);
    str1 = "";
    for(str of result){
        str1 = str1 + str;
    }
    assert.deepEqual(str1, 'Random.text srttt?fdse cx ds aser.as.', 'Iterator_Three_Error')

    result = three.iteratorFour(obj);
    str1 = "";
    for(str of result){
        str1 = str1 + str;
    }
    assert.deepEqual(str1, 'aoeeaea', 'Iterator_Four_Error')

}

module.exports = {testThree};