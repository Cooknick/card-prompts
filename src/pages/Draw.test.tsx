import React from 'react';
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Draw from './Draw';

describe('Draw', () => {
    beforeEach(() => {
        const history = createMemoryHistory()
        render(<Router history={history}>
            <Draw />
        </Router>)
    })
    it('Displays prompt and Next', () => {
        const title = screen.queryByText("Draw:");
        const next = screen.queryByText("Next");
        expect(title).toBeInTheDocument();
        expect(next).toBeInTheDocument();
    })
})