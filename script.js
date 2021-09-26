
document.addEventListener("DOMContentLoaded", function(event){

setInterval( ()=>{
const d = new Date();
const time = d.toLocaleTimeString('en-IT', { hour12: false });
document.getElementById('time').innerHTML = time;
},1000);

});
