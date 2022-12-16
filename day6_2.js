import fs from "fs"

const input = fs.readFileSync("./inputday6.txt").toString()


const search = () => {
    let aux = 0
    let arr = []
    for (let i = 0; i < input.length; i++) {
        
        console.log("ARR", arr)
        if (arr.length === 14) {
            let nArr = [...new Set(arr)]                 
            if(nArr.length === 14){
                console.log("1", nArr)
                console.log("2", aux)
                break;
            }else{
                arr.shift()
            }
        }        
        arr.push(input[i])
        aux++

    }
}

search()