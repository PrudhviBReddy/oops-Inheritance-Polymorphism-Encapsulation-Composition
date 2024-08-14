import './App.css';
import Dog from './classes/Dog';
import Cat from './classes/Cat';
import Animal from './classes/Animal';


function App() {
  let myAnimal =new Animal()
  myAnimal.sound();
  
  let myDog =new Dog("Max","Golden Retriver",3,"Golden");
  let myCat =new Cat("Whiskers","Siamese",2,"Grayy")
  myDog.sound();
  myDog.displayInfo();
  myDog.eat();
  myDog.sleep();
  myDog.play();
  myDog.vaccinate();
  myCat.sound();
  myCat.displayInfo();
  myCat.eat();
  myCat.scratch();
  myCat.sleep();
  myCat.groom();
  myDog.calResult();


  return(
    <div className='App'></div>

  );
}

export default App;