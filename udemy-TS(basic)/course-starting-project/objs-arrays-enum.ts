// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'IK',
//     age: 30,
//     hobbies: ["Sports", "Coding", "Cooking"],
//     role: [2, 'author']
// }

// person.role.push('admin'); // push는 예외적으로 TS에서 에러를 걸러내지 못하지만 잘못된 값을 할당하지는 않는다.
// person.role[1] = 10;

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN = 'ADMIN',
    READ_ONLY = 100,
    AUTHOR = 'AUTHOR'
}

const person = {
    name: 'IK',
    age: 30,
    hobbies: ["Sports", "Coding", "Cooking"],
    role: Role.ADMIN
}

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}

if(person.role === Role.AUTHOR) {
    console.log('is author');
}