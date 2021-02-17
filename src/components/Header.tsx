import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { colorCodes, pageNames } from '../constants';

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 100px;
    font-size: 20px;
    padding: 0 10%;
    box-sizing: border-box;
    justify-content: space-between;
    background: ${colorCodes.primary};
    align-items: center;
    box-shadow: inset 0px -3px 3px rgba(0,0,0,0.2);

    a {
        color: white;
    }
`

const HeaderButton = styled.div <{ active: boolean }>`
    height: 100%;
    background: ${props => props.active ? 'white' : 'none'};
    color: ${props => props.active ? colorCodes.primary : 'white'};
    width: 30%;
    align-items: center;
    display:flex;
    justify-content:center;
    cursor: pointer;
    ${props => props.active ? ' box-shadow: 3px 0px 3px rgba(0,0,0,0.2);' : ''};
   

    :hover {
        background: white;
        color: ${colorCodes.primary};
        box-shadow: 3px 0px 3px rgba(0,0,0,0.2);
    }
`

const HeaderButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 50%;
`

const Header = () => {
    const location = useLocation();
    const history = useHistory();

    const route = location.pathname || ''

    return (
        <HeaderWrapper>
            <div>
                <Link to="/act">
                    <h2>Act, Draw, Find</h2>
                </Link>
            </div>
            <HeaderButtonsWrapper>
                <HeaderButton onClick={() => history.push('/act')} active={route === `/${pageNames.act}` || route === '/'}>
                    Act
                </HeaderButton>
                <HeaderButton onClick={() => history.push('/draw')} active={route === `/${pageNames.draw}`}>
                    Draw
                </HeaderButton>
                <HeaderButton onClick={() => history.push('/find')} active={route === `/${pageNames.hunt}`}>
                    Find
                </HeaderButton>
            </HeaderButtonsWrapper>
        </HeaderWrapper>
    )
}

export default Header