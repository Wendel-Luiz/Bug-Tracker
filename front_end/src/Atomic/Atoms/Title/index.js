import React from 'react';

import {
    TitleMainStyle, 
    TitleSubStyle, 
    TitleSubSubStyle
} from './style';

function Title(props){
    switch(props.type){
        case 'main':
            return <TitleMainStyle color = {props.color}>{props.children}</TitleMainStyle>

        case 'sub':
            return <TitleSubStyle color = {props.color}>{props.children}</TitleSubStyle>

        case 'subsub':
            return <TitleSubSubStyle color = {props.color}>{props.children}</TitleSubSubStyle>
        
        default:
            return null;
    }
}

Title.defaultProps = {
    color: 'black',
    textAlign: 'left',
    marginBottom: 0
}

export default Title;