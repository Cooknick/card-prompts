import React from 'react'
import Deck from '../components/Deck'
import Page from '../components/Page'
import list from '../lists/hunt.json'

const Hunt = () => {
    return (
        <Page>
            <Deck list={list} />
        </Page>
    )
}

export default Hunt