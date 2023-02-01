
import { Monster} from "./monster.js";
import{players} from "./player.js";

const monsterHp=document.getElementsByClassName('monster-hp');
const playerHp=document.getElementsByClassName('player-hp');
const playerName=document.getElementsByClassName('player-name');
const playerPotion=document.getElementsByClassName('potion-num');
const playerDex=document.getElementsByClassName('dex');
//Location names Array
let gameArenas=['krustyKrab','forest','castle','waterfall','appleseeds-bootcamp'];
//arenas-pictures <a tags>(when pressed the compatible monster cards show on the "contracts" page)
const krustyKrab=document.querySelector('#krustyKrab');
const forest=document.querySelector('#forest');
const castle=document.querySelector('#castle');
const waterfall=document.querySelector('#waterfall');
const appleseedsBootcamp=document.querySelector('#appleseeds-bootcamp');
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
    const num=((randomNumbGenerator()+attackerProfile().strength)*attackerProfile().level)-attackerProfile().defence;

    console.log(num);
    if(num>0){
        return num;
    }

    else return 0;
}

function attack(){
if(damageCalc()>0){
      victimProfile().healthPoints-=damageCalc();
   }
   updateHealth();
   winner();
}

function winner(){
    if(victimProfile().healthPoints<=0 && attackerProfile().type==="player"){
        alert(`${attackerProfile.name} aka YOU have won the game`);
        attackerProfile().gold+=victimProfile().gold;
        attackerProfile().currentXP+=victimProfile().rewardXp;
       console.log(players);
    }
}





//if i press on a ,addeventlistener when i press on a map picture to show the specific
// monsters for that map:
for(let x=0;x<gameArenas.length;x++){
    if (gameArenas[x]==="krustyKrab"){
        return 
    }
}
krustyKrab.addEventListener('click',function(){
    
})
//Match each location with random number of monsters between 5-10.
function random1_5(){
   return Math.floor(Math.random()*5)+1;
}


// function matchMonsterArena(){
//     for(let i=0;i<gameArenas.length;i++){
        
//     }
//     #monsterImg.setAttribute("src",`./assets/monster-${random1_5()}`); 
//     #arenaImg.setAttribute("src",`./assets/arena-${random1_5()}`);
// }