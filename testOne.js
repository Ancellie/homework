let assert = require('assert');

function testOne() {
    let obj = {};

    let sym1 = Symbol();
    obj[sym1] = 'value1';

    obj['key1'] = 'value2';

    let sym1Value = obj[sym1];
    assert.equal(sym1Value, 'value1', 'test 1_1 failed');

    let key1Value = obj['key1'];
    assert.equal(key1Value, 'value2', 'test 1_2 failed');

    let sym2 = Symbol();
    let sym2Exists = sym2 in obj;
    assert.equal(sym2Exists, false, 'test 1_3 failed');

    let key2Exists = 'key2' in obj;
    assert.equal(key2Exists, false, 'test 1_4 failed');

    delete obj[sym1];
    assert.equal(sym1 in obj, false, 'test 1_5 failed');

    delete obj['key1'];
    assert.equal('key1' in obj, false, 'test 1_6 failed');
}

module.exports = {testOne};