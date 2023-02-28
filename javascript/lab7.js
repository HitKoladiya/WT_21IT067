let errDiv=document.getElementById('err');
let myForm=document.getElementById('myForm');
let subjectCount=0;
let sportsCount=0;

subjectCheckbox=(e)=>{
    if(e.checked==true){
        subjectCount++;
    }
    else{
        subjectCount--;
    }
}
sportsCheckbox=(e)=>{
    if(e.checked==true){
        sportsCount++;
    }
    else{
        sportsCount--;
    }
}
validation=()=>{
    let formText=document.getElementById('formText');
    let formEmail=document.getElementById('formEmail');
    console.log(count);
    if(formText.value==''){
        console.log("formText.innerText");
        errDiv.innerText="Please enter a value !!!";
        errDiv.style.color="red";
        errDiv.style.fontSize="20px";
        errDiv.style.fontWeight="bold";
    }
    else if(formEmail.value.length<=4){
        errDiv.innerText="Please enter a valid email !!!";
        errDiv.style.color="red";
        errDiv.style.fontSize="20px";
        errDiv.style.fontWeight="bold";
    }
    else if(count<2){
        errDiv.innerText="Please select atleast 2 checkboxes !!!";
        errDiv.style.color="red";
        errDiv.style.fontSize="20px";
        errDiv.style.fontWeight="bold";
    }
    else{
        errDiv.innerText=" ";
        myForm.action='https://www.w3schools.com/'
        myForm.submit();
    }
}