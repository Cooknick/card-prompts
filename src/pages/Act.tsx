import React from 'react'
import Deck from '../components/Deck'
import { PageWrapper } from '../components/styled'
import list from '../lists/act.json'

const Act = () => {
    return (
        <PageWrapper>
            <p>Act</p>
            <Deck list={list} />
        </PageWrapper>
    )
}

export default Act