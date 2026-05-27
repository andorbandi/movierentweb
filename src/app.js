import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import { getMovies, createMovie } from './appService.js'
import { login } from './authService.js'

const doc = {
    loginButton: document.querySelector('#loginButton')
}

doc.loginButton.addEventListener('click', () => {
    console.log('belépés indul...');
    startLogin();
});

function startLogin() {
    const user = {
        name: 'mari',
        password: 'titok'
    }
    login(user);
}

function startCreateMovie() {
    const movie = {
        title: 'zzz',
        director: 'zzz',
        release: 2026
    }

    //TODO: folytatás

}


