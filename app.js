
import { Monster} from "./monster.js";
import{players} from "./player.js";


//===== universal==variables and functions
let monsterTurn=false;

export function randomNumbGenerator(){
    return Math.floor(Math.random()*20)+1;
}


function attacker(){
    if (Monster.dexterity>players.dexterity) monsterTurn=true;
    else if(Monster.dexterity<players.dexterity) monsterTurn=false;
}

attacker();
if(monsterTurn===false) alert("player is attacking");
else alert("monster is attacking");
  
// universal functions end
const monsterHp=document.getElementsByClassName('monster-hp');
monsterHp[0].innerText+=`: ${Monster.strength}`;
const playerHp=document.getElementsByClassName('player-hp');
playerHp[0].innerText+=`: ${players.strength}`;
const playerName=document.getElementsByClassName('player-name');
playerName[0].innerText=`${players.name}`;
const playerPotion=document.getElementsByClassName('potion-num');
playerPotion[0].innerText=`${players.potion}`;
const playerDex=document.getElementsByClassName('dex');
playerDex[0].innerText=`${players.dexterity}`;

const attackBtn=document.getElementsByClassName('attack');
const runAwayBtn=document.getElementsByClassName('run');
const drinkPotionBtn=document.getElementsByClassName('drink');


attackBtn[0].addEventListener('click', e=>{

console.log("monster attack: "+monsterTurn);
console.log("monster dex: "+Monster.dexterity);
console.log("player dex: "+players.dexterity);


});

