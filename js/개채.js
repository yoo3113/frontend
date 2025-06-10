const person = {
    name: '황지민',
    age: 29,
    job: '개발자',
    talk: (sentence) => {
        return sentence
    },
    hobbies: {
        hobby1: '개발공부',
        hobby2: '운동',
    },
};

// console.log(`안녕하세요 저는 ${person.name}입니다.
//     제 나이는 ${person.age}살 이고, 제 직업은 ${person.job}입니다.
//     제 취미는 ${person.hobbies.hobby1}와 ${person.hobbies.hobby2}입니다.
//     ${person.talk('앞으로 잘 부탁드립니다.')}`);

// 옅은 복사사
const person2 = person;

person2.name = '뢍지민';

console.log(person.name);

const person3 = { ...person };

person3.name = '뢍지민2';
person3.hobbies.hobby2 = '독서';

console.log('두번째 옅은 복사', person);

// 깊은 복사
const deepCopy = (origin) => {
    const result = {};
    for (let key in origin) {
        if (origin[key] !== null && typeof origin[key] == 'object') {
            result[key] = deepCopy(origin[key]);
        } else if (typeof origin[key] === 'function') {
            result[key] = origin[key];
        } else {
            result[key] = origin[key];
        }
    }
    return result;
};

const person4 = deepCopy(person);

console.log('깊은 복사', person4);

person4.name = '뢍지민';
person4.hobbies.hobby2 = '독서';
console.log('깊은 복사 후', person);

