//Tic Tac Toe

var player = 1;

//This entire function is used to place a mark and alternate between marks
//Each time a button is clicked, the function is ran

function clickBtn(btn) {
  if (player == 1) {
    document.getElementById(btn).value = "X";
    document.getElementById(btn).disabled = "disabled"; //This is to prevent multiple clicks
    player -=1; //This causes player not to be 0
    winner();
  } else {
    document.getElementById(btn).value = "O";
    document.getElementById(btn).disabled = "disabled"; //This is to prevent multiple clicks
    player +=1; //This causes player to be 1 again
    winner(); 
  }
} 

//Winner logic
function winner() {

//------------------------- X Winner ---------------------------------------------------  

  if (document.getElementById("btn1").value == "X" && 
      document.getElementById("btn2").value == "X" && 
      document.getElementById("btn3").value == "X" ) { 
      alert("X is the Winner!");
      clearBoard();
      alert("Game Over! Please Play again : )");
      window.location.hash = "#intro";
  } else if 
    (document.getElementById("btn1").value == "X" && 
      document.getElementById("btn4").value == "X" && 
      document.getElementById("btn7").value == "X" ) {
      alert("X is the Winner!");
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn7").value == "X" && 
      document.getElementById("btn8").value == "X" && 
      document.getElementById("btn9").value == "X" ) {
      alert("X is the Winner!");
      clearBoard(); 
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn3").value == "X" && 
      document.getElementById("btn6").value == "X" && 
      document.getElementById("btn9").value == "X" ) {
      alert("X is the Winner!");
      clearBoard(); 
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn1").value == "X" && 
      document.getElementById("btn5").value == "X" && 
      document.getElementById("btn9").value == "X" ) {
      alert("X is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn3").value == "X" && 
      document.getElementById("btn5").value == "X" && 
      document.getElementById("btn7").value == "X" ) {
      alert("X is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn2").value == "X" && 
      document.getElementById("btn5").value == "X" && 
      document.getElementById("btn8").value == "X" ) {
      alert("X is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn4").value == "X" && 
      document.getElementById("btn5").value == "X" && 
      document.getElementById("btn6").value == "X" ) {
      alert("X is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } 

//------------------------ O Winner -----------------------------------------------------

    else if 
    (document.getElementById("btn1").value == "O" && 
      document.getElementById("btn2").value == "O" && 
      document.getElementById("btn3").value == "O" ) {
      alert("O is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn1").value == "O" && 
      document.getElementById("btn4").value == "O" && 
      document.getElementById("btn7").value == "O" ) {
      alert("O is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn7").value == "O" && 
      document.getElementById("btn8").value == "O" && 
      document.getElementById("btn9").value == "O" ) {
      alert("O is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn3").value == "O" && 
      document.getElementById("btn6").value == "O" && 
      document.getElementById("btn9").value == "O" ) {
      alert("O is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn2").value == "O" && 
      document.getElementById("btn5").value == "O" && 
      document.getElementById("btn8").value == "O" ) {
      alert("O is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn4").value == "O" && 
      document.getElementById("btn5").value == "O" && 
      document.getElementById("btn6").value == "O" ) {
      alert("O is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn1").value == "O" && 
      document.getElementById("btn5").value == "O" && 
      document.getElementById("btn9").value == "O" ) {
      alert("O is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  } else if 
    (document.getElementById("btn3").value == "O" && 
      document.getElementById("btn5").value == "O" && 
      document.getElementById("btn7").value == "O" ) {
      alert("O is the Winner!"); 
      clearBoard();
      alert("Game Over! Please Play again : )")
  }
} //end of function

//This function clears the board once there is a winner
function clearBoard() {
  document.getElementById("btn1").value = "";
  document.getElementById("btn2").value = "";
  document.getElementById("btn3").value = "";
  document.getElementById("btn4").value = "";
  document.getElementById("btn5").value = "";
  document.getElementById("btn6").value = "";
  document.getElementById("btn7").value = "";
  document.getElementById("btn7").value = "";
  document.getElementById("btn8").value = "";
  document.getElementById("btn9").value = "";
  load();  // this refreshes the page once the game is complete
}

var load = function() {
  window.location.reload(true);
}

function scroll_page() {
  
}


