// index.ts 파일에서 myPackage.js에 있는 함수는 import 하지 못함
// 그래서 .d.ts(Declaration File)을 통해 TS가 JS 파일을 이해할 수 있음..!

interface Config {
    url: string
}

declare module "myPackage" {
    function init(config: Config): boolean;
    function exit(code: number): number;
}