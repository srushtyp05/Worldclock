let a;
let date;
let time;
const options={weekday:'long' , year:'numeric' , month:'long' , day:'numeric'}
setInterval(()=>{
a=new Date();
date=a.toLocaleDateString(undefined,options);
time=a.getHours() + ':' + a.getMinutes() + ':' +a.getSeconds();
document.getElementById('time').innerHTML=time + "<br> on <span></span>" + date;
},1000)

var Time1=function(){
    document.getElementById("time1").innerHTML=new Date().toLocaleString("en-US",{timeZone:'europe/london',timeStyle:'medium',hourCycle:'h24'});
}
Time1();
setInterval(Time1,1000);
var Time2=function(){
    document.getElementById("time2").innerHTML=new Date().toLocaleString("en-US",{timeZone:'America/New_York',timeStyle:'medium',hourCycle:'h24'});
}
Time2();
setInterval(Time2,1000);

var Time3=function(){
    document.getElementById("time3").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Australia/Sydney',timeStyle:'medium',hourCycle:'h24'});
}
Time3();
setInterval(Time3,1000);

var Time4=function(){
    document.getElementById("time4").innerHTML=new Date().toLocaleString("en-US",{timeZone:'America/Creston',timeStyle:'medium',hourCycle:'h24'});
}
Time4();
setInterval(Time4,1000);

var Time5=function(){
    document.getElementById("time5").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Europe/Berlin',timeStyle:'medium',hourCycle:'h24'});
}
Time5();
setInterval(Time5,1000);

var Time6=function(){
    document.getElementById("time6").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Europe/Paris',timeStyle:'medium',hourCycle:'h24'});
}
Time6();
setInterval(Time6,1000);

var Time7=function(){
    document.getElementById("time7").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/shanghai',timeStyle:'medium',hourCycle:'h24'});
}
Time7();
setInterval(Time7,1000);

var Time8=function(){
    document.getElementById("time8").innerHTML=new Date().toLocaleString("en-US",{timeZone:'America/Cuiaba',timeStyle:'medium',hourCycle:'h24'});
}
Time8();
setInterval(Time8,1000);

var Time9=function(){
    document.getElementById("time9").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Tokyo',timeStyle:'medium',hourCycle:'h24'});
}
Time9();
setInterval(Time9,1000);

var Time10=function(){
    document.getElementById("time10").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Singapore',timeStyle:'medium',hourCycle:'h24'});
}
Time10();
setInterval(Time10,1000);

var Time11=function(){
    document.getElementById("time11").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Dubai',timeStyle:'medium',hourCycle:'h24'});
}
Time11();
setInterval(Time11,1000);

var Time12=function(){
    document.getElementById("time12").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Colombo',timeStyle:'medium',hourCycle:'h24'});
}
Time12();
setInterval(Time12,1000);

var Time13=function(){
    document.getElementById("time13").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Asia/Bangkok',timeStyle:'medium',hourCycle:'h24'});
}
Time13();
setInterval(Time13,1000);

var Time14=function(){
    document.getElementById("time14").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Africa/Johannesburg',timeStyle:'medium',hourCycle:'h24'});
}
Time14();
setInterval(Time14,1000);

var Time15=function(){
    document.getElementById("time15").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Atlantic/Canary',timeStyle:'medium',hourCycle:'h24'});
}
Time15();
setInterval(Time15,1000);

var Time16=function(){
    document.getElementById("time16").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Europe/Zurich',timeStyle:'medium',hourCycle:'h24'});
}
Time16();
setInterval(Time16,1000);

var Time17=function(){
    document.getElementById("time17").innerHTML=new Date().toLocaleString("en-US",{timeZone:'Europe/Warsaw',timeStyle:'medium',hourCycle:'h24'});
}
Time17();
setInterval(Time17,1000);