import Animal from "./Animal";

class Cat extends Animal{
    constructor(name,breed,age,color){
        super(name);
        this.breed = breed;
        this.age = age;
        this.color = color;

    }
    sound=()=>{
        console.log("The cat meows")
    }
    displayInfo=()=>{
        console.log(`Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}`);

    }
    eat=()=>{
        console.log(`${this.name} the cat is eating`)

    }
    sleep=()=>{
        console.log(`${this.name} the cat is sleeping`)

    }
    scratch=()=>{
        console.log(`${this.name}the cat is scratching`)

    }
    groom=()=>{
        console.log(`${this.name} the cat is grooming`)

    }
}
export default Cat;