
class Color {
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }

     hex(params) {
        
        return `${this.r}`
    }
}

const c1 = new Color('255','213','33')
console.log(c1.hex())