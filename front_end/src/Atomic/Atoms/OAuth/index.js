import React from 'react';
import {OAuthLink, OAuthContainer} from './style';
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
        <OAuthContainer
            cntWidht    = {props.ctnWidht}
            color       = {data.color}
        >
            <data.icon color="white" fontSize="1rem"/>
            
            <OAuthLink>
                {data.text}
            </OAuthLink>
        </OAuthContainer>
    )
}

OAuth.defaultProps = {
    cntWidth: 'auto',
}

export {
    OAuth,
};