let scoreHome=document.getElementById("scorehome");
let scoreAway=document.getElementById("scoreaway");
console.log(scoreAway);
console.log(scoreHome);
let sumhome=0;
function onehome(){
    sumhome+=1;
    scoreHome.textContent=sumhome;
}
function twohome()
{   sumhome+=2;
    scoreHome.textContent=sumhome;
}
function threehome(){
    sumhome+=3;
    scoreHome.textContent=sumhome;
}
let sumaway=0;
function oneaway(){
    sumaway+=1;
    scoreAway.textContent=sumaway;
}
function twoaway(){
    sumaway+=2;
    scoreAway.textContent=sumaway;
}
function threeaway(){
    sumaway+=3;
    scoreAway.textContent=sumaway;
}
function reset(){
    sumaway=0;
    sumhome=0;
    scoreAway.textContent=0;
    scoreHome.textContent=0;
}