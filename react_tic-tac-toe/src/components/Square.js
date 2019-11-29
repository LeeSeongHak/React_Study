import React from 'react';

// class Square extends React.Component {
//     render() {
//         return (
//             //this의 혼란스러운 동작을 피하기 위해 익명함수인 화살표 함수를 사용함. function을 사용할 땐 일일이 bind(this)를 해줘야했음.
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

//함수 컴포넌트는 클래스 컴포넌트보다 더 간단하게 생성할 수 있다.
//state없이 render함수만을 가지며, React.Component를 확장하는 클래스를 정의하는 대신 props를 입력받아서 반환하는 함수를 만들 수 있다.
function Square(props) {
    return (
        //함수 컴포넌트의 경우 onClick에서 함수를 만들지 않기 때문에 ()가 2개 다 없어졌다.
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;