import React, { useState, useEffect } from 'react';
import { BiArrowBack } from "react-icons/bi";
import { fetchCharacter } from '../../services/fetch.js'
import { useParams, Link } from 'react-router-dom'

const CharacterDetail = () => {
    const [chosenCharacter, setChosenCharacter] = useState();
    const { id } = useParams();

    useEffect(async () => {
        const fetchedCharacter = await fetchCharacter(id)
        setChosenCharacter(fetchedCharacter)
    }, [])

    return (
        <div>
            <Link to='/'>
                <BiArrowBack />
            </Link>
            {chosenCharacter ?
                <div>
                    <img src={chosenCharacter.photoUrl} alt={`image of ${chosenCharacter.name}`} />
                    <p>{`Name: ${chosenCharacter.name}`}</p>
                    <p>{`Affiliation: ${chosenCharacter.affiliation}`}</p>
                    <p>ALLIES:</p>
                    <ul>
                        {chosenCharacter.allies.map((ally, index) => {
                            return <p key={index}>{ally}</p>
                        })}
                    </ul>
                    <ul>
                        {chosenCharacter.enemies.map((enemy, index) => {
                            return <p key={index}>{enemy}</p>
                        })}
                    </ul>
                </div>
                :
                <p>LOADING!</p>
            }
        </div>
    )
}

export default CharacterDetail;