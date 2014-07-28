//Tic Tac Toe app control
var myApp = angular.module("myApp", ["firebase"]);

myApp.controller("myController", function ($scope, $firebase) {

//-------------- Firebase ----------------------------------------------------------------------

    var tttRef = new Firebase("https://bsp-wdi-ttt.firebaseio.com");
    var ButtonClick = new Firebase("https://bsp-wdi-ttt.firebaseio.com//remoteButtonClick");

    $scope.remoteButtonClick = $firebase(new Firebase("https://bsp-wdi-ttt.firebaseio.com//remoteButtonClick"));
    //$scope.remoteClickBtn = $firebase(new Firebase("https://bsp-wdi-ttt.firebaseio.com/" + "/clickBtn"));
    //$scope.remoteClickCount = $firebase(new Firebase("https://bsp-wdi-ttt.firebaseio.com/" + "/clickCount"));
    $scope.remoteClickCount = $firebase(new Firebase("https://bsp-wdi-ttt.firebaseio.com/" + "/clickCount"));
    
    $scope.remoteButtonClick.$bind($scope, "buttonClick");
    $scope.$watch('buttonClick', function(){
        console.log('Finally');
    });

    $scope.remoteClickCount.$bind($scope, "clickCount");
    $scope.$watch('clickCount', function(){
        //console.log("Rad!");
    });
    
    // $scope.remoteClickBtn.$bind($scope,"clickBtn");
    // $scope.$watch('clickBtn', function(){
    //     console.log("cool");
    // });

    // $scope.remoteClickBtn = $firebase(new Firebase("https://bsp-wdi-ttt.firebaseio.com/" + "/clickBtn"));
    // $scope.remoteClickBtn = $bind($scope, "clickBtn");
    // $scope.$watch('clickBtn', function(){

    // });


    // $scope.updateClick  = function() {
    //     tttRef.push({player1:$scope.player1});
    //     tttRef.push({player2:$scope.player2});
    // }; //End of function

// -------------- Player variables ----------------------------------------------------------

    $scope.player = 1;
    $scope.clickCount = 0;

    var resetPlayer = function() {
        $scope.player = 1;
    }

    var resetClickCount = function() {
        $scope.clickCount = 0;
    }
  
  
// ----------- Check box function --------------------------------------------------------------   
    $scope.clickBtn = function(btn) {
      if ($scope.player == 1) {
        document.getElementById(btn).value = "X";
        document.getElementById(btn).disabled = "disabled"; //This is to prevent multiple clicks
        $scope.player -=1; //This causes player not to be 0
        $scope.clickCount +=1; //This is incrementing the click counter
        document.getElementById("clicker").innerHTML = $scope.clickCount;
        $scope.winner(); //This checks for a winner
      } else {
        document.getElementById(btn).value = "O";
        document.getElementById(btn).disabled = "disabled"; //This is to prevent multiple clicks
        $scope.player +=1; //This causes player to be 1 again
        $scope.clickCount +=1; //This is incrementing the click counter
        document.getElementById("clicker").innerHTML = $scope.clickCount;
        $scope.winner(); //This checks for a winner
        } 
      }
    
    $scope.winner = function() {
// ------------------- X winner ---------------------------------------------------------------        
      if (document.getElementById("btn1").value == "X" && 
        document.getElementById("btn2").value == "X" && 
        document.getElementById("btn3").value == "X" ) { 
        alert($scope.player1 + " is the winner!");
        alert("Game over! Please play again : )");
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn1").value == "X" && 
        document.getElementById("btn4").value == "X" && 
        document.getElementById("btn7").value == "X" ) {
        alert($scope.player1 + " is the winner!");
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0; 
      } else if 
        (document.getElementById("btn7").value == "X" && 
        document.getElementById("btn8").value == "X" && 
        document.getElementById("btn9").value == "X" ) {
        alert($scope.player1 + " is the winner!");
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn3").value == "X" && 
        document.getElementById("btn6").value == "X" && 
        document.getElementById("btn9").value == "X" ) {
        alert($scope.player1 + " is the winner!");
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn1").value == "X" && 
        document.getElementById("btn5").value == "X" && 
        document.getElementById("btn9").value == "X" ) {
        alert($scope.player1 + " is the winner!"); 
        alert("Game over! please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn3").value == "X" && 
        document.getElementById("btn5").value == "X" && 
        document.getElementById("btn7").value == "X" ) {
        alert($scope.player1 + " is the winner!"); 
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn2").value == "X" && 
        document.getElementById("btn5").value == "X" && 
        document.getElementById("btn8").value == "X" ) {
        alert($scope.player1 + " is the winner!"); 
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn4").value == "X" && 
        document.getElementById("btn5").value == "X" && 
        document.getElementById("btn6").value == "X" ) {
        alert($scope.player1 + " is the winner!"); 
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      }

//------------------------ O Winner -----------------------------------------------------
        else if 
        (document.getElementById("btn1").value == "O" && 
        document.getElementById("btn2").value == "O" && 
        document.getElementById("btn3").value == "O" ) {
        alert($scope.player2 + " is the winner!"); 
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn1").value == "O" && 
        document.getElementById("btn4").value == "O" && 
        document.getElementById("btn7").value == "O" ) {
        alert($scope.player2 + " is the winner!");         
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn7").value == "O" && 
        document.getElementById("btn8").value == "O" && 
        document.getElementById("btn9").value == "O" ) {
        alert($scope.player2 + " is the winner!"); 
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn3").value == "O" && 
        document.getElementById("btn6").value == "O" && 
        document.getElementById("btn9").value == "O" ) {
        alert($scope.player2 + " is the winner!"); 
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn2").value == "O" && 
        document.getElementById("btn5").value == "O" && 
        document.getElementById("btn8").value == "O" ) {
        alert($scope.player2 + " is the winner!"); 
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn4").value == "O" && 
        document.getElementById("btn5").value == "O" && 
        document.getElementById("btn6").value == "O" ) {
        alert($scope.player2 + " is the winner!"); 
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn1").value == "O" && 
        document.getElementById("btn5").value == "O" && 
        document.getElementById("btn9").value == "O" ) {
        alert($scope.player2 + " is the winner!"); 
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if 
        (document.getElementById("btn3").value == "O" && 
        document.getElementById("btn5").value == "O" && 
        document.getElementById("btn7").value == "O" ) {
        alert($scope.player2 + " is the winner!"); 
        alert("Game over! Please play again : )")
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      } else if ($scope.clickCount == 9) {
        alert("You are not good, please get some lessons");
        clearBoard();
        resetPlayer();
        resetClickCount();
        document.getElementById("clicker").innerHTML = 0;
      }
    } //End of winner 

}); //This is the end