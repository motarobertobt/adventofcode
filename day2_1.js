import fs from "fs"
const input = fs.readFileSync("./input.txt")

const points = {
    a: 1,
    b: 2,
    c: 3,
    x: 1,
    y: 2,
    z: 3
}

const duel = {
    "A X": "draw",
    "A Y": "win",
    "A Z": "loss",
    "B X": "loss",
    "B Y": "draw",
    "B Z": "win",
    "C X": "win",
    "C Y": "loss",
    "C Z": "draw"
}

const result = {
    win: 6,
    draw: 3,
    loss: 0
}

const test = [
    "A Y",
    "B X",
    "C Z"
]

const toDo = {
    X: "loss",
    Y: "draw",
    Z: "win"
}


const calc = () => {

    let score = 0
    const input = fs.readFileSync("./input.txt").toString().split("\r\n")

    input.forEach(el => {
        score += Number(result[duel[el]])
        const duelKeys = Object.keys(duel)
        const match = duelKeys[duelKeys.indexOf(el)]                
        score += Number(points[(match.split(" ")[1].toString().toLowerCase())])
    });
    console.log("SCORE", score)
}

calc()
