
import { Monster} from "./monster.js";
import{players} from "./player.js";

let monsterTurn=false;


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

