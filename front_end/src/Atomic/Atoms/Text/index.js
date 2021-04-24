import React from 'react';
import TextStyle from './style';

export default (props) => (
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
    