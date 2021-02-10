import React from 'react'
import Deck from '../components/Deck'
import Page from '../components/Page'
import list from '../lists/act.json'

const Act = () => (
    <Page>
        <Deck list={list} />
    </Page>
)

export default Act