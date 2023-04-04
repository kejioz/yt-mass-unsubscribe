// 1) Go to https://www.youtube.com/feed/channels
// 2) Slide down all the page, until every channel is loaded
// 3) Open the console (F12) or rightclick on the page, inspect, then go to the console
// 4) Paste the code
//     5)If you have any problem, reload the page and run the script again;
//         6)If the code doesn't work, try increasing the ms values in "myTimer" and "setTimeout"

var i=0;
var elems = document.querySelectorAll("#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button")
var myVar = setInterval(myTimer,250); //increase the timer ms if it the script doesn't work

function myTimer(){
    elems[i].click();

    setTimeout(function(){
        var unsubcribe = document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(4)");
            unsubcribe.click();
    },150); //increase the timer ms if it the script doesn't work

    setTimeout(function(){
        var confirm = document.querySelector("#confirm-button > yt-button-shape > button");
            confirm.click();
    },150); //increase the timer ms if it the script doesn't work
    i++;
}
