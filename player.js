 export let players=[
   {
      name:"Fearless renegade",
      strength:20,
      defence:30,
      dexterity:3+dexterityGenerator(),//random
      goldAmount:5,
      potion:0,
      level:1,
      healthPoints:100,
      currentXP:0
   }
];

function dexterityGenerator(){
  return Math.floor(Math.random()*20)+1;
}

