import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Deck from './Deck';

const list = ['a', 'b', 'c', 'd']
const prompt = "Test Prompt";

describe('Header', () => {
    beforeEach(() => {
        const history = createMemoryHistory()
        render(<Router history={history}>
            <Deck list={list} prompt={prompt} />
        </Router>)
    })
    it('Displays Prompt', () => {
        const promptText = screen.getByText("Test Prompt");
        const nextText = screen.getByText("Next");
        expect(promptText).toBeInTheDocument();
        expect(nextText).toBeInTheDocument();
    })
    it('Changes prompt on click', () => {
        const prompt1 = screen.getByTestId("card-body").innerHTML;

        fireEvent.click(screen.getByText('Next'))

        const prompt2 = screen.getByTestId("card-body").innerHTML;
        expect(prompt1).not.toEqual(prompt2)
    })
})