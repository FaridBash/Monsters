import { randomNumbGenerator } from "./app.js";
export const Monster={
    name: "myMosnter",
    type:"monster",
    strength: 25,
    defence: 29,
    dexterity: 50+randomNumbGenerator(),
    gold: 10,
    potion:0,
    level: 1,
    healthPoints: 100,
    rewardXp: 30,
}


