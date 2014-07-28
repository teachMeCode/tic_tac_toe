//Tic Tac Toe clear board

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
  //load();  // this refreshes the page once the game is complete
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
  document.getElementById("btn4").disabled = false;
  document.getElementById("btn5").disabled = false;
  document.getElementById("btn6").disabled = false;
  document.getElementById("btn7").disabled = false;
  document.getElementById("btn8").disabled = false;
  document.getElementById("btn9").disabled = false;
}

// This refreshes the board
// var load = function() {
//   window.location.reload(true);
// }

