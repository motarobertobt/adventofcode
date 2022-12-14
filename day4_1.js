import fs from "fs"

const input = fs.readFileSync("./inputday4.txt").toString().split("\r\n")
const test = [
    "2-4,6-8",
    "2-3,4-5",
    "5-7,7-9",
    "2-8,3-7",
    "6-6,4-6",
    "2-6,4-8",
    '14-28,8-15',
    '2-99,2-2'
]
const calc = () => {
    const arr = []
    input.forEach(el => {
        const [pairOne, pairTwo] = el.split(",")
        if (Number(pairOne.split("-")[0]) <= Number(pairTwo.split("-")[0]) && Number(pairOne.split("-")[1]) >= Number(pairTwo.split("-")[1])) {         
            arr.push(el)
        } else if (Number(pairTwo.split("-")[0]) <= Number(pairOne.split("-")[0]) && Number(pairTwo.split("-")[1] >= Number(pairOne.split("-")[1]))) {
            arr.push(el)
        }
    })
    
    console.log("XABLAU", arr.length)
}

calc()