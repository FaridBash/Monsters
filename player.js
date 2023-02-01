import { randomNumbGenerator } from "./app.js";
export const players=
   {
      name:"Fearless renegade",
      strength:22,
      defence:30,
      dexterity:6+randomNumbGenerator(),//random
      gold:0,
      potion:0,
      level:1,
      healthPoints:100,
      currentXP:0
   }



// export Qselector.addEventListerner("click",function attack(player){
//    let result=player.strength+=randomNumbGenerator();

// })

