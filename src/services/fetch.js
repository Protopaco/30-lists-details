const avatarURL = 'https://last-airbender-api.herokuapp.com/api/v1/characters'

export async function fetchCharacters() {
    return fetch(avatarURL)
        .then(response => { return response.json() })
        .catch(err => { throw err })
}

export async function fetchCharacter(characterId) {
    return fetch(`${avatarURL}/${characterId}`)
        .then(response => { return response.json() })
        .catch(err => { throw err })
}
