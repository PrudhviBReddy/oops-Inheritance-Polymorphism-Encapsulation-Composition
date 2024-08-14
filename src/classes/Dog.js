import { Children } from "react";
import Animal from "./Animal";

class Dog extends Animal{
    constructor(name,breed,age,color){
        super(name);
        this.breed = breed;
        this.age = age;
        this.color = color;

    }

    sound=()=>{
        console.log("The dog barks");
    }
    displayInfo=()=>{
        console.log(`Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}`);

    }
    eat=()=>{
        console.log(`${this.name} the dog is eating`);
    }
    sleep=()=>{
        console.log(`${this.name} the dog is sleeping`)
    }
    play=()=>{
        console.log(`${this.name} the dog is playing`)
    }
    vaccinate=()=>{
        console.log(`${this.name}the dog is vaccinated`)
    }


    calResult = ()=>{
        console.log("No Parameters")
    }
    calResult = (a)=>{
        console.log("One Parameters")
    }
    calResult = (a,b)=>{
        console.log("Two Parameters")
    }
    calResult = (a,b,c)=>{
        console.log("Three Parameters")
    }
    calResult = (a,b,c,d)=>{
        console.log("Four Parameters")
    }
    
       
    
   

}


export default Dog;