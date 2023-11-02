
class Pet {
   constructor(name,age){
    this.age = age;
    this.name = name
   }

   eat(){
    return `${this.name} is eating`
   }
}
// super is reference of extends class  ex : Pet class


class Cat extends Pet{
    constructor(name,age,liveleft=9){
        super(name,age)
        this.liveleft = liveleft
    }
    meow(){
        return `MEOW!!!`
    }
    details(){
        return `${this.name} has liveleft ${this.liveleft}`
    }
}
class Dog extends Pet {
    woff(){
        return `WOFF!!!`
    }
}

const doora = new Cat('doora',3)
const tiger = new Dog('tiger',12)
console.log(doora.details())
console.log(tiger.eat())

