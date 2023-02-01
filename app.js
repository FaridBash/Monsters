
import { Monster} from "./monster.js";
import{players} from "./player.js";




const attackBtn=document.getElementsByClassName('attack');


attackBtn[0].addEventListener('click', e=>{
    alert(Monster.monsterDexterity);
    console.log('atack');

});

