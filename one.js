
let sym = Symbol("id");
let str = new String("string1");
let user = {
    string: "textStr",
    [sym]: "textSym",
};

for (let key in user) console.log(key); // name, age (дані ключі не є символами)

let user1 = {
    string: "textStr",
}

user1[sym] = "textSym";
user1[str] = "textStr1";
for (let key in user1) console.log(key + ":", user1[key]);
