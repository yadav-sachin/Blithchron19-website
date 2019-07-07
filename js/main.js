/*This code is for Count Down Timer*/
var countDownDate = new Date("Jan 11, 2020 00:00:00").getTime();
function showTime()
{
    var now= new Date().getTime();
    var distance= countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log(days);
    var countOptions = {
        useEasing: true,
        separator: ''
      }
    if(days>0)
    {       
        $("#count-units").text(" Days To Go");
        var count = new CountUp('time-left', 365, days, 0, 3, countOptions);
        count.start();
    
    }
    else if(hours>0)
    {   
        $("#count-units").text(" Hours To Go");
        var count = new CountUp('time-left', 24, hours, 0, 3, countOptions);
        count.start();
    }
    else $("#time-left").text("Blith is ON");
}
function start()
{   
    showTime();
    var x= setInterval(showTime,60000);
    $(".title").lettering();
    $(".button").lettering();
    $(".header__logo").hover(function(){
        $(this).addClass("animated rubberBand");},function(){
        $(this).removeClass("animated rubberBand");});
    $(".navigation__button").click( function() { 
        $(".navigation").toggleClass("navigation--overlay");
        $(".navigation__icon").toggleClass("navigation__icon--overlay");
    });
}

/*Countdown code ends here*/
$(document).ready(start);
$(document).ready(function() {
    animation();
  }, 1000);

$('.button').click(function() {
animation();
});

function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}
