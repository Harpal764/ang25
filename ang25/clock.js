function currentTime(){
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    let ses = 'AM';

    if(hh == 0){
        hh = 12;
    }
    if(hh>12){
        hh=hh-12;
        ses = "PM";
    }

    hh = (hh<10)?'0'+hh:hh;
    mm = (mm<10)?'0'+mm:mm;
    ss = (ss<10)?'0'+ss:ss;

    let time = hh+":"+mm+":"+ss+" "+ses;
    document.getElementById("clock").innerHTML = time;
    let t = setInterval(function(){currentTime()},1000);

}
currentTime();

