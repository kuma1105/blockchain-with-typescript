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

// unknown : 변수의 타입을 미리 알지 못 할 때 사용한다.
let aaaa : unknown;
// let bbbb = aaaa + 1;
if (typeof aaaa === 'number') {
    let bbbb = a + 1
}

// void : 아무것도 return하지 않는 함수, 따로 작성할 필요는 없다.
function hello() {
    console.log('x');
}

function hello2(name:string|number) {
    if (typeof name === "string") {
        name
    } else if (typeof name === "number") {
        name
    } else {
        // 여기는 절대 실행되면 안됨
        name
    }
}

// function
function add(a:number, b:number) {
    return a + b
}

const add2 = (a:number, b:number) => a + b

// call signature
type Add = (a:number, b:number) => number
type Add2 = {
    (a:number, b:number) : number
}
const add3:Add = (a, b) => a + b

// overloading
// 함수가 여러 개의 call signature를 갖고 있을 때 발생한다
type Add3 = {
    (a:number, b:string) : number
    (a:number, b:number) : number
}

const add4 : Add3 = (a, b) => {
    if(typeof b === "string") return a
    return a + b
}


type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void
    (config: Config):void
}

const push: Push = (config) => {
    if(typeof config === "string") {
        console.log(config)
    } else {
        console.log(config.path)
    }
}


type Add4 = {
    (a: number, b:number): number
    (a: number, b:number, c:number): number
}
const add5: Add4 = (a, b, c?: number) => {
    if(c) return a + b + c 
    return a + b
}

console.log(add5(1, 2))
console.log(add5(1, 2, 3))