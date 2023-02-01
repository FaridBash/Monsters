import { randomNumbGenerator } from "./app.js";
export const Monster={
    name: "myMosnter",
    strength: 25,
    defence: 29,
    dexterity: 2+randomNumbGenerator(),
    gold: 0,
    potion:0,
    level: 100,
    healthPoints: 100,
    currentXp: 100,
}


