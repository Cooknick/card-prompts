import React from 'react'
import styled from 'styled-components'
import { colorCodes } from '../constants';
const FooterWrapper = styled.div`
color: white;
bottom: 0px;
background: black;
text-align: center;
font-size: 12px;
height: 60px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

    a {
        color: white
    }
`
const Footer = () => (
    <FooterWrapper>
        <p>Created by <a className="vogue-1-Art-deco-2-hex" href="https://twitter.com/mikecooknick">@mikecooknick</a></p>
    </FooterWrapper>
)

export default Footer;