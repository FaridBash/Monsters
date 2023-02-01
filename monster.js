import { randomNumbGenerator } from "./app.js";
// export const Monster={
//     name: "myMosnter",
//     type:"monster",
//     strength: 25,
//     defence: 29,
//     dexterity: randomNumbGenerator(),
//     gold: 10,
//     potion:0,
//     level: 1,
//     healthPoints: 100,
//     rewardXp: 30,
// }

export const MonsArr=[];
class Monsters{
    constructor(name, type, strength, defence, dexterity, gold, potion, level, healthPoints, rewardXp){
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

const MonsterFromClass=new Monsters('EyeMonster', 'monster', 25, 29, randomNumbGenerator(), 10, 1, 100, 30 );
MonsArr.push(MonsterFromClass);
const NoseMonster=new Monsters('NoseMonster', 'monster', 25, 29, randomNumbGenerator(), 20, 2, 100, 40 );
MonsArr.push(NoseMonster);
const HandMonster=new Monsters('HandMonster', 'monster', 25, 29, randomNumbGenerator(), 30, 3, 100, 50 );
MonsArr.push(HandMonster);
const LegMonster=new Monsters('LegMonster', 'monster', 25, 29, randomNumbGenerator(), 40, 4, 100, 60 );
MonsArr.push(LegMonster);
const DogMonster=new Monsters('DogMonster', 'monster', 25, 29, randomNumbGenerator(), 50, 5, 100, 70 );
MonsArr.push(DogMonster);
const SnakeMonster=new Monsters('SnakeMonster', 'monster', 25, 29, randomNumbGenerator(), 60, 6, 100, 80);
MonsArr.push(SnakeMonster);
const EMonster=new Monsters('EMonster', 'monster', 25, 29, randomNumbGenerator(), 70, 7, 100, 90 );
MonsArr.push(EMonster);
const SasMonster=new Monsters('SasMonster', 'monster', 25, 29, randomNumbGenerator(), 80, 8, 100, 100 );
MonsArr.push(SasMonster);
const JsMonster=new Monsters('JsMonster', 'monster', 25, 29, randomNumbGenerator(), 90, 9, 100, 110 );
MonsArr.push(JsMonster);
const JavaMonster=new Monsters('JsMonster', 'monster', 25, 29, randomNumbGenerator(), 100, 10, 100, 110 );
MonsArr.push(JavaMonster);


export function getMonster(){
    return MonsArr[randomNumbGenerator()/2]
}

