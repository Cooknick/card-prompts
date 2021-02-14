import React from 'react';
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Header from './Header';

describe('Header', () => {
    beforeEach(() => {
        const history = createMemoryHistory()
        render(<Router history={history}>
            <Header />
        </Router>)
    })
    it('Displays Title', () => {
        const title = screen.queryByText("Act, Draw, Find");
        expect(title).toBeInTheDocument();
    })
    it('Displays `ACT`', () => {
        const title = screen.queryByText("Act");
        expect(title).toBeInTheDocument();
    })
    it('Displays `DRAW`', () => {
        const title = screen.queryByText("Draw");
        expect(title).toBeInTheDocument();
    })
    it('Displays `FIND`', () => {
        const title = screen.queryByText("Find");
        expect(title).toBeInTheDocument();
    })
})