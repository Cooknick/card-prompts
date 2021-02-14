import React from 'react';
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Act from './Act';

describe('Act', () => {
    beforeEach(() => {
        const history = createMemoryHistory()
        render(<Router history={history}>
            <Act />
        </Router>)
    })
    it('Displays prompt and Next', () => {
        const title = screen.queryByText("Act Out:");
        const next = screen.queryByText("Next");
        expect(title).toBeInTheDocument();
        expect(next).toBeInTheDocument();
    })
})