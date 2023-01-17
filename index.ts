// boolean
// number
// string
// boolean[]
// number[]
// string[]
// tuple
// enum
// any
// object
// undefined
// null
// void
// never


let a = 1; // 가능한 한 TypeScript가 추론하게 만들면 좋다.
let b : string = "i1";
let c : boolean = true;

let aa : number[] = [1];
let bb : string[] = ["i1"];
let cc : boolean[] = [true];

//

const playerNico : {
    name : string,
    age? : number // ? -> number OR undefined
} = {
    name : "apple"
}

if(playerNico.age && playerNico.age < 10) {
    console.log("1");
}

//

type Age = number;
type Player = {
    name : string,
    age? : Age // ? -> number OR undefined
}

const playerA : Player = {
    name : "A"
}

//

function playerMaker(name:string) : Player {
    return {
        name
    }
}

const playerMaker2 = (name:string) : Player => ({name})

const nico = playerMaker("nico")
nico.age = 12