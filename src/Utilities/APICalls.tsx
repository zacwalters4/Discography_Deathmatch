const getArtists = (artist: string) => {
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
                const filteredResults = data.results.artistmatches.artist.map(item => {
                    return {name: item.name, image: item.image[4]['#text']}
                })
                console.log(filteredResults)
                return filteredResults
            })
    )
}

export default getArtists