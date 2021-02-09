import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterPreview from './CharacterPreview.jsx';

describe('CharacterPreview component', () => {
    afterEach(() => cleanup());
    it('renders CharacterPreview', () => {
        const { asFragment } = render(<Router>
            <CharacterPreview
                photoUrl={'f'}
                name={'f'}
                _id={'f'}
            />
        </Router>);
        expect(asFragment()).toMatchSnapshot();
    });
});
