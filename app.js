
import {MonsArr} from "./monster.js";
import{players } from "./player.js";


// monster & player features



const monsterHp=document.getElementsByClassName('monster-hp');
const monsterName=document.getElementsByClassName('monster-name');
const monsterDefence=document.getElementsByClassName('monster-def');
const monsterDex=document.getElementsByClassName('monster-dex');
const monsterGold=document.getElementsByClassName('monster-gold');
const monsterLvl=document.getElementsByClassName('monster-lvl');
const monsterXp=document.getElementsByClassName('monster-XP');


const playerHp=document.getElementsByClassName('player-hp');
const playerName=document.getElementsByClassName('player-name');
const playerDex=document.getElementsByClassName('dex');

//Location names Array
let gameArenas=['krustyKrab','forest','castle','waterfall','appleseeds-bootcamp'];



// monster & player features
const playerDef=document.getElementsByClassName('player-def');
const playerGold=document.getElementsByClassName('player-gold');
const playerLevel=document.getElementsByClassName('player-lvl');
const playerXp=document.getElementsByClassName('player-XP');
const playerPotion=document.getElementsByClassName('potion-num');
const playerStrength=document.getElementsByClassName('player-str');



//===== universal==variables and functions
let monsterTurn=false;
let whichMonster=0;
let victimProfile=()=>{
    return monsterTurn===true?players:MonsArr[0];
}
let attackerProfile=()=>{
    return monsterTurn===false?players:MonsArr[0];
}


export function randomNumbGenerator(){
    return Math.floor(Math.random()*20)+1;
}


function attacker(){
    if (MonsArr[0].dexterity>players.dexterity) monsterTurn=true;
    else if(MonsArr[0].dexterity<players.dexterity) monsterTurn=false;
    else if(MonsArr[0].dexterity===players.dexterity) attacker();

}

attacker();
if(monsterTurn===false) console.log("player is attacking");
else console.log("monster is attacking");
card1.innerHTML=`<li id="monster-2-name">${MonsArr[3].name}</li>`;
// universal functions end
monsterXp[0].innerText=` ${MonsArr[0].rewardXp}`;
monsterHp[0].innerText+=` ${MonsArr[0].healthPoints}`;
monsterName[0].innerText=`${MonsArr[0].name}`;
monsterDefence[0].innerText=` ${MonsArr[0].defence}`;
monsterDex[0].innerText=` ${MonsArr[0].dexterity}`;
monsterGold[0].innerText=` ${MonsArr[0].gold}`;
monsterLvl[0].innerText=` ${MonsArr[0].level}`;


playerHp[0].innerText+=` ${players.healthPoints}`;
playerName[0].innerText=`${players.name}`;
playerPotion[0].innerText=`${players.potion}`;
playerDex[0].innerText=`${players.dexterity}`;
playerGold[0].innerText=`${players.gold}`;
playerLevel[0].innerText=`${players.level}`;
playerXp[0].innerText=`${players.currentXP}`;
playerStrength[0].innerText=`${players.currentXP}`;
playerDef[0].innerText=`${players.defence}`;



function updateHealth(){
    if(victimProfile()===players){
        document.getElementsByClassName('player-hp')[0].innerText=`Player Hp: ${victimProfile().healthPoints}`;
    }
    if(victimProfile()===MonsArr[0]){
        document.getElementsByClassName('monster-hp')[0].innerText=`Monster Hp: ${victimProfile().healthPoints}`;
    }
}
const attackBtn=document.getElementsByClassName('attack');
const runAwayBtn=document.getElementsByClassName('run');
const drinkPotionBtn=document.getElementsByClassName('drink');

// let attackerProfile=monsterTurn===false?players:MonsArr[0];
// let victimProfile=monsterTurn===true?players:MonsArr[0];


attackBtn[0].addEventListener('click', e=>{
    attack();
    // alert(MonsArr[0].monsterDexterity);
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

       

        // const message=document.createElement("div");
        // message.style.width="200px";
        // message.style.height="50px";
        // message.style.backgroundColor="#fff";
        // message.style.position="absolute";
        // message.style.top="10%";
        // message.style.left="40%";
        // message.style.opacity='0.8';
        // message.style.zIndex='3';
        // const sent=document.createElement('p');
        // sent.innerText=`${attackerProfile().name} Won the Game`;
        // document.body.appendChild(message);
        // message.appendChild(sent);
        // setTimeout(message.style.display='none', 3000);


    }
}

function declareWinner(pl){
    
}








 //query selectors for the above monsters cards
const monsterName1=document.querySelector('#monster-1-name');
const monsterName2=document.querySelector('#monster-2-name');
const monsterFight1=document.querySelector('#monster-fight-1');
const monsterFight2=document.querySelector('#monster-fight-2');
///function when we press the choos button on each monster ,takes this monster as an opponent
monsterFight1.addEventListener("click",function(){
    for(let i=0;i<MonsArr.length;i++){
        if(MonsArr[i].name==monsterName1){
            whichMonster=i;
        }
    }
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

