//in react projects strict mode is enabled by default
//functions in javascript are objects
let person = {
  name: "Adhish",
  surname: "Malviya",
  city: "Sehore",
  coding() {
    //format for writing functions
    //...statements here
    console.log(this);
  },
  meditating() {
    //   statements here
  },
};

person = { ...person, location: "Gulab Vihar" };

console.log(person);
const coding = person.coding;
person.coding(); //prints person object
coding(); //prints window object
//this reference depends on the caller function
const codingBinded = person.coding.bind(person); //this way you can bind 'this' to person object
codingBinded();
// or use arrow functions
//Arrow functions dont rebind the this keyword
//in arrow functions 'this' inherits in the context of which the arrow function is defined
// look at lesson 14 for example
//use of arrow functions in Array methods

const person1 = {
  talk() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};
person1.talk(); //prints person1 object
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);

/*****************Spread Operator *******************/

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, "a", ...second, "b"];
console.log(combined);

// Exporting and importing a class
// import className, {functionName} from 'pathHere';
// export functionName(){};

// export deafult class ClassName{
//   //..something here
// }
