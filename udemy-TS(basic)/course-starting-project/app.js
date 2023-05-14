var userInput;
// unknown보다는 유니온 타입(string | number)을 쓰는게 좋다.
var userName;
userInput = 5;
userInput = 'IK';
// userName = userInput;
// 할당시 타입 종류까지 명시된다.
// 추가적인 검사를 통해 어떤 작업을 진행할지 명시
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error occurred', 500);
