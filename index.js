//--------------------------------------------//
//
//          0   1   2
//          3   4   5
//          6   7   8
//

//declarations
var count = 0
var mySlots = document.querySelectorAll('div .slot')
var XArray = []
var YArray = []

//Used in Robot funciton
getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(9))
}

storeXArray = (id) => {
    switch(id){
        case "sone": 
        id = 0
        break
        case "stwo": 
        id = 1
        break
        case "sthree":
             id = 2
             break
        case "sfour":
             id = 3
             break
        case "sfive":
             id = 4
             break
        case "ssix":
             id = 5
             break
        case "sseven":
             id = 6
             break
        case "seight":
             id = 7
             break
        case "snine":
             id = 8
             break
    }
    selectArray.push(id)
    console.log("id" + id)
    console.log(selectArray)
}

storeXArray = (id) => {
    switch(id){
        case "sone": 
        id = 0
        break
        case "stwo": 
        id = 1
        break
        case "sthree":
             id = 2
             break
        case "sfour":
             id = 3
             break
        case "sfive":
             id = 4
             break
        case "ssix":
             id = 5
             break
        case "sseven":
             id = 6
             break
        case "seight":
             id = 7
             break
        case "snine":
             id = 8
             break
    }
    selectArray.push(id)
    console.log("id" + id)
    console.log(selectArray)
}
//Check if we have any matches
check = () =>{
    var slotContent = {}
    for(let i=0; i<9; i++){
        slotContent[i] = mySlots[i].children[0]
        if(slotContent[i] == undefined){
        }
    }
    
        if ((slotContent[0].textContent == slotContent[1].textContent) && (slotContent[0].textContent == slotContent[2].textContent))
            alert(slotContent[0].textContent +" wins! \n Click retry to play again!!!")
        
        else if ((slotContent[0].textContent == slotContent[3].textContent) && (slotContent[0].textContent == slotContent[6].textContent))
            alert(slotContent[0].textContent +" wins! \n Click retry to play again!!!")
        
        else if ((slotContent[1].textContent == slotContent[4].textContent) && (slotContent[0].textContent == slotContent[7].textContent))
            alert(slotContent[0].textContent +" wins! \n Click retry to play again!!!")
}


slotClick = (event) => {
    if ((event.target.localName == "div") && (event.target.childElementCount == 0)) {
        var X = "X"
        var placement = document.createElement("h1")
        placement.textContent = X
        event.target.appendChild(placement)
        count++;
        console.log(count)
        console.log(event.srcElement.id)
        storeXArray(event.srcElement.id)
        if(count <=4)
        Robot()
        if(count>=3)
        check()
    }
    //implement automatic decider for O
}

Robot = () => {
    var O = "O"
    let full = true
    while (full) {
        let pos = getRandomInt();
        if (mySlots[pos].childElementCount == 0) {
            var placement = document.createElement("h1")
            placement.textContent = O
            mySlots[pos].appendChild(placement)
            storeOArray(mySlots[pos].id)
            full = false;
        }
    }
}

//main

for (let i = 0; i < 9; i++) {
    mySlots[i].addEventListener('click', slotClick);
}