let body=document.getElementById('body')
function randomNumber(){
    return Math.floor(Math.random() * 16)+1;
}
// function start(){
setInterval(setBackground,700);
// }
async function setBackground(){
    let hexColor="#";
    for(let i=0;i<6;i++){
        let intNumber=randomNumber();
        let number=intNumber.toString(16);
        hexColor+=number
    }
    // await console.log(hexColor);
    body.style.backgroundColor=hexColor;
}

// let list=['red','balck','green','yellow','brown','blue']
// let i=0;
// async function listBackground(){
//     body.style.backgroundColor=list[i]; 
//     i++;
// }
// setInterval(listBackground,1500)