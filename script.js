
document.addEventListener("DOMContentLoaded", function(event){
let zeroTime = 0;
setInterval( ()=>{
const d = new Date();
const display = document.getElementById('time');
const container = document.getElementById('box');
const time = d.toLocaleTimeString('en-IT', { hour12: false });
display.innerHTML = time;


},1000);


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
