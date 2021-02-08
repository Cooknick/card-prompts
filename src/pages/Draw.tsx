import React from 'react'
import Deck from '../components/Deck'
import { PageWrapper } from '../components/styled'
import list from '../lists/draw.json'

const Draw = () => {
    return (
        <PageWrapper>
            <p>Draw</p>
            <Deck list={list} />
        </PageWrapper>
    )
}

export default Draw