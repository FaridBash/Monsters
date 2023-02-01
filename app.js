
import { Monster} from "./monster.js";
import{players} from "./player.js";

const monsterHp=document.getElementsByClassName('monster-hp');
const playerHp=document.getElementsByClassName('player-hp');
const playerName=document.getElementsByClassName('player-name');
const playerPotion=document.getElementsByClassName('potion-num');
const playerDex=document.getElementsByClassName('dex');


//===== universal==variables and functions
let monsterTurn=false;

let victimProfile=()=>{
    return monsterTurn===true?players:Monster;
}
let attackerProfile=()=>{
    return monsterTurn===false?players:Monster;
}


export function randomNumbGenerator(){
    return Math.floor(Math.random()*20)+1;
}


function attacker(){
    if (Monster.dexterity>players.dexterity) monsterTurn=true;
    else if(Monster.dexterity<players.dexterity) monsterTurn=false;
}

attacker();
if(monsterTurn===false) console.log("player is attacking");
else console.log("monster is attacking");
  
// universal functions end
monsterHp[0].innerText+=`: ${Monster.healthPoints}`;
playerHp[0].innerText+=`: ${players.healthPoints}`;
playerName[0].innerText=`${players.name}`;
playerPotion[0].innerText=`${players.potion}`;
playerDex[0].innerText=`${players.dexterity}`;

function updateHealth(){
    if(victimProfile()===players){
        document.getElementsByClassName('player-hp')[0].innerText=`Player Hp: ${victimProfile().healthPoints}`;
    }
    if(victimProfile()===Monster){
        document.getElementsByClassName('monster-hp')[0].innerText=`Monster Hp: ${victimProfile().healthPoints}`;
    }
}
const attackBtn=document.getElementsByClassName('attack');
const runAwayBtn=document.getElementsByClassName('run');
const drinkPotionBtn=document.getElementsByClassName('drink');

// let attackerProfile=monsterTurn===false?players:Monster;
// let victimProfile=monsterTurn===true?players:Monster;


attackBtn[0].addEventListener('click', e=>{
    attack();
    // alert(Monster.monsterDexterity);
    // alert(players.dexterity);
    console.log('atack');

});


function damageCalc(){
   return((randomNumbGenerator()+attackerProfile().strength)*attackerProfile().level)-attackerProfile().defence;
}

function attack(){
    console.log(damageCalc());
   if(damageCalc()>0){
      return victimProfile().healthPoints-=damageCalc();
   }
   updateHealth();
}

function winner(){
   if (victimProfile().healthPoints<=0){

   }
   //else switch turns..
}


//Location names Array
let gameArena=['desert','castle','Fortress','waterfall','atlantis']
//Match each location with random number of monsters between 5-10.
function random5_10(){
   return Math.floor(Math.random()*10)+5;
}