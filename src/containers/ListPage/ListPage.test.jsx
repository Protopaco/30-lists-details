import React from 'react';
// import reactDOM from 'react-dom';
import { act, render, screen, waitFor, cleanup } from '@testing-library/react';
import ListPage from './ListPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('ListPage tests', () => {
    afterEach(() => cleanup());

    it('displays ListPage', async () => {
        let ul;
        render(
            <Router>
                <ListPage />
            </Router>)

        screen.getByText('LOADING!');
        ul = await screen.findByTestId('characterList');

        return waitFor(() => {
            expect(ul).not.toBeEmptyDOMElement();
        })
    })


    it('renders ListPage', () => {
        const { asFragment } = render(<Router>
            <ListPage />
        </Router>);
        expect(asFragment()).toMatchSnapshot();
    });
})