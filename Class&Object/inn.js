class Animal{
    constructor(legs,eye,hair,tail){
        this.legs = legs,
        this.eye = eye,
        this.hair = hair,
        this.tail = tail
    }
    displayanimal(){
        console.log(`legs = ${this.legs} eyes = ${this.eye} hairColor=${this.hair} isTail = ${this.tail}`)
    }
}

class Dog extends Animal{
    constructor(legs,eye,hair,tail,sound){
        super(legs,eye,hair,tail)
        this.sound = sound
    }
}

class Cat extends Animal{
    constructor(legs,eye,hair,tail,sound){
        super(legs,eye,hair,tail)
        this.sound = sound
    }
}

let data = new Dog(4,2,"Brown",true,"Barking....")
data.displayanimal()