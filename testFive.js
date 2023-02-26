let five = require('./five.js');
let assert = require('assert');

function testFive() {
    const student = {
        name: 'Naz',
        surname: 'Rud',
        course: 1,
        faculty: 'Programming',
        security: {
            password: '123456',
            email: 'nazario.qq@gmail.com',
        },
        subjects: {
            Math: 4,
            Programming: 5,
            Algorithms: 3,
        },
    };

    let map = new Map()

    let result = five.createStudentObject(student, map);
    if(typeof result !== 'object'){
        throw new Error('Test five_0 failed');
    }

    result = five.createUsername(student.name, student.surname);
    assert.deepEqual(result, 'nazrud', 'Test five_1 failed')

    result = five.getAverageMark(map, 'nazrud', '123456');
    assert.equal(result, '4', 'Test five_2.1 failed')

    /*result = five.getAverageMark(map, 'nazrud', '1223456'); // видає помилку з іншого файлу
    assert.equal(result, '3', 'Test five_2.2 failed')*/

    result = five.calculateAverageMark(Object.values(student.subjects))
    assert.equal(result, '4', 'Test five_3 failed')
}

module.exports = {testFive};