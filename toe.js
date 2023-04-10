turn = "X";
finiched = false;
make = true;
let winner = document.getElementById("winner")
let table = document.getElementById("lol");
function play(a){
    if (a.innerHTML == "" && finiched == false){
        if(turn == "X"){
    a.appendChild(document.createTextNode("X"));
    wincon();
    turn ="O";
        }
        else{
    a.appendChild(document.createTextNode("O"));
    wincon();
    turn = "X";
        }
    }
}

function wincon(){
    for(i=1; i<4; i++){
        if(document.getElementById("square1"+i).innerHTML == document.getElementById("square2"+i).innerHTML 
        && document.getElementById("square2"+i).innerHTML == document.getElementById("square3"+i).innerHTML && document.getElementById("square3"+i).innerHTML !="" ){
            win();
            break;
        }
    }
    for(i=1; i<4; i++){
        if(document.getElementById("square"+i+"1").innerHTML == document.getElementById("square"+i+"2").innerHTML 
        && document.getElementById("square"+i+"2").innerHTML == document.getElementById("square"+i+"3").innerHTML && document.getElementById("square"+i+"3").innerHTML !="" ){
            win();
            break;
        }
        else if(document.getElementById("square11").innerHTML == document.getElementById("square22").innerHTML && 
        document.getElementById("square22").innerHTML == document.getElementById("square33").innerHTML && document.getElementById("square33").innerHTML != ""){
            win();
            break;
        }
        else if(document.getElementById("square13").innerHTML == document.getElementById("square22").innerHTML && 
        document.getElementById("square22").innerHTML == document.getElementById("square31").innerHTML && document.getElementById("square31").innerHTML != ""){
        win();
        break;
        }
    }
}
function win(){
            winner.style.visibility = "visible";
           winner.appendChild(document.createTextNode("The winner is "+turn));
            console.log("done")
            finiched = true;
}
function restart(){
    winner.style.visibility = "hidden";
  table.innerHTML = "";
  make = true;
  finiched = false;
  winner.innerHTML = "";
  makeGrid();
}
function makeGrid(){
  if (make == true){
  for (let i=1; i<4; i++){
    num1 = i.toString();
    let row = document.createElement("tr");
    table.appendChild(row);
    for (let t=1; t<4; t++){
        num2 = t.toString();
        let cell = document.createElement("td");
        row.appendChild(cell);  
        cell.setAttribute("id","square"+num1+num2)
        cell.setAttribute("onclick","play(this)")    
    }
} make = false;
}
}
makeGrid();