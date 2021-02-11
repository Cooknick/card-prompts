import React from 'react'
import Deck from '../components/Deck'
import Page from '../components/Page'
import list from '../lists/act.json'

const Act = () => (
    <Page>
        <Deck list={list} prompt="Act Out:" />
    </Page>
)

export default Act