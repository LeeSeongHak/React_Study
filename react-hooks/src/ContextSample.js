import React, { createContext, useContext } from 'react';

//UseContext
const ThemeContext = createContext('yellow');
const ContextSample = () => {
    const theme = useContext(ThemeContext);
    const style = {
        width: '24px',
        height: '24px',
        background: theme
    };
    return <div style={style} />;
};

export default ContextSample;