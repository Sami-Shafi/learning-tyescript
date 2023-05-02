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
