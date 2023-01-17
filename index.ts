let a = 1; // 가능한 한 TypeScript가 추론하게 만들면 좋다.
let b : string = "i1";
let c : boolean = true;

let aa : number[] = [1];
let bb : string[] = ["i1"];
let cc : boolean[] = [true];

const player : {
    name : string,
    age? : number // number OR undefined
} = {
    name : "apple"
}