
class Pet {
   constructor(name,age){
    this.age = age;
    this.name = name
   }

   eat(){
    return `${this.name} is eating`
   }
}

class Cat extends Pet{

    meow(){
        return `MEOW!!!`
    }
}
class Dog extends Pet {
    woff(){
        return `WOFF!!!`
    }
}

const doora = new Cat('doora',3)
const tiger = new Dog('tiger',12)
console.log(doora.eat())
console.log(tiger.eat())

