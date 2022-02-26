const webDays = document.getElementById("txtDays");
const webHours = document.getElementById("txtHours");
const webMinutes = document.getElementById("txtMinutes");
const webSeconds = document.getElementById("txtSeconds");

const targetDate = '1 January 2023';

function countdown() {
    const setDate = new Date(targetDate);
    const currentDate = new Date();

    const totalSec = Math.floor((setDate - currentDate) / 1000);

    const days = Math.floor((totalSec / 3600 / 24));
    const hrs = Math.floor(totalSec / 3600 % 24);
    const mins = Math.floor(totalSec / 60 % 60);
    const sec = Math.floor(totalSec % 60);

    webDays.innerHTML = days;
    webHours.innerHTML = format(hrs);
    webMinutes.innerHTML = format(mins);
    webSeconds.innerHTML = format(sec);
}

countdown();

setInterval(countdown, 1000);

function format(value) {
    return value < 10 ? `0${value}` : value;
}

const curMonth = document.getElementById("currentMonth");
const curDay = document.getElementById("currentDay");
const curYear = document.getElementById("currentYear");

const todayDate = new Date();

curMonth.innerHTML = formatMonth(todayDate.getMonth());
curDay.innerHTML = format(todayDate.getDay()) + ",";
curYear.innerHTML = todayDate.getFullYear();

function formatMonth(monthnum) {
    switch(monthnum) {
        case 0 :
            return 'January';
            break;
        case 1 :
            return 'February';
            break;
        case 2 :
            return 'March';
            break;
        case 3 :
            return 'April';
            break;
        case 4 :
            return 'May';
            break;
        case 5 :
            return 'June';
            break;
        case 6 :
            return 'July';
            break;
        case 7 :
            return 'August';
            break;
        case 8 :
            return 'September';
            break;
        case 9 :
            return 'October';
            break;
        case 10 :
            return 'November';
            break;
        case 11 :
            return 'December';
            break;
    }
}

