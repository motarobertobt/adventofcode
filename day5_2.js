import fs from "fs"

const input1 = fs.readFileSync("./inputday5_1.txt").toString().split("\r\n")
const input2 = fs.readFileSync("./inputday5_2.txt").toString().split("\r\n")
// const input1 = fs.readFileSync("./inputtest.txt").toString().split("\r\n")
// const input2 = fs.readFileSync("./inputtest2.txt").toString().split("\r\n")


const mountCargo = () => {
    let cargoSetup = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: []
    }


    const x = []
    input1.forEach(element => {
        let aux = 0
        for (let i = 0; i < element.length; i++) {
            if (aux <= element.length) {
                x.push(element.slice(aux, aux + 4))
                aux += 4
            } else if (aux >= element.length) {
                aux = 0
                break
            }
        }
    });

    //console.log("x", x)

    let aux = 1    
    x.forEach((el) => {
        //console.log("aux", aux)
        el.toString().match(/[[][A-Z]]/gm) && cargoSetup[aux]?.push(el.trim())
        if (aux == 9) aux = 0
        aux++
    })

    
    for (let i = 1; i <= 9; i++) {
        cargoSetup[i].reverse()
    }

    console.log("x", cargoSetup)

    
    for (let i = 0; i < input2.length; i++) {
        const [move, from, to] = input2[i].replace("move ", "").replace(" from", "").replace(" to", "").split(" ")
        console.log("i", i)
        if (move == 1) {
            const cargo = cargoSetup[from].pop()
            cargoSetup[to].push(cargo)
        } else if (move > 1) {
            const cargo = cargoSetup[from].splice(cargoSetup[from].length - move, cargoSetup[from].length)
            cargoSetup[to] = cargoSetup[to].concat(cargo)          
        }
    }
    

    console.log("cargoSetup2", cargoSetup)

}

mountCargo()

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2