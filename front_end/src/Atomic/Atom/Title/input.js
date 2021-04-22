import React from 'react';
import TextStyle from './style';

export default (props) => (
    <TextStyle
        color   ={props.color}
        size    ={props.size}
        spacing ={props.spacing}
    >
        props.children
    </TextStyle>
)