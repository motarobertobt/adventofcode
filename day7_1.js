import fs from "fs"

const input = fs.readFileSync("./inputday7.txt").toString().split("\r\n")

let systemDir = {
    "/": [
        { dir: true, parent: '/', name: '/', size: 0 }
    ]
}

let sizeOfDir = []

const listCommand = []

const moveInto = (where) => {    
    lastCommand({
        command: "cd",
        from: listCommand.slice(0).reverse().find(f => f.command == "cd")?.to || "/",
        to: where === ".." ? systemDir['/'].find(f => f.name === (listCommand.slice(0).reverse().find(f => f.command == "cd")?.to || "/")).parent : where
    })

}

const listDir = (line) => {
    lastCommand({ command: "ls" })
}

const addDir = (line) => {
    systemDir["/"].push({
        dir: true,
        parent: listCommand.slice(0).reverse().find(f => f.command == "cd")?.to || "/",
        name: line,
        size: 0
    })
}

const addData = (line) => {
    systemDir["/"].push({
        dir: false,
        parent: listCommand.slice(0).reverse().find(f => f.command == "cd")?.to || "/",
        name: line.split(" ")[1],
        size: Number(line.split(" ")[0])
    })

    systemDir["/"][systemDir["/"].indexOf(systemDir["/"].find(f => f.name == listCommand.slice(0).reverse().find(f => f.command == "cd")?.to))].size += Number(line.split(" ")[0])
}


const lastCommand = (cmd) => {    
    listCommand.push(cmd)
}

const decide = (line) => {

    if (line[0] === '$') {

        const command = line.split(" ")
        if (command[1].toString().trim() === 'cd') moveInto(command[2])
        if (command[1].toString().trim() === 'ls') listDir(line)
    } else if (line.includes('dir')) {
        addDir(line.split(" ")[1])
    } else {
        addData(line)
    }
}


const init = () => {
    input.forEach(el => decide(el))

    console.log("systemDir", JSON.stringify(systemDir))
    console.log("systemDir",
        systemDir["/"]
            .filter(f => !f.dir && f.size <= 100000)
            .reduce((acc, at, i, arr) => {
                return acc += at.size + at.size
            }, 0))
}




init()