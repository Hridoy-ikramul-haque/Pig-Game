/*
Game rules:
-the game has 2 players,playing in rounds
-In each turn ,a player rolls a dice as many times as he wishes,Each result get added to his ROUND score.
-But if the player rolls a 1,all his Round score gets lost.After that,it's the next players turn that ,it's the next player's turn
-The first player to reach 100 points on Global score wins the game .



ADD EXTRA 3 CHALLAGE:
1.A player looses his entire score when he rolls two 6 in a row.After that,it's the next playe's turn
2.Add an input field to the Html where players can set the winning score ,so that they can change the predifend score of 100.
3.Add another dice to the game ,so that there are two dices now.the player looses his current score when one of them is a 1.
*/



//let dice = Math.floor(Math.random()*6)+1;//generate random number from 0 to 6.

//console.log(dice);
//document.querySelector('#current--' +activePlayer).textContent = dice;//change the content of an html element here[it's put only plane text here.]


//document.querySelector('#current--' + activePlayer).innerHTML= '' +dice + '';


// var x= document.querySelector('#score--1').textContent;

// console.log(x);



/* EVENTS: Notifications that are sent to notify the code that something happened on the webpage.
Example: clicking a button,resizing a window,pressing a key,scrolling down
Event Lisener: a function that performs an action based on a certain event.It waits for a specific event to happen.
*/
  // function btn(){
  //    //anonymous function
  // }

  let gamePlaying,scores,roundScor,activePlayer;
  let lastDice;

  initialStage();


document.querySelector('.btn--roll').addEventListener('click', function(){
  if(gamePlaying){//1. Generate Random number when click the roll dice button.
    let dice0 = Math.floor(Math.random()*6)+1;
    let dice1 = Math.floor(Math.random()*6)+1;





   //2.Display the result via dice image.
   //var diceDom = document.querySelector('.dice');//select image and put in diceDom variable
   //diceDom.style.display = 'block';//block the display after click


   document.getElementById('dice--0').style.display = 'block';
   document.getElementById('dice--1').style.display = 'block';

   document.getElementById('dice--0').src = 'img/dice-' + dice0 + '.png';//change the Image based on dice value
  
   document.getElementById('dice--1').src = 'img/dice-' + dice1 + '.png';//change the Image based on dice value


   //3.updade the round score if the rolled number was not a 1 .
   if(dice0===6 &&  dice1===6){

     //Player loose the entire scores.

     //ActivePlayer score should be Zero.
     scores[activePlayer] = 0;
     //display the active player Score Zero
     document.querySelector('#score--' + activePlayer).textContent = '0';
     //turn the nextPlayer
     nextPlayerChange();
   } else if(dice0!==1 && dice1!=1){

    //1.add score
    roundScore+= dice0+dice1;


    //2.select the active player and add roundscore
    document.querySelector('#current--' +activePlayer).textContent = roundScore;

  } else{
    nextPlayerChange();
   }


    //set the previous dice value .
    lastDice = dice;

  }

});


document.querySelector('.btn--hold').addEventListener('click' , function(){


  if(gamePlaying){//1.Add current score to the player Glober Score.
    scores[activePlayer] +=roundScore;




    //2.Update the User Interface(UI)
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];


    let inputValue =document.querySelector('.winning-score').value;
    //console.log(active);
    //can't put udefined,0,null,or "",if so converted to false.
    //anything else is true.
    let winningScoreSet;
    if(inputValue){
      winningScoreSet = inputValue;
    }else{
      winningScoreSet = 100;
    }

    //3.Check if player won the game
    if(scores[activePlayer] >= winningScoreSet){
      //change the winning player name
      document.querySelector('#name--' + activePlayer).textContent = 'Winner!';
      
       //hide thr dice
       document.getElementById('dice--0').style.display = 'none';
       document.getElementById('dice--1').style.display = 'none';

      //add player--winnwe class
      document.querySelector('.player--' + activePlayer).classList.add('player--winner');
      //remove Active class
      document.querySelector('.player--' + activePlayer).classList.remove('player--active');
      //off the Game
      gamePlaying = false;
    } else{
      //4.Change the Player
      nextPlayerChange();
    }

      }


});
//call the initial stage function
document.querySelector('.btn--new').addEventListener('click' , initialStage);




function nextPlayerChange(){
  // 1.choose next player
  activePlayer===0? activePlayer=1:activePlayer=0;
  roundScore=0;


  //2.As game rules if the dice value is one set the current score 0.
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';


  //3.Change the active player
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');


  //4.Again Hide the dice Image
  document.getElementById('dice--0').style.display = 'block';
  document.getElementById('dice--1').style.display = 'block';
}


function initialStage(){
//all r zero and game is on.
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
document.getElementById('dice--0').style.display = 'none';
document.getElementById('dice--1').style.display = 'none';//initialy hide  dice image.


//At first all are 0.
document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

//return player Name Again
document.querySelector('#name--0').textContent = 'Player 1';
document.querySelector('#name--1').textContent = 'Player 2';

//remove player winer class
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--winner');

//add the first player active again
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');

//document.querySelector('.player--0').classList.add('player--active');


//winning Score Value Reset
document.querySelector('.winning-score').value = '';






};
