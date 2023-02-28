"use strict"
let tabb=document.getElementById('tabb');
let myInput=document.getElementById('myInput');
let button=document.getElementById('button');
let index=1;
myInput.addEventListener("blur",(e)=>{
    console.log("onblur")
    let myDiv=document.createElement('tr');
    myInput=document.getElementById('myInput').value;
    document.getElementById('myInput').value=null;
    let date=Date.now()/1000;
    console.log(date);
    // let s=date%60;
    // let m=date%3600;
    // let
    myDiv.innerHTML=`<td>${index}</td>
                    <td>${myInput}</td>
                    <td>${date}</td>  
                    `
    index++;
    tabb.appendChild(myDiv);
})

button.addEventListener('click',()=>{
    tabb=document.getElementById('tabb');
    let reverse=document.createElement(div);
    reverse.innerHTML+=tabb.lastElementChild;
    console.log(reverse);
})