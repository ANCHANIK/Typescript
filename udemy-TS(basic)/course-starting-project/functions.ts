// 반환 타입
function add(n1: number, n2:number): number {
    return n1 + n2;
}
// => 반환되는 값이 number type이기 때문에 함수 타입이 number가 된다.

// 함수의 반환되는 값이 없기 떄문에 undefined가 아닌 void가 된다.
// 아무 값도 반환하고 싶지 않은 경우 어떤 값을 반환하도록 강요되지 않는다.
function printResult(num: number): void {
    console.log('Result: ' + num);
}
// function printResult(num: number): undefined (또는 void) {
//     console.log('Result: ' + num);
//     return; 
//     undefined를 쓰기 위해선 리턴되어야 한다.
// }

// 콜백 함수 타입 정의
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,12));

// 함수 타입 설정
// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // error
// combineValues = 5; // error

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
    console.log(result);
});
// 콜백 함수는 자신이 전달되는 인수가 반환 값을 기대하지 않은 경우에도 값을 반환할 수 있다.