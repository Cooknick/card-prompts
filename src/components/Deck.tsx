import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from './styled';

const DeckWrapper = styled.div`
    // border: 1px solid black;
    // width: 400px;
    // padding: 20px;
`

const CardWrapper = styled.div`
    border: 1px solid rgba(0,0,0, 0.1);
    border-radius: 5px;
    box-shadow: 0px 2px 3px rgba(0,0,0, 0.5);
    width: 400px;
    height: 150px;
    padding: 20px;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Deck: FC<{ list: string[] }> = ({ list }) => {
    const [card, setCard] = useState<string>('')

    useEffect(() => {
        generateCard()
    }, [])

    const generateCard = () => {
        const randomNumber: number = Math.floor(Math.random() * list.length)
        setCard(list[randomNumber])
    }

    return (
        <DeckWrapper>
            <CardWrapper>
                {card}
            </CardWrapper>
            <Button onClick={() => generateCard()}>Next</Button>
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