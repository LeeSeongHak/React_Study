import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Map, List, Record } from 'immutable';

//Immutable에서 자주 사용하는 기본 명령어.
//1. 객체는 Map
const obj = Map({
    foo: 1,
    inner: Map({
        bar: 10
    })
});

console.log(obj.toJS());

//2. 배열은 List
const arr = List([
    Map({ foo: 1 }),
    Map({ bar: 2 })
]);

console.log(arr.toJS());

//3. 설정할 땐 set
let nextObj = obj.set('foo', 5);
console.log(nextObj.toJS());
console.log(nextObj !== obj);

//4. 값을 읽을 땐 get
console.log(obj.get('foo'));
console.log(arr.get(0));    //list에는 index를 설정하여 읽음

//5. 읽은 다음에 설정할 때는 update
//두번째 파라미터로는 updater 함수가 들어감
nextObj = nextObj.update('foo', value => value + 1);
console.log(nextObj.toJS());

//6. 내부에 있는걸 ~할 땐 In을 붙인다.
nextObj = obj.setIn(['inner', 'bar'], 20);
console.log(nextObj.getIn(['inner', 'bar']));

let nextArr = arr.setIn([0, 'foo'], 10);
console.log(nextArr.getIn(['inner', 'bar']));

//8. List 내장함수는 배열이랑 비슷하다.
nextArr = arr.push(Map({ qaz: 3 }));
console.log(nextArr.toJS());
nextArr = arr.filter(item => item.get('foo') === 1);
console.log(nextArr.toJS());

//9. delete로 key를 지울 수 있음
nextObj = nextObj.delete('foo');
console.log(nextObj.toJS());

nextArr = nextArr.delete(0);
console.log(nextArr.toJS());

render(<App />, document.getElementById('root'));


//get, getIn을 대체하는 Record 사용법
const Person = Record({
    name: '홍길동',
    age: 1
});

let person = Person();

console.log(person);
// ▶Object {name: "홍길동", age: 1 }

console.log(person.name, person.age);
// "홍길동" 1

person = person.set('name', '김민준');
console.log(person.name); // 김민준

// 이건 오류 : person.name = '철수';

// Record 에서 사전 준비해주지 않은 값을 넣어도 오류발생.
// person = person.set('job', 5);

// 값을 따로 지정해줄수도 있다.
person = Person({
    name: '영희',
    age: 10
});

const { name, age } = person; // 비구조화 할당도 가능
console.log(name, age); // "영희" 10

// 재생성 할 일이 없다면 이렇게.
const dog = Record({
    name: '멍멍이',
    age: 1
})()

console.log(dog.name); // 멍멍이

// 이런것도 가능.
const nested = Record({
    foo: Record({
        bar: true
    })()
})();

console.log(nested.foo.bar); // true

// Map 다루듯이 똑같이 쓰면 된다.
const nextNested = nested.setIn(['foo', 'bar'], false);
console.log(nextNested);

render(<App />, document.getElementById('root'));



