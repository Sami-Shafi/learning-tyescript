// basics
let id: number = 5;
let userName: string = "sami74";
let isOnline: boolean = true;

// array
let fruits: string[] = ["pineapple", "banana", "apple", "cake"];

// tuple
// let profileStructure1: [number, string, boolean] = [id, userName, isOnline];
// let profileStructure2: [number, string, boolean] = [2, "Monkey", false];

// tuple array
let profileStructure: [string, number][] = [
	["sami", 17],
	["monkey", 18],
	["salman", 22],
	["Jerin", 29],
];

// Union
let pid: string | number;

// Enum
enum DirectionEnum {
	Right,
	Left = 2,
	Up,
	Down,
}
// console.log(DirectionEnum);

// Objects
// 1. direct method
// const gamer: {
// 	gamerId: number;
// 	name: string;
// 	category: string;
// 	eliteLevel: boolean;
// } = {
// 	gamerId: 74,
// 	name: "sami",
// 	category: "action",
// 	eliteLevel: true,
// };

// 2. using type (I like this one)
type Gamer = {
	gamerId: number;
	name: string;
	category: string;
	eliteLevel: boolean;
};

const sami: Gamer = {
	gamerId: 74,
	name: "sami",
	category: "action",
	eliteLevel: true,
};

// Type assertions (I like to call it override)
let userId: any = 2;
let gamerId = userId as string;
// (this will throw error)
// gamerId = 12;
//  (this will work)
// gamerId = "sami74"

// functions
// ! If the return value is unknown, then we use 'void'
function personalInfo(name: string, age: number): string {
	return `${name} is ${age} years old`;
}
// testing
// console.log(personalInfo("sami", 17));
// console.log(personalInfo("sami", "17"));

// Interfaces

// a citizen inteface
interface Citizen {
	name: string;
	age: number;
	job: string;
	skills?: Array<string>;
}

const jack: Citizen = {
	name: "sami",
	age: 20,
	job: "student",
	skills: ["programming", "gaming", "singing"],
};

// an interface to validate function parameter types
interface arithmeticOperation {
	(x: number, y: number): number;
}

// * this will throw error as in the interface we are saying that
// * the return should be number but in the function we are giving void
// const sum: arithmeticOperation = (x: number, y: number): void => x + y;

class Student {
	id: number;
	name: string;
	private phoneNumber: string;

	constructor(id: number, name: string, phoneNumber: string) {
		this.id = id;
		this.name = name;
		this.phoneNumber = phoneNumber;
	}
}

const rahat = new Student(14, "Rahat", "01707696956");
// this will throw error as its private
// console.log(rahat.phoneNumber);

// Generics
const getItemsArray = <Type>(items: Type[]): Type[] => {
	return new Array().concat(items);
};
let numArray = getItemsArray<number>([1, 2, 3, 4]);
let strArray = getItemsArray<string>(["sami", "salman", "jerin"]);
