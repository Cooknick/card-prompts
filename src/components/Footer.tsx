import React from 'react'
import styled from 'styled-components'
import { colorCodes } from '../constants';
const FooterWrapper = styled.div`
color: white;
bottom: 0px;
background: ${colorCodes.primary};
text-align: center;
font-size: 16px;
height: 80px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: inset 0px 3px 3px rgba(0,0,0,0.2);

    a {
        color: white;
        text-decoration: underline;
    }
`
const Footer = () => (
    <FooterWrapper>
        <p>Created by <a className="vogue-1-Art-deco-2-hex" href="https://twitter.com/mikecooknick">@mikecooknick</a></p>
    </FooterWrapper>
)

export default Footer;