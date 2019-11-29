import React, { useReducer } from 'react';

//useReducer를 이용한 Info
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <h4>Name: {name}</h4>
                </div>
                <div>
                    <h4>Nickname: {nickname}</h4>
                </div>
            </div>
        </div>
    );
};

export default Info;