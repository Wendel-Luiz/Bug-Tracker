import React from 'react';

import {
    TitleMainStyle, 
    TitleSubStyle, 
    TitleSubSubStyle
} from './style';

function Title(props){
    switch(props.type){
        case 'main':
            return <TitleMainStyle>{props.children}</TitleMainStyle>

        case 'sub':
            return <TitleSubStyle>{props.children}</TitleSubStyle>

        case 'subsub':
            return <TitleSubSubStyle>{props.children}</TitleSubSubStyle>
        
        case 'default':
            return null;
    }
}

Title.defaultProps = {
    color: 'black',
}

export default Title;