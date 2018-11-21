let numb = prompt("input number");
console.log(isprimeimple(numb));

function isprimeimple(n) {
    let prime = [];

    for (k = 2; k <= n; k++) {
        prime[k] = 1;
    }
    for (k = 2; k * k <= n; k++) {
        // если k - простое (не вычеркнуто)
        if (prime[k] == 1) {
            // то вычеркнем кратные k
            for (l = k * k; l <= n; l += k) {
                delete prime[l];
            }
        }
    }
    return prime;
}