import React from 'react';
import TextStyle from './style';

function Text(props){
    return (
        <TextStyle 
            color       ={props.color}
            fontSize    ={props.fontSize}
            spacing     ={props.spacing}
            margin      ={props.margin}
            align       ={props.align}
        >
            {props.children}
        </TextStyle>
    )
}

Text.defaultProps = {
    color:      'Black',
    fontSize:   '1rem',
    spacing:    'normal',
    margin:     '1em 0 1em 0',
    align:      'left'
}

export default Text;
    