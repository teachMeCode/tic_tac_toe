//Tic Tac Toe

// This function clears the board once there is a winner
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

// This refreshes the board
var load = function() {
  window.location.reload(true);
}



