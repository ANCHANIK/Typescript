// 타입 알리어스
type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

const combine = (
    input1: Combinable,
    input2: Combinable,
    // resultConversion: string
    resultConversion: ConversionDescriptor
) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
        // result = parseFloat(input1) + parseFloat(input2); 숫자로 변환
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;

    // if (resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('IK','Life', 'as-text');
console.log(combineNames);
