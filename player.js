
export const players=

   {
      name:"Fearless renegade",
      strength:20,
      defence:30,
      dexterity:3+randomNumbGenerator(),//random
      goldAmount:5,
      potion:0,
      level:1,
      healthPoints:100,
      currentXP:0
   }


function randomNumbGenerator(){
  return Math.floor(Math.random()*20)+1;
}

// export Qselector.addEventListerner("click",function attack(player){
//    let result=player.strength+=randomNumbGenerator();

// })

