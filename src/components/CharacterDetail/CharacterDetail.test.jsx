// import React from 'react';
// import { act, render, screen, waitFor } from '@testing-library/react';
// import CharacterDetail from './CharacterDetail';
import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail.jsx';

describe('CharacterDetail component', () => {
    afterEach(() => cleanup());
    it('renders CharacterDetail', () => {
        const { asFragment } = render(<Router><CharacterDetail
        /></Router>);
        expect(asFragment()).toMatchSnapshot();
    });
});

// describe('CharacterDetail tests', () => {
    // it('displays CharacterPreview', async () => {

    //     render(<Router>
    //         <CharacterDetail path={'/details/5cf5679a915ecad153ab6900'} />
    //     </Router >);


    //     screen.getByText('LOADING!');

    //     let ul = await screen.findByTestId('characterDetail');

    //     return waitFor(() => {
    //         expect(ul).not.toBeEmptyDOMElement();
    //     })
    // })
// })