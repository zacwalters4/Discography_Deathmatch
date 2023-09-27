

export const getArtists = (artist: string) => {
    return (
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=fcf48a134034bb684aa87d0e0309a0fd&format=json`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('something went wrong')
                }
            })
            .then(data => {
                return data.results.artistmatches.artist.slice(0,3)
            })
    )
}

export const getAlbums = (artist: string) => {
    return (
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getTopAlbums&artist=${artist}&api_key=fcf48a134034bb684aa87d0e0309a0fd&format=json`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('something went wrong')
            }
        })
    )
}

export const getUserAlbums = () => {
    return (
        fetch(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=zac_cba&period=1month&api_key=fcf48a134034bb684aa87d0e0309a0fd&format=json`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('something went wrong')
            }
        })
    )
}


