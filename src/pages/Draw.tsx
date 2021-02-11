import React from 'react'
import Deck from '../components/Deck'
import Page from '../components/Page'
import list from '../lists/draw.json'

const Draw = () => {
    return (
        <Page>
            <Deck list={list} prompt="Draw: " />
        </Page>
    )
}

export default Draw