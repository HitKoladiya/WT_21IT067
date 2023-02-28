let div=document.getElementById('timeDiv');
let startBtn=document.getElementById('start');
let endBtn=document.getElementById('end');
let currentdate = new Date(); 
let timerstart;
startBtn.addEventListener('click',()=>{
    timer();
    div.style.display="block";
    timerstart=setInterval(timer,1000);
})

endBtn.addEventListener('click',()=>{
    clearInterval(timerstart);
    div.style.display="none";
})

function timer(){
    getHour()
    getMinit()
    getSecond()
    getTarikh()
    getMonth()
    getYear()
    currentdate = new Date();
}

function getHour(){
    let hourDiv=document.getElementById('hour');
    hourDiv.innerText=`${currentdate.getHours()}`;
    // return hourDiv;
}
function getMinit(){
    let minitDiv=document.getElementById('minit');
    minitDiv.innerText=`${currentdate.getMinutes()}`;
    // return minitDiv;
}
function getSecond(){
    let secondDiv=document.getElementById('second');
    secondDiv.innerText=`${currentdate.getSeconds()}`;
    // return secondDiv;
}
function getTarikh(){
    let tarikhDiv=document.getElementById('tarikh');
    tarikhDiv.innerText=`${currentdate.getDate()}`;
    // return secondDiv;
}
function getMonth(){
    let monthDiv=document.getElementById('month');
    monthDiv.innerText=`${currentdate.getMonth()+1}`;
    // return secondDiv;
}
function getYear(){
    let yearDiv=document.getElementById('year');
    yearDiv.innerText=`${currentdate.getFullYear()}`;
    // return secondDiv;
}
