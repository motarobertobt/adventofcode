import fs from "fs"

const alphabetUpper = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x));
const alphabetLower = Array.from(Array(26)).map((e, i) => i + 97).map((x) => String.fromCharCode(x));

const test = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw"
]

const countLetter = (arr) => {
    return arr[0].split('').find(f => arr[1].includes(f) && arr[2].includes(f))
}


const calc = () => {
    let score = 0
    const found = []
    let aux = 0
    const input = fs.readFileSync("./inputday3.txt").toString().split("\r\n")    
    for (let i = 0; i < input.length; i++) {
        if(input.slice(aux, aux + 3).length == 0) break
        found.push(countLetter(input.slice(aux, aux + 3)))        
        aux += 3
    }


    found.forEach(el => {
        if(el.toString().charCodeAt() >= 65 && el.toString().charCodeAt() <= 90) score += Number(alphabetUpper.indexOf(el)) + Number(1) + Number(26)
        if(el.toString().charCodeAt() >= 97 && el.toString().charCodeAt() <= 122) score += Number(alphabetLower.indexOf(el)) + Number(1) 
    })

    console.log("SCORE", score)

}
// vJrwpWtwJgWr
// vJrwpWtwJgWr expected
// hcsFMMfFFhFp
// hcsFMMfFFhFp expected


calc()