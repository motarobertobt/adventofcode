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

const calc = () => {
    let score = 0
    //const input = fs.readFileSync("./testday.txt").toString().split("\r\n")
    const input = fs.readFileSync("./inputday3.txt").toString().split("\r\n")

    let i = 0
    input.forEach(el => {

    })

    joined.forEach(el => {

    })



    // found.forEach(el => {
    //     if(el.toString().charCodeAt() >= 65 && el.toString().charCodeAt() <= 90) score += Number(alphabetUpper.indexOf(el)) + Number(1) + Number(26)
    //     if(el.toString().charCodeAt() >= 97 && el.toString().charCodeAt() <= 122) score += Number(alphabetLower.indexOf(el)) + Number(1) 
    // })

    console.log("SCORE", score)

}
// vJrwpWtwJgWr
// vJrwpWtwJgWr expected
// hcsFMMfFFhFp
// hcsFMMfFFhFp expected


calc()