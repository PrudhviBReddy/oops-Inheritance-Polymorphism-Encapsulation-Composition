class Animal{
    constructor(name){
        console.log("The animal constructor")
        this.name= name;

    }
    sound=()=>{
        console.log("the animal makes a sound")
    }
}
export default Animal;