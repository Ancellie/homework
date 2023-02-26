const map1 = new Map();


map1.set('0', 'foo');
map1.set(1, 'bar');
map1.set('ad', 'ocxz');


function set(map, key, value){
    let map1 = Object.fromEntries(map);
    map1[key] = value;
    map1 = new  Map(Object.entries(map1));
    return map1;
}

