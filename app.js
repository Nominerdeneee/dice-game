

//togloom duussan esehiig hadgalah toloviin huvisagch
var isNewGame;
// tolgoomiin buh gazar ashiglagdah global obektuudiig zalie
var  activePlayer;
var scores;
var roundScore;

// shoonii zurgiig uzuuleh elementiig domoos haij olood end hadgalya
var diceDom =document.querySelector(".dice");
// togloomiin ehnii code
initGame();
function initGame(){
isNewGame = true;
    //toglogchiin eeljiig hadgalah huvisagch, 1r toglogch 0, 2r toglogch 1 gj temdedglie
activePlayer = 0;
//toglogchdiin onoog hadagah huvisagch
 scores = [0, 0];
//eeljiin onoog hadgalah huvisagch
 roundScore = 0;
//shoonii ali talaaraa buusniig hadgalah huvisagch hregtei, 1-6 gesen utgiig sanamsarguigeer uusgene.



// dom element haij olno
document.getElementById('score-0').textContent= "0";
document.getElementById('score-1').textContent= "0";

document.getElementById('current-0').textContent= "0";
document.getElementById('current-1').textContent= "0";

//toglogchdiin neriig butsaaj gargah
document.getElementById("name-0").textContent = "Player 1"
document.getElementById("name-1").textContent = "Player 2"

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner")

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");
diceDom.style.display = "none";
};




// roll dice tovchiig dom-s avna
//shoog shideh event listener

document.querySelector(".btn-roll").addEventListener("click",function(){
    if(isNewGame) {
    var diceNumber = Math.floor(Math.random()* 6)+1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    //buusan too ni 1ees ylgaatai bol idevhitei toglogchiin eeljiin onoog nemegduulne
    if (diceNumber !== 1) {
        roundScore += diceNumber;
        document.getElementById("current-"+ activePlayer).textContent = roundScore

} else{
    
   switchToNextPlayer();
    
}
    }
    else {
        alert("Please start a new game!");
    }

});

//hold tovchnii event listener

document.querySelector(".btn-hold").addEventListener("click",function(){
//ug toglogchiin tsugluulsan onoog global onoon deer nemne
if(isNewGame){
scores[activePlayer] = scores[activePlayer]+ roundScore;
document.getElementById("score-"+ activePlayer).textContent = scores[activePlayer];
//ug toglogchiin hojson esehiig olno(100aas ih eseh)
if (scores[activePlayer] >= 10){
    isNewGame = false;
    document.getElementById("name-"+ activePlayer).textContent = "WINNER!!";
    document.querySelector(".player-" + activePlayer +"-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer +"-panel").classList.remove("active");
} else{
    switchToNextPlayer();
} 
}else {
    alert("Game over. Start New Game!")
}}
);


function switchToNextPlayer(){
    
    roundScore = 0;
    document.getElementById("current-"+ activePlayer).textContent = 0;
    activePlayer === 0 ?(activePlayer = 1) : (activePlayer = 0);
    //ulaan tsegiig shiljuuleh kod
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
    //shoog tur alga blgone
    diceDom.style.display = "none";
}

// shine togloom ehluuleh tovchnii eventlistener

document.querySelector(".btn-new").addEventListener("click",initGame);

