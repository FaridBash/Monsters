import { randomNumbGenerator } from "./app.js";
export const players=
   {
      name:"Fearless renegade",
      type:"player",
      strength:22,
      defence:30,
      dexterity:randomNumbGenerator(),//random
      gold:0,
      potion:0,
      level:1,
      healthPoints:100,
      currentXP:0
   }



export const PlayersArr=[];
class PlayersClass{
    constructor(name, type, strength, defence, dexterity, gold, potion, level, healthPoints, currentXp){
        this.name=name;
        this.type=type;
        this.strength=strength;
        this.defence=defence;
        this.dexterity=dexterity;
        this.gold=gold;
        this.potion=potion;
        this.level=level;
        this.healthPoints=healthPoints;
        this.rewardXp=rewardXp;
    }
}


const playerName=document.getElementById('player-name');
const playerDef=document.getElementById('player-def');
const playerStrength=document.getElementById('player-strength');
const startBtn=document.getElementById('start-btn');

startBtn.addEventListener('click', e=>{

   const newPlayer=new PlayersClass(playerName.innerText, 'player', Number(playerStrength.innerText),
   Number(playerDef.innerText), randomNumbGenerator(), 0, 20, 1, 100, 0);
   PlayersArr.push(newPlayer);

});


// export Qselector.addEventListerner("click",function attack(player){
//    let result=player.strength+=randomNumbGenerator();

// })

