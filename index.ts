// boolean
// number
// string
// boolean[]
// number[]
// string[]
// Tuple : 특정 위치에 특정 타입이 있어야만 한다.
// enum
// any
// object
// undefined
// null
// void
// never
// unknown


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

// type, readonly

type Age = number;
type Player = {
    readonly name : string,
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

// 

const numbers : readonly number[] = [1, 2, 3, 4]
// number.push(1)

const names: readonly string[] = ["1","2"]
// names.push("3")

//  Tuple
const playerB: readonly [string, number, boolean] = ["apple", 12, false]
// playerB[0] = "2"

let aaa : undefined = undefined;
let bbb : null = null;

let ccc : any = 1
ccc = "!"