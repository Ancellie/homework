let obj = {
    kiev: 27,
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

console.log(+obj);
