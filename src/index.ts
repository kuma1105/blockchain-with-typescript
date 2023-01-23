const hello = () => console.log("hello");

class Block {
    constructor(
        private data: string
    ) { }
    static hello() {
        return "hi";
    }
}

import { init, exit } from "myPackage";
init({
    url: "true"
})

exit(1)