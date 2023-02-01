import { randomNumbGenerator } from "./app.js";
export const players=
   {
      name:"Fearless renegade",
      strength:20,
      defence:30,
      dexterity:randomNumbGenerator(),//random
      goldAmount:5,
      potion:0,
      level:1,
      healthPoints:100,
      currentXP:0
   }



// export Qselector.addEventListerner("click",function attack(player){
//    let result=player.strength+=randomNumbGenerator();

// })

