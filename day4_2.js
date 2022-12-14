import fs from "fs"

const input = fs.readFileSync("./inputday4.txt").toString().split("\r\n")
const test = [
    "2-4,6-8",
    "2-3,4-5",
    "5-7,7-9",
    "2-8,3-7",
    "6-6,4-6",
    "2-6,4-8",
]
const calc = () => {
    const arr = []
    input.forEach(el => {
        const [elfOne, elfTwo] = el.split(",")
        const [section1, section2] = elfOne.split("-")
        const [section3, section4] = elfTwo.split("-")
 
        if(Number(section1) <= Number(section4) &&  (Number(section2) >= Number(section3) )){
            arr.push(el)
        }
    })
    
    console.log("XABLAU", arr.length)
}

calc()