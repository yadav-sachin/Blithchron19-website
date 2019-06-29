/*This code is for Count Down Timer*/
var countDownDate = new Date("Jan 11, 2020 00:00:00").getTime();
function showTime()
{
    var now= new Date().getTime();
    var distance= countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(days);
    var timeLeft=document.getElementById("time-left");
    if(days>0)
    {   
        timeLeft.innerText=days + " days Left";
    }
    else if(hours>0)
        timeLeft.innerText=hours+ " hours Left";
    else timeLeft.innerText="Blith is ON";
    console.log(timeLeft.innerText);
}
function start()
{   
    showTime();
    var x= setInterval(showTime,60000);
}

/*Countdown code ends here*/

$(".logo").hover(function(){
    $(this).addClass("animated bounce");
},
function(){
    $(this).removeClass("animated bounce");
});
$(document).ready(start);
