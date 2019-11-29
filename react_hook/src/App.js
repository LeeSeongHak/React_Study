import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import Info2 from './Info2';
import ContextSample from './ContextSample';
import Average from './Average';

const App = () => {
    //react-hooks를 쓰려면 무조건 함수형 컴포넌트이어야 하나보다.
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            {visible && <Counter />}
            {visible && <Info />}
            {visible && <Info2 />}
            {visible && <ContextSample />}
            {visible && <Average/>}
        </div>
    );
}

export default App;