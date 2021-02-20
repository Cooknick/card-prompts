import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colorCodes } from '../constants';
import { Button } from './styled';

const DeckWrapper = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100%;
    background: white;
    font-weight: bold;
    flex-direction:  column;

    @media only screen and (min-width: 786px){
        flex-direction:  row;
    }
`
const CardWrapper = styled.div`
    flex: 2;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    padding: 0 10%;
    flex-direction:column;
`
const CardCount = styled.div`
    color: grey;
`
const CardHeader = styled.div`
    font-size: 32px;
    color: black;
    margin: 5px 0;

`
const CardBody = styled.div`
font-size: 28px;
    color: black;
`
const DeckButtonWrapper = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`
const DeckButton = styled.div <{ isClicking: boolean }>`
    background: ${props => props.isClicking ? colorCodes.primary : colorCodes.secondary};
    color: white;
    border: none;
    transition: background 100ms;
    height: 100px;
    min-width: 250px;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 10%;
    box-shadow: 0px 3px 3px rgba(0,0,0,0);
    transition: all 150ms linear;

    :hover { 
        transform: scale(1.02);
        box-shadow: -2px 5px 5px rgba(0,0,0,0.2);
    }

    :active {
        background
    }
`

const spaceEvent = () => {

}

const includedValue = (array: number[], item: number) => {
    return array.indexOf(item) > -1
}

const Deck: FC<{ list: string[], prompt: string }> = ({ list, prompt }) => {
    const [deckHistory, setDeckHistory] = useState<number[]>([])
    const [card, setCard] = useState<string>('')
    const [isClicking, setIsClicking] = useState<boolean>(false)
    const [randNumber, setRandNumber] = useState<number>(0);

    useEffect(() => {
        setDeckHistory([])
        generateCard()
    }, [])

    const generateCard = () => {
        if (deckHistory.length === list.length) {
            setDeckHistory([])
            return;
        }

        const newRandNumber: number = Math.floor(Math.random() * list.length)
        console.log(newRandNumber)

        if (newRandNumber === randNumber || includedValue(deckHistory, newRandNumber)) {
            generateCard()
            return;
        }

        setRandNumber(newRandNumber)
        setDeckHistory(prev => [...prev, newRandNumber])
        setCard(list[newRandNumber])
    }

    const clickButton = () => {
        setIsClicking(true);
        generateCard();
        setTimeout(() => {
            setIsClicking(false);
        }, 250)
    }

    return (
        <DeckWrapper>
            <CardWrapper>
                <CardCount>
                    Prompt #{randNumber + 1}
                </CardCount>
                <CardHeader>
                    {prompt}
                </CardHeader>
                <CardBody data-testid="card-body">
                    {card}
                </CardBody>
            </CardWrapper>
            <DeckButtonWrapper>
                <DeckButton isClicking={isClicking} onClick={() => clickButton()}>Next</DeckButton>
            </DeckButtonWrapper>
        </DeckWrapper>
    )
}

export default Deck