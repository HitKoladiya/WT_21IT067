console.log("lab4");


//objects of car
let audi={
    name:"audi",
    length:"4 feet",
    color:"red",
    noOfSeat:"4",
    //get value of object using this
    getVal:function(key){
        return this[key];
    }
}
let benz={
    name:"benz",
    length:"5 feet",
    color:"black",
    noOfSeat:"2",
    getVal:function(key){
        return this[key];
    }
}
let swift={
    name:"marutiSuzuki",
    length:"4.5 feet",
    color:"red",
    noOfSeat:"5",
    getVal:function(key){
        return this[key];
    }
}


//function for clicking event
function About(state,carName) {
    console.log(state.checked)

    //if checkbox state is uncheck then delete the element
    if(state.checked===false){
        deleteEle=document.getElementById(carName);
        console.log(deleteEle)
        deleteEle.remove();
        return;
    }

    let carTable=document.getElementById("carTable");
    console.log(carTable)
    // console.log(carName)
    if(carName=="audi"){
        console.log(audi)
        carTable.appendChild(carDetail(audi));
    }
    else if(carName=="benz"){
        console.log(benz)
        carTable.appendChild(carDetail(benz));
    }
    else{
        console.log(swift)
        carTable.appendChild(carDetail(swift));
    }
}


//make custom table with object
function carDetail(obj){
    let newtable=document.createElement("table");
    newtable.id=obj.name;
    newtable.innerHTML=`<tr>
                    <th>feature</th>
                    <th>Value</th>
                    </tr>
                    `
    for(let i in obj){
        if(i=="getVal"){
            break;
        }
        let row=document.createElement("tr");
        row.innerHTML=`<td>${i}</td>
                        <td>${obj.getVal(i)}</td>`
        newtable.appendChild(row);
    }
    return newtable;
}

// console.log(audi.getVal("color"))