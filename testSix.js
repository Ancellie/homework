let assert = require('assert');

function testSix(){
    let obj = {
    kiev: 28,
    vinnitsa: 29,
    rivne: 30,

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            str = ""
            let m = Object.keys(this)
            let i = 0;
            for (key in obj) {
                str = str + `${m[i]}` + ": " + `${this[key]}` + ";" + `\n`;
                i++;
            }
            return str;
        }
        if(hint === 'number'){
            num = 0
            counts = 0
            for (key in obj) {
                num += obj[key];
                counts++;
            }
            return num/counts;
        }
    }

};

    let result = String(obj);
    assert.deepEqual(result, 'kiev: 28;\nvinnitsa: 29;\nrivne: 30;\n', 'Test Six_1 failed')

    result = Number(obj);
    assert.deepEqual(result, 29, 'Test Six_2 failed')
}

module.exports = {testSix};