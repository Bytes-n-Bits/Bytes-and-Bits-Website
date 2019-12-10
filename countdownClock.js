// set the date for start of Hour of Code
let countdownClock = new Date("December 9, 2019 08:00:00").getTime()


// update the countdown every 1 second
let oneSecondDecrement = setInterval(function() {
    // get today's date and time
let theCurrentTime = new Date().getTime();

// find the distance between now and countdown date
let distance = countdownClock - theCurrentTime;

// time calculations for days, hours and minutes and seconds

let days = Math.floor(distance / (1000 * 60 * 60 *24));

let days = Math.floor((distance % (100 * 60 * 60 *24)) / (1000 * 60 * 60));

let minutes = Math.floor((distance%(1000*60*60)) / (1000*60));

let seconds = Math.floor((distance %(1000*60))/1000);

// output the result in an element w/ id =countdownClock

document.getElementById("countdownClock").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "; 


