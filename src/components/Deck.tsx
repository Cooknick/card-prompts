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
    background: ${props => props.isClicking ? colorCodes.pink : colorCodes.blue};
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

    :hover { 
        color: black;
    }
`

const includedValue = (array: number[], item: number) => {
    return array.indexOf(item) > -1
}

const Deck: FC<{ list: string[], prompt: string }> = ({ list, prompt }) => {
    const [deckHistory, setDeckHistory] = useState<number[]>([])
    const [card, setCard] = useState<string>('')
    const [clicking, isClicking] = useState<boolean>(false)
    const [randNumber, setRandNumber] = useState<number>(0);

    useEffect(() => {
        generateCard()
    }, [])

    const generateNearlyRandomNumber = () => {
        if (deckHistory.length === (list.length - 1)) {
            setDeckHistory([])
        }

        const newRandNumber: number = Math.floor(Math.random() * list.length)

        if (newRandNumber === randNumber || includedValue(deckHistory, newRandNumber)) {
            generateNearlyRandomNumber()
            return;
        }

        setRandNumber(newRandNumber)
        setDeckHistory(prev => [...prev, newRandNumber])
    }

    const generateCard = () => {
        generateNearlyRandomNumber()
        setCard(list[randNumber])
    }

    const clickButton = () => {
        isClicking(!clicking);
        generateCard();
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
                <DeckButton isClicking={clicking} onClick={() => clickButton()}>Next</DeckButton>
            </DeckButtonWrapper>
        </DeckWrapper>
    )
}

export default Deck