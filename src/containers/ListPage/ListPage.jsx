import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/fetch.js';
import styles from './ListPage.jsx';
import CharacterPreview from '../../components/CharacterPreview/CharacterPreview.jsx'

const ListPage = () => {
    const [characterList, setCharacterList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(async () => {
        const fetchedList = await fetchCharacters();
        setCharacterList(fetchedList);
        setLoading(false)
    }, [])

    const characterMap = characterList.map((character, index) => {
        if (character.photoUrl) {
            return <li key={index}>
                <CharacterPreview {...character} />
            </li>
        }
        else {
            return <p key={index}></p>
        }
    })

    if (loading) return <p>LOADING!</p>;

    return <ul className={styles.listPage}
        data-testid='characterList'>
        {characterMap}
    </ul>

}

export default ListPage;
