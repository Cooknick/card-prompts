import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colorCodes } from '../constants';
import { Button } from './styled';

const DeckWrapper = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-image: url('/img/hotel-wallpaper.png');
`

const ColorOverlay = styled(DeckWrapper)`
background: rgba(172, 117, 26, 0.5);
`

const CardWrapper = styled.div`
    border: 1px solid rgba(0,0,0, 0.1);
    background: white;
    border-radius: 5px;
    box-shadow: 0px 2px 3px rgba(0,0,0, 0.5);
    min-width: 500px;
    height: 200px;
    padding: 20px;
    text-align:center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

const CardCount = styled.div`
    color: lightgrey;
    align-self: end;
`

const DeckButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: end;
    min-width: 540px;
`
const DeckButton = styled(Button)`
    background: ${colorCodes.gold};
    color: white;
    border: none;
    transition: background 100ms;

    :hover { 
        background: ${colorCodes.red};
    }
`

const Deck: FC<{ list: string[] }> = ({ list }) => {
    const [card, setCard] = useState<string>('')
    const [randNumber, setRandNumber] = useState<number>(0);

    useEffect(() => {
        generateCard()
    }, [])

    const generateNearlyRandomNumber = () => {
        const newRandNumber: number = Math.floor(Math.random() * list.length)

        if (newRandNumber === randNumber) {
            generateNearlyRandomNumber()
            return;
        }

        setRandNumber(newRandNumber)
    }

    const generateCard = () => {
        generateNearlyRandomNumber()
        setCard(list[randNumber])
    }

    return (
        <DeckWrapper>
            <ColorOverlay>
                <div>
                    <CardWrapper>
                        <div />
                        <div>
                            {card}
                        </div>
                        <CardCount>
                            Prompt #{randNumber + 1}
                        </CardCount>
                    </CardWrapper>
                </div>
                <DeckButtonWrapper>
                    <DeckButton onClick={() => generateCard()}>Next</DeckButton>
                </DeckButtonWrapper>
            </ColorOverlay>
        </DeckWrapper>
    )
}

export default Deck

// const [card, setCard] = useState<string>('')
// setCard(list[randomNumber])

   // const generateCard = () => {
    //     const randomNumber: number = Math.floor(Math.random() * list.length)
    //     setCard(list[randomNumber])
    // }