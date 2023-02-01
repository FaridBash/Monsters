
export const Monster={
    monsterName: "myMosnter",
    monsterStrength: 100,
    monsterDefence: 100,
    monsterlevel: 100,
    monsterHealthPoints: 100,
    monsterXpRewards: 100,
    monsterDexterity: monsterDexterity(),
    monsterGold: 100,
}


function monsterDexterity(){
    return Math.floor(Math.random()*20)+1;
}

