import React from 'react';
import FlexContainerStyle from './style';

function FlexContainer(props){
    let values = {};

    switch(props.type){
        case 'card':
            values = {...FlexContainer.defaultProps, ...props, ...card};
            break;
        case 'oAuth':
            values = {...FlexContainer.defaultProps, ...props, ...oAuth};
            break;
        default:
            values = {...FlexContainer.defaultProps, ...props};
            break;
    }
    return(
        <FlexContainerStyle 
            values = {values}
        >
            {props.children}
        </FlexContainerStyle>
        
    )
}

FlexContainer.defaultProps = {
    ctnWidth:           '100%',
    ctnHeight:          '100%',
    flexDirection:      'column',
    alignItems:         'flex-start',
    justifyContent:     'flex-start',
    border:             'none',
    borderRadius:       '0',
    boxShadow:          'none',
    padding:            '0',
    backgroundColor:    'white',
    margin:             '0',
}

const card = {
    borderRadius : '5px',
    boxShadow: '0 0 10px 1px black',
    padding: '10px',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
}

const oAuth = {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding: '0.25rem',
    margin: '0 0 .25rem 0',
    borderRadius: '.25rem',
}

export default FlexContainer;