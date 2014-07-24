var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("myController", function ($scope, $firebase) {

    var player = $scope.player = 1;
    var clickCount = $scope.clickCount = 0;
  
// ----------- Check box function --------------------------------------------------------------   
    $scope.clickBtn = function(btn) {
      if (player == 1) {
        document.getElementById(btn).value = "X";
        document.getElementById(btn).disabled = "disabled"; //This is to prevent multiple clicks
        player -=1; //This causes player not to be 0
        clickCount +=1;
        document.getElementById("clicker").innerHTML = clickCount;
        $scope.winner();
      } else {
        document.getElementById(btn).value = "O";
        document.getElementById(btn).disabled = "disabled"; //This is to prevent multiple clicks
        player +=1; //This causes player to be 1 again
        clickCount +=1;
        document.getElementById("clicker").innerHTML = clickCount;
        $scope.winner(); 
        } 
      }
    
    $scope.winner = function() {
// ------------------- X winner ---------------------------------------------------------------        
      if (document.getElementById("btn1").value == "X" && 
        document.getElementById("btn2").value == "X" && 
        document.getElementById("btn3").value == "X" ) { 
        alert("X is the Winner!");
        alert("Game Over! Please Play again : )");
        clearBoard();
        //document.getElementById("intro").innerHTML = "page-scroll";
        //window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn1").value == "X" && 
        document.getElementById("btn4").value == "X" && 
        document.getElementById("btn7").value == "X" ) {
        alert("X is the Winner!");
        alert("Game Over! Please Play again : )")
        clearBoard();
        //window.location.hash = "#intro"; 
      } else if 
        (document.getElementById("btn7").value == "X" && 
        document.getElementById("btn8").value == "X" && 
        document.getElementById("btn9").value == "X" ) {
        alert("X is the Winner!");
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn3").value == "X" && 
        document.getElementById("btn6").value == "X" && 
        document.getElementById("btn9").value == "X" ) {
        alert("X is the Winner!");
        alert("Game Over! Please Play again : )")
        clearBoard(); 
        window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn1").value == "X" && 
        document.getElementById("btn5").value == "X" && 
        document.getElementById("btn9").value == "X" ) {
        alert("X is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn3").value == "X" && 
        document.getElementById("btn5").value == "X" && 
        document.getElementById("btn7").value == "X" ) {
        alert("X is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn2").value == "X" && 
        document.getElementById("btn5").value == "X" && 
        document.getElementById("btn8").value == "X" ) {
        alert("X is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn4").value == "X" && 
        document.getElementById("btn5").value == "X" && 
        document.getElementById("btn6").value == "X" ) {
        alert("X is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      }

//------------------------ O Winner -----------------------------------------------------
        else if 
        (document.getElementById("btn1").value == "O" && 
        document.getElementById("btn2").value == "O" && 
        document.getElementById("btn3").value == "O" ) {
        alert("O is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn1").value == "O" && 
        document.getElementById("btn4").value == "O" && 
        document.getElementById("btn7").value == "O" ) {
        alert("O is the Winner!");         
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn7").value == "O" && 
        document.getElementById("btn8").value == "O" && 
        document.getElementById("btn9").value == "O" ) {
        alert("O is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn3").value == "O" && 
        document.getElementById("btn6").value == "O" && 
        document.getElementById("btn9").value == "O" ) {
        alert("O is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn2").value == "O" && 
        document.getElementById("btn5").value == "O" && 
        document.getElementById("btn8").value == "O" ) {
        alert("O is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn4").value == "O" && 
        document.getElementById("btn5").value == "O" && 
        document.getElementById("btn6").value == "O" ) {
        alert("O is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn1").value == "O" && 
        document.getElementById("btn5").value == "O" && 
        document.getElementById("btn9").value == "O" ) {
        alert("O is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if 
        (document.getElementById("btn3").value == "O" && 
        document.getElementById("btn5").value == "O" && 
        document.getElementById("btn7").value == "O" ) {
        alert("O is the Winner!"); 
        alert("Game Over! Please Play again : )")
        clearBoard();
        // window.location.hash = "#intro";
      } else if (clickCount == 9) {
        alert("You are not good, please get some lessons");
        clearBoard();
      }
    } //End of winner 

    // $scope.clearBoard = function() {
    //   document.getElementById('btn1').value = "";
    //   document.getElementById('btn2').value = "";
    //   document.getElementById('btn3').value = "";
    //   document.getElementById('btn4').value = "";
    //   document.getElementById('btn5').value = "";
    //   document.getElementById('btn6').value = "";
    //   document.getElementById('btn7').value = "";
    //   document.getElementById('btn8').value = "";
    //   document.getElementById('btn9').value = "";
    //   //$scope.load();
    // } 

    //This refreshes the board
    // $scope.load = function() {
    //   location.reload(true);
    // }
}); //This is the end