let testObj = {
    'first': 'second',
    'second': 26,
    'third': true,
    'fourth': 13,
    'fifth':  {
        'a': {
            'f': 'f',
            'z': [11,12,13,14,15,16]
        },
        'b': 'b',
        'c': 'c',
        'd': [1,2,3,4,5,6,7,8,9,10]
    },
};

function recursion(obj) {
    let key;
    let rtn = {};
    if(Array.isArray(obj)) {
        for (key in obj) {
            rtn[key] = recursion(obj[key]); //проверка на наличие Obj in Obj in Obj....проходимся по всем ключам
        }
    } else {
        return obj; // если obj не является typeOf(obj == 'Object')
    }
    return rtn;
}

let newObj = recursion(testObj);
console.log(testObj);
console.log(newObj);