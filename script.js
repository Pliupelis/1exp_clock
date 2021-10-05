document.addEventListener("DOMContentLoaded", function(event){
const display = document.getElementById('time');
const container = document.getElementById("btn-wrap");
var zeroTime = 0;
  timer = () =>{
  ++zeroTime;
           var hour = Math.floor(zeroTime /3600);
           var minute = Math.floor((zeroTime - hour*3600)/60);
           var seconds = zeroTime - (hour*3600 + minute*60);
           if(hour < 10)
             hour = "0"+hour;
           if(minute < 10)
             minute = "0"+minute;
           if(seconds < 10)
             seconds = "0"+seconds;
           display.innerHTML = hour +
           ":" + minute + ":" + seconds;
};
var myInt = setInterval(timer, 1000);
container.addEventListener("click", event => {

if(event.target.id == "box1" ){

setInterval(timer, 1000);
}

if(event.target.id == "box2" ){
clearInterval(myInt);
console.log("works");
}

if(event.target.id == "box3" ){
}

if(event.target.id == "box4" ){
  clearInterval(myInt);

var yourInt = setInterval( ()=>{
      const d = new Date();
  const time = d.toLocaleTimeString('en-IT', { hour12: false });

  display.innerHTML = time;

  },1000);
}



  });
});

/*
updateTime = () =>{
  const isButton = event.target.nodeName === 'BUTTON';
if (!isButton) {
  return;
}
zeroTime ++;
display.innerHTML = zeroTime;
};

container.addEventListener('click', ()=>{
setInterval(updateTime(),1000);
console.log("asa");
}); */
