import React from 'react';
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Hunt from './Hunt';

describe('Draw', () => {
    beforeEach(() => {
        const history = createMemoryHistory()
        render(<Router history={history}>
            <Hunt />
        </Router>)
    })
    it('Displays prompt and Next', () => {
        const title = screen.queryByText("Go Find:");
        const next = screen.queryByText("Next");
        expect(title).toBeInTheDocument();
        expect(next).toBeInTheDocument();
    })
})