const hello = () => console.log("hello");

class Block2 {
    constructor(
        private data: string
    ) { }
    static hello() {
        return "hi";
    }
}

import { init, exit } from "./myPackage";
init({
    url: "true",
    debug: true
})

exit(1)


// Blocks
import * as crypto from "crypto";

console.log("hi");

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}
class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string,
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash(prevHash: string, height: number, data: string) {
        const toHash = `${prevHash}${height}${data}`;
    }
}
