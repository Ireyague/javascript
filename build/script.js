"use strict";
const player0El=document.querySelector(".player--0"),
player1El=document.querySelector(".player--1"),
score0El=document.querySelector("#score--0"),
score1El=document.getElementById("score--1"),
current0El=document.getElementById("current--0"),
current1El=document.getElementById("current--1"),
diceEl=document.querySelector(".dice"),
btnNew=document.querySelector(".btn--new"),
btnRoll=document.querySelector(".btn--roll"),
btnHold=document.querySelector(".btn--hold");
let scores,currentScore,activePlayer,playing;
const init=function(){
    scores=[0,0],currentScore=0,
    activePlayer=0,
    playing=!0,
    score0El.textContent=0,
    score1El.textContent=0,
    current0El.textContent=0,
    current1El.textContent=0,
    diceEl.classList.add("hidden"),
    player0El.classList.remove("player--winner"),
    player1El.classList.remove("player--winner"),
    player0El.classList.add("player--active"),
    player1El.classList.remove("player--active")

},
switchPlayer=(init(),
function(){
    document.getElementById("current--"+activePlayer).textContent=0,currentScore=0,activePlayer=0===activePlayer?1:0,
    player0El.classList.toggle("player--active"),
    player1El.classList.toggle("player--active")
});
btnRoll.addEventListener("click",function(){
    var e;
    playing&&(e=Math.trunc(6*Math.random())+1,diceEl.classList.remove("hidden"),
    diceEl.src=`dice-${e}.png`,
    1!==e?(currentScore+=e,
        document.getElementById("current--"+activePlayer).textContent=currentScore):switchPlayer())
    }),
    btnHold.addEventListener("click",function(){
        playing&&(scores[activePlayer]+=currentScore,document.getElementById("score--"+activePlayer).textContent=scores[activePlayer],
        100<=scores[activePlayer]?(playing=!1,diceEl.classList.add("hidden"),
        document.querySelector(".player--"+activePlayer).classList.add("player--winner"),
        document.querySelector(".player--"+activePlayer).classList.remove("player--active")):switchPlayer())
    }),
    btnNew.addEventListener("click",init);
