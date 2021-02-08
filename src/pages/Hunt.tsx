import React from 'react'
import Deck from '../components/Deck'
import { PageWrapper } from '../components/styled'
import list from '../lists/hunt.json'

const Hunt = () => {
    return (
        <PageWrapper>
            <p>Hunt</p>
            <Deck list={list} />
        </PageWrapper>
    )
}

export default Hunt