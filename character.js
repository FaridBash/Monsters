





const createBtn=document.getElementById('create');
const playerNameInput=document.getElementById('player-name');
const playerDefInput=document.getElementById('def');
const playerStrengthInput=document.getElementById('str');
const playerDexInput=document.getElementById('dex');



const PlayersArr=[];
export class PlayersClass{
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
        this.currentXp=currentXp;
    }
}

const testPlayer=new PlayersClass("test1", "player", 11, 11, randomNumbGenerator(), 0,10,1,100,0);
PlayersArr.push(testPlayer);


export function createNewPlayer(pName, pStrength, pDef, pDex){
   return p=new PlayersClass(pName, 'player', pStrength,
   pDef, pDex, 0, 20, 1, 100, 0);
}


console.log(PlayersArr[0]);



createBtn.addEventListener('click', e=>{
    const pName=playerNameInput.value;
    const pStrength=Number(playerStrengthInput.value);
    const pDef=Number(playerDefInput.value);
    const pDex=Number(playerDexInput.value)+randomNumbGenerator();

    localStorage.setItem('pName',pName);
    localStorage.setItem('pStrength',pStrength);
    localStorage.setItem('pDef',pDef);
    localStorage.setItem('pDex',pDex);

    PlayersArr.push(createNewPlayer(pName, Number(pStrength), Number(pDef), Number(pDex)));


});


console.log(PlayersArr);