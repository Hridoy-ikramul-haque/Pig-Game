/*
Game rules:
-the game has 2 players,playing in rounds
-In each turn ,a player rolls a dice as many times as he wishes,Each result get added to his ROUND score.
-But if the player rolls a 1,all his Round score gets lost.After that,it's the next players turn that ,it's the next player's turn
-The first player to reach 100 points on Global score wins the game .
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

  initialStage();


document.querySelector('.btn--roll').addEventListener('click', function(){
  if(gamePlaying){//1. Generate Random number when click the roll dice button.
    let dice = Math.floor(Math.random()*6)+1;



   //2.Display the result via dice image.
   var diceDom = document.querySelector('.dice');//select image and put in diceDom variable
   diceDom.style.display = 'block';//block the display after click
   diceDom.src = 'img/dice-' + dice + '.png';//change the Image based on dice value



   //3.updade the round score if the rolled number was not a 1 .

   if(dice!==1){
     //1.add score
     roundScore+= dice;


     //2.select the active player and add roundscore
     document.querySelector('#current--' +activePlayer).textContent = roundScore;

   } else{
     nextPlayerChange();
    }

  }

});


document.querySelector('.btn--hold').addEventListener('click' , function(){


  if(gamePlaying){//1.Add current score to the player Glober Score.
    scores[activePlayer] +=roundScore;




    //2.Update the User Interface(UI)
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];


    //3.Check if player won the game
    if(scores[activePlayer] >= 100){
      //change the winning player name
      document.querySelector('#name--' + activePlayer).textContent = 'Winner!';

      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player--' + activePlayer).classList.add('player--winner');

      document.querySelector('.player--' + activePlayer).classList.remove('player--active');
      gamePlaying = false;
    } else{
      //4.Change the Player
      nextPlayerChange();
    }

      }


});

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
  document.querySelector('.dice').style.display = 'none';
}


function initialStage(){

scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
document.querySelector('.dice').style.display = 'none';//initialy hide  dice image.


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




};
