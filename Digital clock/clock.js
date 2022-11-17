

function showTime(){
    var todayDate = new Date();
    var h = todayDate.getHours();
    var m = todayDate.getMinutes();
    var s = todayDate.getSeconds();
    var ampm = "AM";
    if(h == 0){
        h = 12
    }

    else if(h>12){
        h = h-12
        ampm = "PM" 
    }
    h = h < 10 ? 0 + "" + h : h ;
    m = m < 10 ? 0 + "" + m : m ;
    s = s < 10 ? 0 + "" + s : s ;
    var clockTime = h + " : " + m + " : " + s + " " + ampm;
    document.getElementById("clock").innerText = clockTime;

    
    
}
// showTime();

var intervalRef;
function startClock () {
 intervalRef = setInterval(showTime, 1000);
}

function stopClock () {
    clearInterval(intervalRef);
    // alert("button is click");
}
    

