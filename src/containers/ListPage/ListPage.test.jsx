import React from 'react';
// import reactDOM from 'react-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import ListPage from './ListPage';
import App from '../../components/app/App'
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

describe('ListPage tests', () => {

    it('displays CharacterPreview', async () => {
        let ul;
        render(
            <BrowserRouter>
                <ListPage />
            </BrowserRouter>)


        screen.getByText('LOADING!');
        ul = await screen.findByTestId('characterList');

        return waitFor(() => {
            expect(ul).not.toBeEmptyDOMElement();
        })
    })
})