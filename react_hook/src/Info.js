import React, { useState, useEffect } from 'react';

//useState & useEffect
const Info = () => {

    //생성자를 대신하는 useState
    //useState는 현재의 state값과 이 값을 업데이트하는 함수를 쌍으로 제공한다.
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    //클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합쳐놓은 형태의 useEffect
    useEffect(() => {
        console.log('렌더링 완료!');
        console.log({
            name,
            nickname
        });    
    });

    //마운트될 때만 실행하고 싶을 때에는 2번째 파라미터로 비어있는 배열[]을 넣어주면 된다.
    useEffect(() => {
        console.log('마운트 완료!');    
    },[]);

    //특정 값이 업데이트 될 때만 실행하고 싶을 때에는 2번째 파라미터에 검사하고 싶은 값을 넣어주면 된다.
    //배열 안에는 useState를 통해 관리하고 있는 state를 넣어줘도 되고 props로 전달받은 값을 넣어줘도 된다.
    useEffect(() => {
        console.log(name);
    },[name]);

    //만약 컴포넌트가 언마운트되기 전 또는 업데이트 되기 직전에 어떠한 작업을 수행하고 싶다면 뒷정리(cleanup) 함수를 반환해주어야 한다.
    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');     //위의 effect보다 이게 먼저 실행이 된다.
            console.log(name);
        };
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <br></br>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <h4>Name : {name}</h4>
                <h4>Nickname : {nickname}</h4>
            </div>
        </div>
    )
}

export default Info;