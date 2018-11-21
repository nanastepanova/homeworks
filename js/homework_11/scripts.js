let quantity = prompt("введите количество елементов списка");
let userData = [];
for (i = 1; i <= quantity; i++) {
    userData.push(prompt("Введите пункт списка"));
}

let li = userData.map(function (element) {
    return `<li>${element}</li>`
});

let ul = document.createElement('ul');
ul.innerHTML = li.join("\n");

document.body.appendChild(ul);

setTimeout(function () {
        document.body.removeChild(ul);
    },
    10000
);

