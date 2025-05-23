//Task2


function printFullName(Fullname:{First:string,Secound:string,Last:string}):string{
    return `${Fullname.First} ${Fullname.Secound} ${Fullname.Last}`;
}


const fullname = {
    First: 'saleh',
    Secound: 'amer',
    Last: 'shalab'
}


console.log(printFullName(fullname));


//Task 3


function storeObjectValueInArray(): number[] {
  const obj = { a: 1, b: 2, c: 3 };
  const valuesArray: number[] = Object.values(obj);
  return valuesArray;
}


console.log(storeObjectValueInArray());


//Task 4
function returnMessage(message:string){
    return printMessage(message,'salehAmer');
}


function printMessage(message:string,username:string):void{
    console.log(`your username is : ${username} and the message is : ${message}`);
}


console.log(returnMessage('Hi Saleh'));


//Task 5
const numberArray = [1,2,3,-4,-5,-6,7,8,9];


function returnPostiveNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number > 0);
}
console.log(returnPostiveNumbers(numberArray));


//Task 6


function returnCityName(location: { country: string; city?:string }): string {
    return location.city ? location.city : location.country;
}


const location1 = { country: 'jordan', city: 'Amman' };
const location2 = { country: 'Jordan'};


console.log(returnCityName(location1));
console.log(returnCityName(location2));


//Task 7
class Person{
    name!:string;
    age! :number;


    constructor(name:string,age:number){
        this.name= name;
        this.age = age;
    }


    describeMe():string{
        return `I'm ${this.name}, I am ${this.age} year old!`;
    }
}


const person1 = new Person('saleh',23);


console.log(person1.describeMe());


//Task 8
abstract class Studnet {
  marks!: number[];
  name!: string;


  constructor(marks: number[], name: string) {
    this.marks = marks;
    this.name = name;
  }


  abstract isPassed(): boolean;
}


class Bachelor extends Studnet {
  constructor(marks: number[], name: string) {
    super(marks, name);
  }


  isPassed(): boolean {
    const avgMarks = this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
    return avgMarks >= 60;
  }
}


class PHD extends Studnet {
  constructor(marks: number[], name: string) {
    super(marks, name);
  }


  isPassed(): boolean {
    const avgMarks = this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
    return avgMarks >= 80;;
  }
}

//Task 9
export function addition(num1: number, num2: number) {
  return num1 + num2;
}


export function subtraction(num1: number, num2: number) {
  return num1 - num2;
}


export function division(num1: number, num2: number) {
  if (num2 === 0) {
    throw new Error("Cannnot Divide by zero");
  } else {
    return num1 / num2;
  }
}


export function Multiplication(num1: number, num2: number) {
  return num1 * num2;
}



//Task 10
interface obj{
    [key:string]:number;
}




//Task 11


const company = {
    name: "TechCorp",
    location: { city: "San Francisco", country: "USA" }
};


const employees = [
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Manager" }
];
//a
const { city, country } = company.location;
console.log(`City: ${city}, Country: ${country}`);


//b
const employeeNames = employees.map(employee => employee.name);
console.log(`Employee Names: ${employeeNames}`);


//c
const employeeRoles = employees.map(employee => employee.role).join(", ");
console.log(`Employee Roles: ${employeeRoles}`);










