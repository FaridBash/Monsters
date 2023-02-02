
import{card1,card2} from "./contracts.js";
import { MonsArr } from "./monster.js";
//location-picures <a tags>(when pressed the compatible monster cards show on the "contracts" page)
 const krustyKrab=document.querySelector('#krusty-krab');
 const forest=document.querySelector('#forest');
 const castle=document.querySelector('#castle');
 const waterfall=document.querySelector('#waterfall');
const appleseedsBootcamp=document.querySelector('#bootcamp');
//if i press on a ,addeventlistener when i press on a map picture to show the specific
// monsters for that map:

krustyKrab.addEventListener('click',function(){
   card1.innerHTML=
   `<li id="monster-1-name">${MonsArr[0].name}</li>
   <li>${MonsArr[0].level}</li>
   <li>${MonsArr[0].healthPoints}</li>
   <li>${MonsArr[0].gold}</li>
   <li>${MonsArr[0].rewardXp}</li>`
   card2.innerHTML=
   `<li id="monster-2-name">${MonsArr[1].name}</li>
   <li>${MonsArr[1].level}</li>
   <li>${MonsArr[1].healthPoints}</li>
   <li>${MonsArr[1].gold}</li>
   <li>${MonsArr[1].rewardXp}</li>`
})


forest.addEventListener('click',function(){
  card1.innerHTML=
 `<li id="monster-1-name">${MonsArr[2].name}</li>
  <li>${MonsArr[2].level}</li>
  <li>${MonsArr[2].healthPoints}</li>
  <li>${MonsArr[2].gold}</li>
  <li>${MonsArr[2].rewardXp}</li>`
  card2.innerHTML=
 `<li id="monster-2-name">${MonsArr[3].name}</li>
  <li>${MonsArr[3].level}</li>
  <li>${MonsArr[3].healthPoints}</li>
  <li>${MonsArr[3].gold}</li>
  <li>${MonsArr[3].rewardXp}</li>`
})
castle.addEventListener('click',function(){
  card1.innerHTML=
 `<li id="monster-1-name">${MonsArr[4].name}</li>
  <li>${MonsArr[4].level}</li>
  <li>${MonsArr[4].healthPoints}</li>
  <li>${MonsArr[4].gold}</li>
  <li>${MonsArr[4].rewardXp}</li>`
  card2.innerHTML=
  `<li id="monster-2-name">${MonsArr[5].name}</li>
  <li>${MonsArr[5].level}</li>
  <li>${MonsArr[5].healthPoints}</li>
  <li>${MonsArr[5].gold}</li>
  <li>${MonsArr[5].rewardXp}</li>`
})
waterfall.addEventListener('click',function(){
  card1.innerHTML=
  `<li id="monster-1-name">${MonsArr[6].name}</li>
  <li>${MonsArr[6].level}</li>
  <li>${MonsArr[6].healthPoints}</li>
  <li>${MonsArr[6].gold}</li>
  <li>${MonsArr[6].rewardXp}</li>`
  card2.innerHTML=
  `<li id="monster-2-name">${MonsArr[7].name}</li>
  <li>${MonsArr[7].level}</li>
  <li>${MonsArr[7].healthPoints}</li>
  <li>${MonsArr[7].gold}</li>
  <li>${MonsArr[7].rewardXp}</li>`
})
appleseedsBootcamp.addEventListener('click',function(){
  card1.innerHTML=
  `<li id="monster-1-name">${MonsArr[8].name}</li>
  <li>${MonsArr[8].level}</li>
  <li>${MonsArr[8].healthPoints}</li>
  <li>${MonsArr[8].gold}</li>
  <li>${MonsArr[8].rewardXp}</li>`
  card2.innerHTML=
  `<li id="monster-2-name">${MonsArr[9].name}</li>
  <li>${MonsArr[9].level}</li>
  <li>${MonsArr[9].healthPoints}</li>
  <li>${MonsArr[9].gold}</li>
  <li>${MonsArr[9].rewardXp}</li>`
})

