const hello = () => console.log("hello");

class Block {
    constructor(
        private data: string
    ) { }
    static hello() {
        return "hi";
    }
}