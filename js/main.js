var countDownDate = new Date("Jan 11, 2020 00:00:00").getTime();
function showTime()
{
    var now= new Date().getTime();
    var distance= countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(days);
}
function start()
{   
    showTime();
    var x= setInterval(showTime,60000);
}

$(document).ready(start);
