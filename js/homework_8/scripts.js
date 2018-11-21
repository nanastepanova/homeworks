/*
function filterCollection(searchInObject, questions, allEntrances, c, d, e, f, g) {
    let result = [];
    for (let i = 0; i < searchInObject.length; i++) {
        rez = search(searchInObject[i], questions, allEntrances, c, d, e, f, g);
        if (rez) {
            result.push(searchInObject[i]);
        }
    }
    return result;
}

function search(searchInObject, questions, allEntrances, c, d, e, f, g) {
    if (typeof(searchInObject) == "object" || Array.isArray(searchInObject)) {  //проверяем, массив ли searchInObject. если да - работаем с массивом
        for (let j in searchInObject) {
            rez = filterCollection(searchInObject[j], questions, allEntrances, c, d, e, f, g);
            if (rez) {
                return true;
            }
        }
    } else {  //если searchInObject строка - работаем со строкой
        questions = questions.split(' ');
        let q, v;
        v = searchInObject.toLowerCase();
        let countOfEntrances = 0;
        for (let i = 0; i < questions.length; i++) {
            q = questions[i].toLowerCase();
            if (v.indexOf(q) >= 0) {
                countOfEntrances++;
            }
        }
        if ((allEntrances === true && countOfEntrances == questions.length)
            || (allEntrances === false && countOfEntrances > 0)) {
            return true;
        } else {
            return false;
        }
    }

    return false;
}


searchInObject = [{
    'locales': {
        'name': {
            0: 'asd',
            1: 'en_USasdasdad ToyotA',
            2: 'ToyotA',
        },
        'description': {
            0: 'asd',
            1: 'en_USasdasdad ToyotA',
            2: 'ToyotA',
        }
    },
    'contentType': {
        'name': {
            0: 'asd',
            1: 'en_USasdasdad ToyotA',
            2: 'ToyotA',
        },
        'description': {
            0: 'asd',
            1: 'en_USasdasdad ToyotA',
            2: 'ToyotA',
        }
    },
    0: 'aa aa',
    1: 'b bbb',
    2: 'cc cc',
    3: 'ddd dd',
    'name': 'en_USasdasdad ToyotA',
    'description': 'HONDA fasdsasfaf',
    6: 'asfasdad MAZDA',
    7: 'ToyotA asdadsad',
    8: 'dasdsads VW',
    9: 'lIncilno asdadasd'
}, {
    'locales': {
        'name': {
            0: 'asd',
            1: 'aaa aa',
            2: 'a',
        },
        'description': {
            0: 'asd',
            1: 'a a',
            2: 'a',
        }
    },
    'contentType': {
        'name': {
            0: 'asd',
            1: 'a a',
            2: 'a',
        },
        'description': {
            0: 'asd',
            1: 'a a',
            2: 'a',
        }
    },
    0: 'aa aa',
    1: 'b bbb',
    2: 'cc cc',
    3: 'ddd dd',
    'name': 'a a',
    'description': 'a fasdsasfaf',
    6: 'asfasdad MAZDA',
    7: 'ToyotA asdadsad',
    8: 'dasdsads VW',
    9: 'lIncilno asdadasd'
}, {
    'locales': {
        'name': {
            0: 'asd',
            1: 'en_USasdasdad ToyotA',
            2: 'ToyotA',
        },
        'description': {
            0: 'asd',
            1: 'en_USasdasdad ToyotA',
            2: 'ToyotA',
        }
    },
    'contentType': {
        'name': {
            0: 'asd',
            1: 'en_USasdasdad ToyotA',
            2: 'ToyotA',
        },
        'description': {
            0: 'asd',
            1: 'en_USasdasdad ToyotA',
            2: 'ToyotA',
        }
    },
    0: 'aa aa',
    1: 'b bbb',
    2: 'cc cc',
    3: 'ddd dd',
    'name': 'en_USasdasdad ToyotA',
    'description': 'HONDA fasdsasfaf',
    6: 'asfasdad MAZDA',
    7: 'ToyotA asdadsad',
    8: 'dasdsads VW',
    9: 'lIncilno asdadasd'
}];


let questions = 'en_US Toyota';
let allEntrances = true;

let c = 'name';
let d = 'description';
let e = 'contentType.name';
let f = 'locales.name';
let g = 'locales.description';

console.log(filterCollection(searchInObject, questions, allEntrances, c, d, e, f, g));
*/

function filterCollection(arrayOfObjects, questions, allEntrances)
{
    let result = [];

    let args = [];

    for (let i = 0; i < arguments.length; i++) {
        if (i < 3) {
            continue;
        }
        args.push(arguments[i]);
    }

    for (let i = 0; i < arrayOfObjects.length; i++) {
        if (args.length > 0) {
            for (let j = 0; j < args.length; j++) {
                pathes = args[j].split('.');
                obj = arrayOfObjects[i];
                let cntn = false;
                for (let k = 0; k < pathes.length; k++) {
                    if (typeof(obj) != 'object') {
                        cntn = true;
                        break;
                    }
                    obj = obj[pathes[k]];
                }

                if (cntn) {
                    continue;
                }

                rez = search(obj, questions, allEntrances);
                if (rez) {
                    break;
                }
            }
        } else {
            rez = search(arrayOfObjects[i], questions, allEntrances)
        }
        if (rez) {
            result.push(arrayOfObjects[i]);
        }
    }
    return result;
}


function search(searchInObject, questions, allEntrances)
{
    if (typeof(searchInObject) == 'object' || Array.isArray(searchInObject)) {
        for (let j in searchInObject) {
            rez = search(searchInObject[j], questions, allEntrances);
            if (rez) {
                return true;
            }
        }
    } else {
        questions = questions.split(' ');
        let q, v;

        v = searchInObject.toLowerCase();
        let countOfEntrances = 0;
        for (let i = 0; i < questions.length; i++) {
            q = questions[i].toLowerCase();
            if (v.indexOf(q) >= 0) {
                countOfEntrances++;
            }
        }
        if ((allEntrances === true && countOfEntrances == questions.length)
            || (allEntrances === false && countOfEntrances > 0)
        ) {
            return true;
        } else {
            return false;
        }
    }

    return false;
}

    searchInObject = [{
            'locales': {
                'name': {
                    0: 'asd',
                    1: 'en_USasdasdad ToyotA',
                    2: 'ToyotA',
                },
                'description': {
                    0: 'asd',
                    1: 'en_USasdasdad ToyotA',
                    2: 'ToyotA',
                }
            },
            'contentType': {
                'name': {
                    0: 'asd',
                    1: 'en_USasdasdad ToyotA',
                    2: 'ToyotA',
                },
                'description': {
                    0: 'asd',
                    1: 'en_USasdasdad ToyotA',
                    2: 'ToyotA',
                }
            },
            0: 'aa aa',
            1: 'b bbb',
            2: 'cc cc',
            3: 'ddd dd',
            'name': 'en_USasdasdad ToyotA',
            'description': 'HONDA fasdsasfaf',
            6: 'asfasdad MAZDA',
            7: 'ToyotA asdadsad',
            8: 'dasdsads VW',
            9: 'lIncilno asdadasd'
        }, {
            'locales': {
                'name': {
                    0: 'asd',
                    1: 'aaa aa',
                    2: 'a',
                },
                'description': {
                    0: 'asd',
                    1: 'a a',
                    2: 'a',
                }
            },
            'contentType': {
                'name': {
                    0: 'asd',
                    1: 'a a',
                    2: 'a',
                },
                'description': {
                    0: 'asd',
                    1: 'a a',
                    2: 'a',
                }
            },
            0: 'aa aa',
            1: 'b bbb',
            2: 'cc cc',
            3: 'ddd dd',
            'name': 'a a',
            'description': 'a fasdsasfaf',
            6: 'asfasdad MAZDA',
            7: 'ToyotA asdadsad',
            8: 'dasdsads VW',
            9: 'lIncilno asdadasd'
        }, {
            'locales': {
                'name': {
                    0: 'asd',
                    1: 'en_USasdasdad ToyotA',
                    2: 'ToyotA',
                },
                'description': {
                    0: 'asd',
                    1: 'en_USasdasdad ToyotA',
                    2: 'ToyotA',
                }
            },
            'contentType': {
                'name': {
                    0: 'asd',
                    1: 'en_USasdasdad ToyotA',
                    2: 'ToyotA',
                },
                'description': {
                    0: 'asd',
                    1: 'en_USasdasdad ToyotA',
                    2: 'ToyotA',
                }
            },
            0: 'aa aa',
            1: 'b bbb',
            2: 'cc cc',
            3: 'ddd dd',
            'name': 'en_USasdasdad ToyotA',
            'description': 'HONDA fasdsasfaf',
            6: 'asfasdad MAZDA',
            7: 'ToyotA asdadsad',
            8: 'dasdsads VW',
            9: 'lIncilno asdadasd'
        }
    ];
    let questions = 'en_US Toyota';
    let allEntrances = true;

    let c = 'name';
    let d = 'description';
    let e = 'contentType.name';
    let f = 'locales.name';
    let g = 'locales.description';

    console.log(filterCollection(searchInObject, questions, allEntrances, c, d, e, f, g));