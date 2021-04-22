import React from 'react';
import OAuthStyle from './style';

export default (props) => (
    <OAuthStyle color = {props.color}>
        {props.children}
    </OAuthStyle>
)