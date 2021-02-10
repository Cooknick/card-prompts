import React from 'react';
import { Link, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import { colorCodes, pageNames } from '../constants';
import { Button } from './styled';

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 60px;
    padding: 0 10%;
    box-sizing: border-box;
    justify-content: space-between;
    background: ${colorCodes.red};

    a {
        color: white;
    }
`

const HeaderButton = styled(Button) <{ active: boolean }>`
    border: none;
    background: ${props => props.active ? colorCodes.rose : 'none'};
    color: ${props => props.active ? colorCodes.red : 'white'};

    :hover {
        background: ${colorCodes.rose};
        border-color: ${colorCodes.rose};
        color: black;
    }
`

const HeaderButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: ${colorCodes.red};
    width: 40%;
    justify-content: space-between;
`

const Header = () => {
    const location = useLocation();

    const route = location.pathname || ''

    return (
        <HeaderWrapper>
            <div>
                <Link to="/">
                    <h2>Party Stack</h2>
                </Link>
            </div>
            <HeaderButtonsWrapper>
                <Link to="/act">
                    <HeaderButton active={route === `/${pageNames.act}`}>
                        Act
                    </HeaderButton>
                </Link>
                <Link to="/draw">
                    <HeaderButton active={route === `/${pageNames.draw}`}>
                        Draw
                    </HeaderButton>
                </Link>
                <Link to="/hunt">
                    <HeaderButton active={route === `/${pageNames.hunt}`}>
                        Hunt
                    </HeaderButton>
                </Link>
            </HeaderButtonsWrapper>
        </HeaderWrapper>
    )
}

export default Header