function isValidDate(date)
{
    let matches = /^(\d{1,2})[\.](\d{1,2})[\.](\d{4})$/.exec(date);
    if (matches == null) return false;
    let d = matches[1];
    let m = matches[2] - 1;
    let y = matches[3];
    let composedDate = new Date(y, m, d);
    return composedDate.getDate() == d &&
        composedDate.getMonth() == m &&
        composedDate.getFullYear() == y;
}

function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear();

    return dd + '.' + mm + '.' + yy;
}

let date = new Date();
let enterDate = prompt("Enter date", formatDate(date));

if (!isValidDate(person)) {
    alert('Date is invalid, plz enter valid date in dd.mm.yyyy format');
    exit();
}
let arrDate = enterDate.split(".");
let day = parseInt(arrDate[0]);
let month = parseInt(arrDate[1]) - 1;
let year = parseInt(arrDate[2]);
let formatedDate = new Date(year, month, day);

let userYears = (date - formatedDate) / 1000 / 60 / 60 / 24 / 365;
alert("your age: " + parseInt(userYears));

day = formatedDate.getDate();
month = formatedDate.getMonth();
year = formatedDate.getFullYear();

if(month == 11 & day <= 22 || month == 0 & day <= 19){
    alert("Capricorn");
}else if (month == 0 & day >= 20 || month == 1 & day <= 17){
    alert("Aquarius");
}else if (month == 1 & day >= 18 || month == 2 & day <= 19){
    alert("Pisces");

}else if (month == 2 & day >= 20 || month == 3 & day <= 19){
    alert("Aries");

}else if (month == 3 & day >= 20 || month == 4 & day <= 19){
    alert("Taurus");

}else if (month == 4 & day >= 20 || month == 5 & day <= 20){
    alert("Gemini");

}else if (month == 5 & day >= 21 || month == 6 & day <= 21){
    alert("Cancer");

}else if (month == 6 & day >= 22 || month == 7 & day <= 22){
    alert("Leo");

}else if (month == 7 & day >= 23 || month == 8 & day <= 21){
    alert("Virgo");

}else if (month == 8 & day >= 22 || month == 9 & day <= 22){
    alert("Libran");

}else if (month == 9 & day >= 23 || month == 10 & day <= 21){
    alert("Scorpio");

}else {
    alert("Sagittarius");
}

let zodiac = ['Rat', 'Ox', 'Tiger',
    'Rabbit', 'Dragon', 'Snake',
    'Horse', 'Goat', 'Monkey',
    'Rooster', 'Dog', 'Pig']
alert(zodiac[(year - 4) % 12]);