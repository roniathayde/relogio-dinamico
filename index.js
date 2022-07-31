const el = document.querySelector('#date');

setInterval( ()=>{
    let date = new Date();

    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hours = hours < 10 ? `0${hours}` : hours;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    el.textContent = `${hours}:${minute}:${second}`
}, 1000);
