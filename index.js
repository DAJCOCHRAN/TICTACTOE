//Used in Robot funciton
getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(9))
}
//Check if we have any matches
check = () =>{
    //switch(mySlots)
        if ((mySlots[0].children[0].textContent == "X") && (mySlots[1].children[0].textContent == "X") && (mySlots[2].children[0].textContent == "X"))
            alert("X wins!")
        //console.log("Play again")
    
}


slotClick = (event) => {
    if ((event.target.localName == "div") && (event.target.childElementCount == 0)) {
        var X = "X"
        var placement = document.createElement("h1")
        placement.textContent = X
        event.target.appendChild(placement)
        count++;
        console.log(count)
        console.log(mySlots[0])
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
            full = false;
        }
    }
}


var count = 0
var mySlots = document.querySelectorAll('div .slot')
for (let i = 0; i < 9; i++) {
    mySlots[i].addEventListener('click', slotClick);
}