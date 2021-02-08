import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/fetches.js';
import styles from './ListPage.jsx';
import CharacterPreview from '../components/CharacterPreview/CharacterPreview.jsx'

const ListPage = () => {
    const [characterList, setCharacterList] = useState([]);

    useEffect(async () => {
        const characterList = await fetchCharacters();
        setCharacterList(characterList);
    }, [])

    const characterMap = characterList.map((character, index) => {
        return <li key={index}>
            <CharacterPreview {...character} />
        </li>
    })

    return (
        <div>
            {characterList ?
                <ul className={styles.listPage}>
                    {characterMap}
                </ul>
                :
                <p>LOADING!</p>
            }
        </div>
    )
}

export default ListPage;
