let value1 = null;
let value2 = null;
var solution = null;
var lastPressed = "";
var midpress = "";
var PHidden = false;

function Player1(){
      ConfigPlayer(1);
}
function Player2(){
    ConfigPlayer(2);
}
function Player3(){
    ConfigPlayer(3);
}

function Player4(){
    ConfigPlayer(4);
}
function Player5(){
    ConfigPlayer(5);
}
function Player6(){
  ConfigPlayer(6);
}
function Player7(){
  ConfigPlayer(7);
}

function Player8(){
  ConfigPlayer(8);
}

function ConfigPlayer(PlayerIndex){
    var Player = "Player-" + PlayerIndex;
    var PlayerNameValue = "PlayerNameValue-" + PlayerIndex;
    var PlayerBG = "PlayerBG-" + PlayerIndex;
    var PlayerName = "PlayerName-" + PlayerIndex;

    if(PHidden == false){
        var PlayerNewName = document.getElementById(PlayerNameValue).value;
        document.getElementById(Player).style.backgroundColor = document.getElementById(PlayerBG).value; 
        document.getElementById(PlayerName).innerHTML = PlayerNewName.italics().bold();
        document.getElementById(PlayerBG).style.display = "none";
        document.getElementById(PlayerNameValue).style.display = "none";
        PHidden = true;
    }else{
        document.getElementById(PlayerBG).style.display = "block";
        document.getElementById(PlayerNameValue).style.display = "block";
        PHidden = false;
    }
}


//calculations
function Subtract(PlayerIndex){
        switch(midpress){
            case "add":
                Add(PlayerIndex);
                midpress = "";
            break;
        }
        var PlayerOperation = "OperationsP" + PlayerIndex;
        if (value1 == null){
            value1 = document.getElementById(PlayerOperation).value;
            document.getElementById(PlayerOperation).value = "";
            document.getElementById(PlayerOperation).style.color = "red";
            midpress = "subtract";
        }else{
            value2 = document.getElementById(PlayerOperation).value;
            solution = value1 - value2;
            document.getElementById(PlayerOperation).style.color = "#008F11";
            document.getElementById(PlayerOperation).value = solution;
            value1 = null;
        }
        lastPressed = "subtract";
}

function Add(PlayerIndex){
    switch(midpress){
        case "subtract":
            Subtract(PlayerIndex);
            midpress = "";
        break;
    }
    var PlayerOperation = "OperationsP" + PlayerIndex;
    if (value1 == null){
        value1 = document.getElementById(PlayerOperation).value;
        document.getElementById(PlayerOperation).value = "";
        document.getElementById(PlayerOperation).style.color = "blue";
        midpress = "add";
    }else{
        value2 = document.getElementById(PlayerOperation).value;
        solution = parseInt(value1) + parseInt(value2);
        document.getElementById(PlayerOperation).style.color = "#008F11";
        document.getElementById(PlayerOperation).value = solution;
        value1 = null;
    }
    lastPressed = "add";
}

function Equals(PlayerIndex){
    switch(lastPressed){
        case "subtract":
            lastPressed = "";
            midpress = "";
            Subtract(PlayerIndex);
        break;
        case "add":
            lastPressed = "";
            midpress = "";
            Add(PlayerIndex);
        break;
        default:

    }
}