
    const board = [-1, -1, -1,-1,-1,-1,-1,-1,-1];
    let currentPlayer = "X";
    function renderBoard(){
    const allBoxes = document.querySelectorAll('.box')

    allBoxes.forEach((boxElement, i)=>{
        if(board[i]=='O'){
            boxElement.innerHTML = '<img src="./image/cricle.png"height ="50px"  />';
    }
    else if(board[i]=='X'){
        boxElement.innerHTML = '<img src="./image/cross.png"height ="50px" />';
    }
    else{
        boxElement.innerHTML = '';
    }
    })
}
       renderBoard();
       function selectBox(boxNumber) { 
        if(board[boxNumber] !== -1)   {
            alert("Invaild Move");
           return;
        }
        board[boxNumber]= currentPlayer;
        renderBoard();

    if(currentPlayer === "X"){
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }

    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.innerText = currentPlayer;

    checkwinner();   
}  
     function resetBoard(){
     board.fill(-1);
     renderBoard();
   

    currentPlayer = "X"
    const currentPlayerELement = document.getElementById("currentPlayer");
    currentPlayerELement.innerText = currentPlayer;
} 
    function isPlayerPresent(place,player){
        const a = place[0];
        const b = place[1];
        const c = place[2];

        if(board[a] == player && board[b] == player && board[c] == player){
            return true;
        } else{
            return false;
        }
    }

    function checkwinner() {
        if(isPlayerPresent([0,1,2],"X")){
            alert ("PLayer X Wins");
        } else if (isPlayerPresent([3,4,5],"X")){
            alert ("PLayer X Wins");
        } else if (isPlayerPresent([6,7,8],"X")) {
            alert ("PLayer X Wins");
        } else if (isPlayerPresent([0,3,6],"X")) {
            alert("PLayer X Wins");
        } else if (isPlayerPresent([1,4,7],"X")) {
            alert("PLayer X Wins");
        } else if (isPlayerPresent([2,5,8],"X")) {
            alert("PLayer X Wins");
        } else if (isPlayerPresent([0,4,8],"X")) {
            alert ("PLayer X Wins");
        } else if (isPlayerPresent([2,4,6],"X")) {
            alert("PLayer X Wins");
    } 

         if(isPlayerPresent([0,1,2],"O")){
           alert ("PLayer O Wins");
       } else if (isPlayerPresent([3,4,5],"O")){
           alert ("PLayer O Wins");
       } else if (isPlayerPresent([6,7,8],"O")) {
            alert ("PLayer O Wins");
       } else if (isPlayerPresent([0,3,6],"O")) {
            alert("PLayer O Wins");
       } else if (isPlayerPresent([1,4,7],"O")) {
            alert("PLayer O Wins");
       } else if (isPlayerPresent([2,5,8],"O")) {
            alert("PLayer O Wins");
        } else if (isPlayerPresent([0,4,8],"O")) {
            alert ("PLayer O Wins");
       } else if (isPlayerPresent([2,4,6],"O")) {
            alert("PLayer O Wins");
       }
} 
  
 
 
