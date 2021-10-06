document.addEventListener("DOMContentLoaded", function(event){
  //default display
  yourInt = setInterval( ()=>{
       const d = new Date();
   const time = d.toLocaleTimeString('en-IT', { hour12: false });

   display.innerHTML = time;

   },1000);

//action
const display = document.getElementById('time');
const container = document.getElementById("btn-wrap");
const timeTable = document.getElementById('timeTable');
var zeroTime = 0;
var myInt;
var yourInt;
var ourInt;
var Count = 0;
container.addEventListener("click", event => {
if(event.target.id == "box1"){
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
clearInterval(yourInt);
myInt = setInterval(timer, 1000);
}

if(event.target.id == "box2" ){
clearInterval(myInt);
clearInterval(yourInt);
}

if(event.target.id == "box3" ){
  Count += 1;
      if(Count%2 == 1){
  //worldtime
  var data = [
    {
      country: "New York",
      timeZone: "America/New_York"
    },
    {
      country: "Bangkok",
      timeZone: "Asia/Bangkok"
    },
    {
      country: "Lithuania",
      timeZone: "Europe/Vilnius"
    },
    {
      country:"Sydney",
    timeZone:"Australia/Sydney"
    }
  ]
 option = {hour12: false};

clock = () =>{
    timeTable.innerHTML ="";
    var now = new Date();
    for(let i=0; i<data.length; i++){
      option.timeZone=data[i].timeZone;
  let str=now.toLocaleString('en',option);
  let splice = str.split(',')
  let time = splice[1];
  console.log(time);
  let country=data[i].country;

  var tr=document.createElement('tr');

  tr.innerHTML=`<td>
                <h1>${country}</h1><br>
                </td>
                <td><p class="time">${time}</p>
                `
  timeTable.appendChild(tr);
    }
  }
  clock();
  ourInt = setInterval(clock, 1000);
  timeTable.style.visibility = "visible";
  //check for clicks

}else{
  timeTable.style.visibility = "hidden";
  clearInterval(ourInt);
}
}

if(event.target.id == "box4" ){
  clearInterval(myInt);

 yourInt = setInterval( ()=>{
      const d = new Date();
  const time = d.toLocaleTimeString('en-IT', { hour12: false });

  display.innerHTML = time;

  },1000);
}
  });

});
