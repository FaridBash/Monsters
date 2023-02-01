
import { Monster} from "./monster.js";
import{players} from "./player.js";

let monsterTurn=false;

//===== universal==variables and functions

export function randomNumbGenerator(){
    return Math.floor(Math.random()*20)+1;
}
  
// universal functions end
const monsterHp=document.getElementsByClassName('monster-hp');
monsterHp[0].innerText+=`: ${Monster.monsterStrength}`;
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


function attacker(){
    if (Monster.monsterDexterity>players.dexterity) monsterTurn=true;
    else if(Monster.monsterDexterity<players.dexterity) monsterTurn=false;
}

attackBtn[0].addEventListener('click', e=>{

console.log("monster attack: "+monsterTurn);
console.log("monster dex: "+Monster.monsterDexterity);
console.log("player dex: "+players.dexterity);


});

