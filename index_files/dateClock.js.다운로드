const clockContainer = document.querySelector('.clock'),
    clockTitle = clockContainer.querySelector('h1'),
    dateContainer = document.querySelector('.date'),
    dateTitle = dateContainer.querySelector('h4');

function date() {
    const date2 = new Date();
    const year = date2.getFullYear();
    const month = new Array(12);
    month[0] = '1';
    month[1] = '2';
    month[2] = '3';
    month[3] = '4';
    month[4] = '5';
    month[5] = '6';
    month[6] = '7';
    month[7] = '8';
    month[8] = '9';
    month[9] = '10';
    month[10] = '11';
    month[11] = '12';
    let m = month[date2.getUTCMonth()];
    const day = date2.getDate();
    const weekday = new Array(7);
    weekday[0] = '일요일';
    weekday[1] = '월요일';
    weekday[2] = '화요일';
    weekday[3] = '수요일';
    weekday[4] = '목요일';
    weekday[5] = '금요일';
    weekday[6] = '토요일';
    let w = weekday[date2.getDay()];

    dateTitle.innerText = year + '년 ' + m + '월 ' + day + '일 ' + w;
}

function time() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    date();
    time();
    setInterval(time, 1000);
    setInterval(date, 3600*1000);
}

init();