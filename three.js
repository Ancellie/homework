function iteratorOne(obj) {
    return {
        [Symbol.iterator]() {
            let index = 0;
            let step = 2;
            let strLength = obj.str.length;

            return {
                next() {
                    if (index < strLength) {
                        while (obj.str[index] === " ") {
                            index++;
                        }
                        let currentChar = obj.str[index];
                        index += step;
                        return {
                            value: currentChar,
                            done: false
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    }
}


function iteratorTwo(obj) {
    return {
        [Symbol.iterator](){
            let index = 0;
            let strLength = obj.str.length;
            return {
                next() {
                    let strr = ""
                    if (index < strLength) {
                        const bool = () => {
                            let x = false
                            while (obj.str[index] === "?" || obj.str[index] === " " || obj.str[index] === "/" || obj.str[index] === "." || obj.str[index] === "," || obj.str[index] === "—") {
                                index++;
                                x = true
                            }
                            return x;
                        }
                        while (index < strLength && bool(obj.str[index]) !== true) {
                            strr = strr + obj.str[index];
                            index++;
                        }
                        return {
                            value: strr,
                            done: false
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    }
}

function iteratorThree(obj) {
    return {
        [Symbol.iterator]() {
            let index = 0;
            let strLength = obj.str.length;
            return {
                next() {
                    let strr = ""
                    if (index < strLength) {
                        while (obj.str[index] === " " || obj.str[index] === ",") {
                            index++;
                        }
                        const bool = () => {
                            let x = false
                            if (obj.str[index] === "." || obj.str[index] === "!" || obj.str[index] === "?") {
                                strr = strr + obj.str[index];
                            }
                            while ((obj.str[index] + obj.str[index + 1]) === "  ") {
                                index++;
                            }
                            while (obj.str[index] === "." || obj.str[index] === "!" || obj.str[index] === "?") {
                                index++;
                                x = true
                            }
                            return x;
                        }
                        while (index < strLength && bool() !== true) {
                            strr = strr + obj.str[index];
                            index++;
                        }
                        return {
                            value: strr,
                            done: false
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    }
}

function iteratorFour(obj) {
    return {
        [Symbol.iterator]() {
            let index = 0;
            let strLength = obj.str.length;
            return {
                next() {
                    let strr = ""
                    if (index < strLength) {
                        if (obj.str[index] === " ") {
                            index++;
                        }
                        const bool = (str) => {
                            let x = false
                            if (str === "A" || str === "a" || str === "E" || str === "e" || str === "I"
                                || str === "i" || str === "O" || str === "o" || str === "U" || str === "u") {
                                x = true
                            }
                            return x;
                        }
                        while (index < strLength) {
                            if (bool(obj.str[index]) === true) {
                                strr = strr + obj.str[index];
                                index++;
                            } else
                                index++;
                        }
                        return {
                            value: strr,
                            done: false
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    }
}

module.exports = {iteratorOne, iteratorTwo, iteratorThree, iteratorFour};