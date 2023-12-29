setInterval(showTime(),1000);

function showTime(){
    let time = new Date();
    let hr=time.getHours();
    let min= time.getMinutes();
    let sec = time.getSeconds();
    am_pm="AM";

    if(hr>=12){
        if(hr>12) hr-=12;
        am_pm="PM";
    }
    else if(hr==0){
        hr=12;
        am_pm="AM";
 
    }

    hr=
    hr<10 ?"0" +hr:hr;
    min<10?"0"+min:min;
    sec<10?"0"+sec:sec;

    let curTime = hr+":"+min+":"+sec +am_pm;
    document.getElementById("clock").innerHTML =
    curTime;
}

showTime();