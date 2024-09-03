


class Students{
    constructor(name,GRID,subject,math,english){
        this.name = name,
        this.GRID = GRID,
        this.subject = subject
        this.math = math,
        this.english = english
    }
    getGRID(){
        console.log(`${this.name} GRID is ${this.GRID}`)
    }
    getResult(){
        console.log(`English = ${this.english} Math = ${this.math}`)
        let total = this.english + this.math
        let percentage = (total/100) * 100
        console.log(`percentage = ${percentage}`)
    }
}

let S1 = new Students("ashirwad",5510,"ai",25,15)
let S2 = new Students("Dhol",420,"accounting")
S1.getGRID()
S1.getResult()