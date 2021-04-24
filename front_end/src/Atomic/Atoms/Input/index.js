import React from 'react';
import InputStyle from './style';

function Input (props){
    return (
        <InputStyle 
            placeholder={props.children}
        />  
    )
}

export {
    Input,
}