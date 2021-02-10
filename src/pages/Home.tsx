import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Page from '../components/Page'
import { Button } from '../components/styled'
import { colorCodes } from '../constants'
import './home.css'


const HomeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-image: url('/img/confetti.jpg');
    background-repeat: no-repeat;
    background-size: cover;
`

const HomeSection = styled.div`
    display: flex;
    width: inherit;
    box-sizing: border-box;
    flex:1;
    align-items: center;
    justify-content: center;
`

const IntroWrapper = styled(HomeSection)`
    flex-direction: column;
    color: white;
    background: rgba(0, 0, 0, 0.5)

`
const GameTypeWrapper = styled(HomeSection)`
background-image: url('/img/hotel-wallpaper.png');
background-size: contain;
`

const ColorOverlay = styled(HomeSection)`
    padding: 0 10%;
    width: inherit;
    height: 100%;
    background: rgba(172, 117, 26, 0.5);

> div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
`

const GameType = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    border: 1px solid rgba(0,0,0, 0.2);
    height: 250px;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 2px 3px rgba(0,0,0, 0.5);
    border-radius: 5px;
    background: white;
    transition: transform 250ms;
    cursor: pointer;
    
    :hover {
        transform: scale(1.02)
    }
`

const Home = () => {
    const history = useHistory();
    return (
        <Page>
            <HomeWrapper>
                <IntroWrapper>
                    <div>
                        <h2>Welcome to Party Stack!</h2>
                        <p>Party Stack will generate classic party games prompts to act out, draw, or hunt. Play it virtually or in person.</p>

                        <h3>How Do I Play?</h3>
                        <ol>
                            <li>Pick a game type bellow or in the header.</li>
                            <li>Hit "Next" to generate a new prompt.</li>
                        </ol>
                    </div>
                </IntroWrapper>
                <GameTypeWrapper>
                    <ColorOverlay>
                        <div>
                            <GameType onClick={() => history.push('/act')}>
                                <h2>Act</h2>
                                <span>Promps for a game of charades</span>
                            </GameType>
                            <GameType onClick={() => history.push('/draw')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="175" viewBox="0 0 24 24"><path d="M1.438 16.875l5.688 5.689-7.126 1.436 1.438-7.125zm22.562-11.186l-15.46 15.46-5.688-5.689 15.459-15.46 5.689 5.689zm-4.839-2.017l-.849-.849-12.614 12.599.85.849 12.613-12.599z" /></svg>
                                <h2>Draw</h2>
                                <span>Grab some friends, some paper, and some pens.</span>
                            </GameType>

                            <GameType onClick={() => history.push('/hunt')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="175" viewBox="0 0 24 24"><path d="M16.871 3.312c-.282-.764-1.01-1.312-1.871-1.312-1.298 0-2.314 1.244-1.904 2.582 1.111-.395 2.346-1.102 3.775-1.27zm7.129 13.688c0 2.761-2.238 5-5 5-4.039 0-4.156-4.123-7-4.123-2.844 0-2.961 4.123-7 4.123-2.762 0-5-2.239-5-5 0-2.135 1.896-6.417 3.941-10.821 1.632-3.514 4.754-1.26 6.815-.585.781.256 1.654.272 2.486 0 2.061-.674 5.188-2.931 6.815.585 1.999 4.315 3.943 8.686 3.943 10.821zm-16 0c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm5-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1s.447 1 1 1c.553 0 1-.448 1-1zm9 2c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3zm-13-15c-.861 0-1.589.548-1.871 1.312 1.429.168 2.664.875 3.775 1.27.409-1.338-.606-2.582-1.904-2.582z" /></svg>
                                <h2>Hunt</h2>
                                <span>Scavenger hunt for common object in your home.</span>
                            </GameType>
                        </div>
                    </ColorOverlay>
                </GameTypeWrapper>
            </HomeWrapper>
        </Page>
    )
}

export default Home