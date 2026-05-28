const host = 'http://localhost:8000/api/';

function register() {}
function login(user) {
    const url = host + 'login';
    return fetch(url, {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(result => {
        // console.log(result);
        return result
    })
    .catch(error => console.error(error));
}



export { register, login };