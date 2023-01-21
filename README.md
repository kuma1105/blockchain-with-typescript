# TypeScript

## tsconfig.json

* TypeScript가 src의 모든 파일을 확인합니다.
```javascript
"include": ["src"]
```

* 자바스크립트 파일이 생성될 디렉터리를 지정합니다.
```javascript
"compilerOptions" : {
    "outDir": "build"
}
```

* 어떤 버전의 JavaScript로 TypeScript를 컴파일할 것인지 설정합니다.
* https://www.typescriptlang.org/tsconfig#target
* Modern browsers support all ES6 features, so ES6 is a good choice.
```javascript
"compilerOptions" : {
    "target": "ES6"
}
```


