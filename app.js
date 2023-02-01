
import { Monster} from "./monster.js";
import{players} from "./player.js";

let monsterTurn=false;

let attackerProfile=monsterTurn===false?players:Monster;
let victimProfile=monsterTurn===true?players:Monster;
const attackBtn=document.getElementsByClassName('attack');

function whoIsAttacking(){
    if (Monster.monsterDexterity>players.dexterity) monsterTurn=true;
    else if(Monster.monsterDexterity<players.dexterity) monsterTurn=false;
}

attackBtn[0].addEventListener('click', e=>{
    alert(Monster.monsterDexterity);
    alert(players.dexterity);
    console.log('atack');
});




















function damageCalc(){
   return((randomNumbGenerator()+attackerProfile.strength)*attackerProfile.level)-attackerProfile.defence;
}

function attack(){
   if(damageCalc>0){
      return victimProfile.healthPoints-=damageCalc();
   }
}

function winner(){
   if (victimProfile.healthPoints<=0){

   }
   //else switch turns..
}


//Location names Array
let gameArena=['desert','castle','Fortress','waterfall','atlantis']
//Match each location with random number of monsters between 5-10.
function random5_10(){
   return Math.floor(Math.random()*10)+5;
}