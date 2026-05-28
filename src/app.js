import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import { login } from './authService.js'

const doc = {
    loginButton: document.querySelector('#loginButton'),
    loginForm: document.querySelector('#loginForm'),
    nameInput: document.getElementById('name'),
    passwordInput: document.getElementById('password'),
}

// doc.loginButton.addEventListener('click', () => {
//     console.log('belépés indul...');
    
// })

doc.loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('submit indul..')
    startLogin();

})

function startLogin() {
    const user = {
        name: doc.nameInput.value,
        password: doc.passwordInput.value
    }
    login(user).then(res => {
        console.log(res);
        localStorage.setItem('token', res.accessToken);
        console.log(res.accessToken);
        if(res.accessToken) {
            console.log('Sikeres bejelentkezés!');
            window.location.href = 'http://localhost:3000/movies.html';
        }else {
            console.log('Sikertelen bejelentkezés!');
        }
    })
    // const response = login(user);
    // console.log(response);
}

function startCreateMovie() {
    const movie = {
        title: 'zzz',
        director: 'zzz',
        release: 2026
    }

    //TODO: folytatás

}


