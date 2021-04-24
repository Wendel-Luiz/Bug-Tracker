import React from 'react';
import OAuthLink from './style';
import FlexContainer from '../../Atoms/FlexContainer';
import {FaFacebookF , FaGithub, FaGoogle} from 'react-icons/fa';

function OAuth(props){
    const data = {
        text: '',
        icon: '',
        color: ''
    }

    switch(props.type){
        case 'facebook':
            data.text   = 'Facebook';
            data.icon   =  FaFacebookF;
            data.color  = 'blue';
            break;

        case 'github':
            data.text   = 'Github';
            data.icon   =  FaGithub;
            data.color  = 'black';
            break;

        case 'google':
            data.text   = 'Google';
            data.icon   =  FaGoogle;
            data.color  = 'red';
            break;
    }    

    return(
        <FlexContainer 
            type='oAuth'
            backgroundColor= {data.color}
        >
            <data.icon color="white" fontSize="1rem"/>
            <OAuthLink>
                {data.text}
            </OAuthLink>
        </FlexContainer>
    )
}

export default OAuth;