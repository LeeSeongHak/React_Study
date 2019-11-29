import React, { useState, useMemo, useCallback, useRef } from 'react';

//useMemo : useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다. 렌더링 성능 최적화!
//숫자열, 문자열, 객체와 같이 일반 값의 재사용은 useMemo / 함수의 재사용은 useCallback을 사용.
const getAverage = numbers => {
    console.log('평균값 계산중..');
    if (numbers.length === 0) return 0;
    //reduce() 메소드 : 배열을 단일 값으로 줄이는 것으로, 배열의 각 값에 대해 제공된 함수를 왼쪽에서 오른쪽으로 실행함.
    //값이 없는 배열 요소에 대해서는 함수를 실행하지 않고, 원래의 배열을 변경하지 않음.
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    //useRef를 통해 함수형 컴포넌트에서도 쉽게 ref를 사용할 수 있다.
    const inputEl = useRef(null);

    //useCallback : 이벤트 핸들러 함수를 필요할 때만 생성할 수 있도록 해주는 함수. useMemo와 마찬가지로 렌더링 성능 최적화에 사용.
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);     //컴포넌트가 처음 렌더링될 때만 함수 생성

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);     // number 혹은 list가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균 값:</b> {avg}
            </div>
        </div>
    );
}

export default Average;