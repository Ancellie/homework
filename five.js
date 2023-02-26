
function createUsername(name, surname){
    return `${name.toLowerCase()}${surname.toLowerCase()}`;
};


function calculateAverageMark(score){
    let sum = 0;
    score.forEach((score1) => {
        sum += score1;
    });
    return sum / score.length;
}


function createStudentObject(student, map){
    const { name, surname, course, faculty, security, subjects } = student;
    const username = createUsername(name, surname);
    const mail = {email : security.email, password : security.password};
    const averageMark = calculateAverageMark(Object.values(subjects));
    const studentObject = {
        username,
        mail,
        averageMark,
        subjects,
    };

    map.set(username, studentObject)

    return studentObject;
}


function getAverageMark(map, username1, password1){
    const obj = map.get(username1);
    if(obj === undefined){
        throw new Error('Wrong login');
    }
    const { username, mail , averageMark} = obj;
    if(username === username1){
        if(mail.password === password1){
            return averageMark;
        }
    }
    throw new Error('Wrong password');
}

module.exports = {createStudentObject, createUsername, calculateAverageMark, getAverageMark};