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

const pName=localStorage.getItem('pName');
const pStrength=localStorage.getItem('pStrength');
const pDef=localStorage.getItem('pDef');
const pDex=localStorage.getItem('pDex');


// createBtn.style.backgroundColor='red';





// export Qselector.addEventListerner("click",function attack(player){
//    let result=player.strength+=randomNumbGenerator();

// })

