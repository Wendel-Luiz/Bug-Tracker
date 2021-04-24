import React from 'react';
import ButtonStyle from './style';

function Button (props){
    return(
        <ButtonStyle
            color = {props.color}
        >
            {props.children}
        </ButtonStyle>
    )
 
}

Button.defaultProps = {
    color : '#121849'
}

export default Button;

