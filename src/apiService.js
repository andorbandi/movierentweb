const host = 'http://localhost:8000/api/movies'

function getMovies() {
    const url = host
    const token = localStorage.getItem('token');
    return fetch(url, {
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => {
        return result
    })
}

function createMovie(movie) {
    const url = host
    const token = localStorage.getItem('token');
    return fetch(url, {
        method: 'POST',
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie)
    })
    .then(response => response.json())
    .then(result => {
        return result
    })
}

export { getMovies, createMovie };