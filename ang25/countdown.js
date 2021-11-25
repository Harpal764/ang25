var dest = new Date("nov 25,2021 17:30:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var diff = dest-now;
    var days = Math.floor(diff/(1000*60*60*24));
    var Hrs = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    var min = Math.floor((diff%(1000*60*60))/(1000*60));
    var sec = Math.floor((diff%(1000*60))/1000);

    document.getElementById("demo").innerHTML= days+"d,"+Hrs+"hrs,"+min+"min,"+sec+"sec";
    if(diff<0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
},1000);

function stop(){
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIMER STOP"
}



