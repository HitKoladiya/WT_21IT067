console.log("lab6");
const name=document.getElementById('name');
const id=document.getElementById('id');
const CGPA1=document.getElementById('1stCGPA');
const CGPA2=document.getElementById('2stCGPA');
const CGPA3=document.getElementById('3stCGPA');
const deatil=document.getElementById('detail')

class student{
    constructor(name,id,c1,c2,c3){
        this.name=name;
        this.id=id;
        this.CGPA1=c1;
        this.CGPA2=c2;
        this.CGPA3=c3;
    }
    sgpa(){
        this.SGPA=(Number(this.CGPA1)+Number(this.CGPA2)+Number(this.CGPA3))/3;
    }

}

function call(){
    //class object
    let s1=new student(name.value,id.value,CGPA1.value,CGPA2.value,CGPA3.value);
    s1.sgpa();
    deatil.innerText=`  name:${s1.name}\n
                        id:${s1.id}\n
                        CGPA1:${s1.CGPA1}\n
                        CGPA2:${s1.CGPA2}\n
                        CGPA1:${s1.CGPA3}\n
                        SGPA=${s1.SGPA}     `

    //JSON to object"
    // let myJson=`{"name":"${name.value}","id":"${id.value}","CGPA1":"${CGPA1.value}","CGPA2":"${CGPA2.value}","CGPA3":"${CGPA3.value}","SGPA":"${(CGPA1.value+CGPA2.value+CGPA3.value)/3}"}`
    // console.log(myJson)
    // let stuObj=JSON.parse(myJson)
    // console.log(stuObj)
    // deatil.innerText=`  name:${stuObj['name']}\n
    //                     id:${stuObj["id"]}\n
    //                     CGPA1:${stuObj["CGPA1"]}\n
    //                     CGPA2:${stuObj["CGPA2"]}\n
    //                     CGPA1:${stuObj["CGPA3"]}\n
    //                     SGPA=${stuObj["SGPA"]}     `

}