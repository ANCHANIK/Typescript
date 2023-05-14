const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number' ) {
    //     throw new Error('incorrect input!')
    // }
    const result = n1 + n2;
    if(showResult) {
        console.log(phrase+result);
        
    } else {
        return result;
    }
}

// const num1 = '5';
let num1: number;
num1 = 5;
const num2 = 2.8;
const printResult = true;
const phraseResult = "Result is:";

add(num1, num2, printResult, phraseResult);
