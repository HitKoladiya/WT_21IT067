console.log("u1.js");
const btn = document.getElementById('submit');
const form = document.getElementById('form');
const search=document.getElementById('search');

let stuCount=0;
let meanAge=0;

class student {
    constructor(id, name, semester, skill, cgpa, age, address) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.skill = skill;
        this.cgpa = cgpa;
        this.age = age;
        this.address = address;
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const values = [...formData.entries()];
    console.log("values:",values);
    let stu=conversionOfFormData(values);
    console.log("stu=",stu);
    makeEntry(stu)
    let noOfStudent=document.getElementById("noOfStudent");
    let meanAgeP=document.getElementById("meanAge");
    noOfStudent.innerText=stuCount;
    meanAgeP.innerText=meanAge;
});

let conversionOfFormData=(formData)=>{
    let arr={
        "skills":[],
        "address":{}
    };
    for (let [key, value] of formData) {
        console.log(key, value);
        if(key=="skills"){
            arr[key].push(value);
            continue;
        }
        if(key=="city"){
            arr["address"][key]=value;
            continue;}
        if(key=="state"){
            arr["address"][key]=value;
            continue;
        }
        arr[key]=value;
    }
    const {skills,address,userid,name,semester,cgpa,age}=arr;
    meanAge=meanAge*stuCount;
    stuCount++;
    meanAge=(meanAge+age)/stuCount
    let stu=new student(userid,name,semester,skills,cgpa,age,address);
    return stu;
}

makeEntry=(stu)=>{
    let tbody=document.getElementById("tbody");

    let row=document.createElement("tr");
    for(let value in stu){
        if(value=="address"){
            row.innerHTML+=`<td>${stu[value]["city"]}`;
            row.innerHTML+=`<td>${stu[value]["state"]}`;
            continue;
        }
        row.innerHTML+=`<td>${stu[value]}</td>`
    }
    tbody.appendChild(row);

}

search.addEventListener('click',(e)=>{
    let searchKey=document.getElementById('searchValue');
    let searchValue=document.getElementById("search");
    console.log(searchKey,searchValue);
    sortTable(searchKey.value,searchValue.value);
});


sortTable=(key,value)=>{
    console.log("key:",key,"value:",value);
    let tbody=document.getElementById("tbody");
    let rows=tbody.getElementsByTagName("tr");
    let arr=[];
    for(let i=0;i<rows.length;i++){
        let tds=rows[i].getElementsByTagName("td")[5];
        console.log("tds:",tds.value);
        if (tds) {
            txtValue = tds.textContent || tds.innerText;
            if (txtValue.toUpperCase().indexOf(value) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
          }
        // rows[i].style.display=none;
    }
    console.log("arr:",arr);
    for(let i=0;i<arr.length;i++){
        tbody.appendChild(arr[i]);
    }
}


// for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// let test=[
//     [
//         "userid",
//         "21it067"
//     ],
//     [
//         "name",
//         "Hit BharatBhai Koladiya"
//     ],
//     [
//         "semester",
//         "4"
//     ],
//     [
//         "skills",
//         "c"
//     ],
//     [
//         "skills",
//         "c++"
//     ],
//     [
//         "cgpa",
//         "hhb"
//     ],
//     [
//         "age",
//         "bhb"
//     ],
//     [
//         "city",
//         "Surat"
//     ],
//     [
//         "state",
//         "Gujarat"
//     ]
// ]

// conversionOfFormData(test);