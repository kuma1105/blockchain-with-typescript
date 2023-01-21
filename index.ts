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
let b: string = "i1";
let c: boolean = true;

let aa: number[] = [1];
let bb: string[] = ["i1"];
let cc: boolean[] = [true];

//

const playerNico: {
    name: string,
    age?: number // ? -> number OR undefined
} = {
    name: "apple"
}

if (playerNico.age && playerNico.age < 10) {
    console.log("1");
}

// type, readonly

type Age = number;
type Player = {
    readonly name: string,
    age?: Age // ? -> number OR undefined
}

const playerA: Player = {
    name: "A"
}

//

function playerMaker(name: string): Player {
    return {
        name
    }
}

const playerMaker2 = (name: string): Player => ({ name })

const nico = playerMaker("nico")
nico.age = 12

// 

const numbers: readonly number[] = [1, 2, 3, 4]
// number.push(1)

const names: readonly string[] = ["1", "2"]
// names.push("3")

//  Tuple
const playerB: readonly [string, number, boolean] = ["apple", 12, false]
// playerB[0] = "2"

let aaa: undefined = undefined;
let bbb: null = null;

let ccc: any = 1
ccc = "!"

// unknown : 변수의 타입을 미리 알지 못 할 때 사용한다.
let aaaa: unknown;
// let bbbb = aaaa + 1;
if (typeof aaaa === 'number') {
    let bbbb = a + 1
}

// void : 아무것도 return하지 않는 함수, 따로 작성할 필요는 없다.
function hello() {
    console.log('x');
}

function hello2(name: string | number) {
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
function add(a: number, b: number) {
    return a + b
}

const add2 = (a: number, b: number) => a + b

// call signature
type Add = (a: number, b: number) => number
type Add2 = {
    (a: number, b: number): number
}
const add3: Add = (a, b) => a + b

// overloading
// 함수가 여러 개의 call signature를 갖고 있을 때 발생한다
type Add3 = {
    (a: number, b: string): number
    (a: number, b: number): number
}

const add4: Add3 = (a, b) => {
    if (typeof b === "string") return a
    return a + b
}


type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if (typeof config === "string") {
        console.log(config)
    } else {
        console.log(config.path)
    }
}


type Add4 = {
    (a: number, b: number): number
    (a: number, b: number, c: number): number
}
const add5: Add4 = (a, b, c?: number) => {
    if (c) return a + b + c
    return a + b
}

console.log(add5(1, 2))
console.log(add5(1, 2, 3))


// Polymorphism, 다형성, many structures
type SuperPrint = {
    <T, M>(a: T[], b: M): T // 타입스크립트가 발견한 타입으로 변경해준다.
}
// const superPrint: SuperPrint = (arr) => {
//     arr.forEach(i => console.log(i))
// }
const superPrint: SuperPrint = (ar) => ar[0]

const q = superPrint([1, 2, 3, 4], "x")
const w = superPrint([true, false, true], 1)
const e = superPrint(["true"], false)
const r = superPrint([1, 2, true, false, "false"], [])

console.log(q, w, e, r)

function superPrint2<V>(a: V[]) {
    return a[0]
}

const qq = superPrint2([1, 2, 3, 4])
const ww = superPrint2([true, false, true])
const ee = superPrint2(["true"])
const rr = superPrint2([1, 2, true, false, "false"])

type Player2<E> = {
    name: string
    extraInfo: E
}

type NicoExtra = {
    favFood: string
}

type NicoPlayer = Player2<NicoExtra>

const nico2: NicoPlayer = {
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}

const lynn2: Player2<null> = {
    name: "lynn",
    extraInfo: null
}

type arrNumbers = Array<number>

function printAllNumbers(arr: Array<number>) {
    // 
}


// Class
abstract class User {
    constructor(
        // protected : User 클래스를 상속하는 모든 클래스에서 사용 가능하다
        protected firstName: string,
        protected lastName: string,
        public nickname: string
    ) { }

    abstract getNickName(): void

    public getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Playerr extends User {
    getNickName() {
        console.log(this.nickname)
    }
}

const nicoo = new Playerr("nico", "las", "니꼬")
console.log(nicoo.nickname)
console.log(nicoo.getFullName())


type Words = {
    [whatever: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word) {
        // 파라미터로 받은 단어가 아직 사전에 존재하지 않는다면 사저에 추가한다.
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
    def(term: string) {
        return this.words[term]
    }
    static hello() {
        return "hello"
    }
}

class Word {
    constructor(
        public readonly term: string,
        public readonly def: string
    ) { }
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict()
dict.add(kimchi)
dict.def("kimchi")
Dict.hello()


// interface
type PlayerA = {
    nickname: string,
    healthBar: number,
}

type NickName = string
type Health = number
type Friends = Array<string>
type PlayerB = {
    nickname: NickName,
    healthBar: Health,
}

const nicoA: PlayerA = {
    nickname: "nico",
    healthBar: 10
}

type Food = string;
const kimchi2: Food = "delicious"

// type이 특정값만 가지도록 제한할 수 있다.
type Team = "read" | "blue" | "yellow"
type Health2 = 1 | 5 | 10

// type PlayerC = {
//     nickname: string,
//     team: Team,
//     health: Health2
// }

// object의 모양을 특정해준다.(interface의 기능은 이것 뿐이다...?!) type 키워드가 interface 키워드에 비해 활용도가 높다.
interface PlayerC {
    nickname: string,
    team: Team,
    health: Health2
}

const nicoB: PlayerC = {
    nickname: "nico",
    team: "read",
    health: 1
}


interface UserD {
    name: string
}

interface PlayerD extends UserD {

}

const nicoD: PlayerD = {
    name: "nico"
}


type UserE = {
    name: string
}

type PlayerE = UserE & {

}

const nicoE: PlayerE = {
    name: "nico"
}

// 같은 interface끼리 합칠 수 있다. type은 못한다.
interface UserF {
    name: string
}
interface UserF {
    lastName: string
}
interface UserF {
    health: number
}
const nicoF: UserF = {
    name: "FFF",
    health: 10,
    lastName: "YYY"
}


abstract class UserG {
    constructor(
        protected firstName: string,
        protected lastName: string,
    ) { }

    abstract sayHi(name: string): string
    abstract fullName(): string
}

class PlayerG extends UserG {
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string): string {
        return `Hello, ${name}. My name is ${this.fullName()}`
    }
}
interface UserH {
    firstName: string,
    lastName: string,
    sayHi(name: string): string
    fullName(): string
}
interface Human {
    health: number
}

// interface를 상속받는 클래스의 생성자는 꼭 public이 되어야 한다...?!
// interface는 컴파일되면 js에 안보임, abstract는 js에 보임
//interface는 다중 상속이 가능하다
class PlayerH implements UserH, Human {
    constructor(
        public firstName: string,
        public lastName: string,
        public health: 100
    ) { }
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string): string {
        return `Hello, ${name}. My name is ${this.fullName()}`
    }
}

// interface를 type으로 사용할 수 있다.
// function makeUserH(user: UserH) {
//     return "hi"
// }
function makeUserH(user: UserH): UserH {
    return {
        firstName: "J",
        lastName: user.lastName,
        fullName: user.fullName,
        sayHi: (name) => "string"
    }
}

console.log(
    makeUserH({
        firstName: "J",
        lastName: "JJ",
        fullName: () => "Xx",
        sayHi: (name) => "string"
    })
)

// interface는 원하는 메소드와 property를 클래스가 가지도록 강제한다.
// 추상 클래스와 비슷한 보호를 제공하지만, 인터페이스는 JS 파일에서 보이지 않는다.
// type와 interface의 차이점으로 type은 새 property를 추가하기 위해 다시 선언될 수 없지만 
// interface는 항상 상속이 가능하다.

type PlayerK = {
    name: string
}
type PlayerKK = PlayerK & {
    lastName: string
}
const playerK: PlayerKK = {
    name: "K",
    lastName: "apple"
}
// 
interface PlayerL {
    name: string
}
interface PlayerLL extends PlayerL {
    lastName: string
}
interface PlayerLL {
    health: number
}
const playerL: PlayerLL = {
    name: "L",
    lastName: "banana",
    health: 100
}