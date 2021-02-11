import React from 'react'
import styled from 'styled-components'
import { colorCodes } from '../constants';
const FooterWrapper = styled.div`
color: white;
bottom: 0px;
background: ${colorCodes.pink};
text-align: center;
font-size: 16px;
height: 80px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

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