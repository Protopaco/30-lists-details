import PropTypes from 'prop-types';
import React from 'react';
import styles from './CharacterPreview.css';
import { Link } from 'react-router-dom';

const CharacterPreview = ({ photoUrl, name, id }) => (
    <figure
        className={styles.CharacterPreview}>
        <Link to={`/details/${id}`}>
            <img src={photoUrl} className={styles.previewImage} />
            <figcaption className={styles.previewName}>{name}</figcaption>
        </Link>
    </figure>

);

CharacterPreview.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default CharacterPreview;