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

* 합쳐진 라이브러리의 정의 파일을 특정해주는 역할을 합니다.
* JS 코드가 어디에서 동작할지를 알려준다.
* 타입스크립트에게 어떤 API를 사용하고 어떤 환경에서 코드를 실행하는 지를 지정할 수 있습니다.
* dP) TS는 localStorage를 모른다. 이것을 설정하고 TS 파일에 localStorage를 사용하면 알아듣고 자동완성해준다.
```javascript
"compilerOptions" : {
    "lib": ["ES6", "DOM"]
}
```

* 모든 엄격한 타입 검사 옵션을 활성화합니다.
* Declaration Files가 없는 경우에 대해서도 에러를 띄워준다.
* https://www.typescriptlang.org/tsconfig#strict
```javascript
"compilerOptions" : {
    "strict": true
}
```

* TS 파일에서 JS를 허용한다.
```javascript
"compilerOptions" : {
    "allowJs": true
}
```

## JSDoc
https://jsdoc.app/
* JS에 사용하는 주석 문법
* JS파일에 '// @ts-check'을 맨 위에 작성하면 TS가 이것을 읽고 해석할 수 있다.

## ts-node 패키지
* TS파일을 바로 실행하고 확인할 수 있다.
```
npm i -D ts-node
```