import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import { getMovies, createMovie } from './apiService.js'

const doc = {
    modalbox: document.querySelector('#modalbox'),
    modal: document.querySelector('.modal'),
    modalBackdrop: document.querySelector('#modal-backdrop'),
    addButton: document.querySelector('#addButton'),
    closeButton: document.querySelectorAll('.closeButton'),
    movieform: document.querySelector('#movieForm')
}

const modalState = {
    _show: false,
    get show() {
        return this._show
    },
    set show(value) {
        this._show = value
        //renderelés
        renderModal()
    }
}

doc.addButton.addEventListener('click', () => {
    startAddMovie()
    console.log('Hozzáadás gombra kattintva');
})

for(let i = 0; i < 2; i++) {
    doc.closeButton[i].addEventListener('click', () => {
        console.log('Bezár gombra kattintva');
        modalState.show = false
    })
}

doc.movieform.addEventListener('submit', (event) => {
    e.preventDefault()
    console.log('űrlap feldolgozása');
    const formData = new FormData(e.target)
    const title = formData.get('title')
    console.log(title);
})


doc.closeButton.addEventListener('click', () => {
    console.log('Bezár gombra kattintva');
    modalState.show = false
})

function startAddMovie() {
    modalState.show = true
}
function renderModal() {
    if (modalState.show) {
        doc.modalbox.classList.remove('d-none')
        doc.modal.classList.add('show')
        doc.modal.classList.add('d-block')
        doc.modalBackdrop.classList.add('d-block')
        setTimeout(() => {
            doc.modalBackdrop.classList.add('show')
        }, 10)
    } else {
        doc.modal.classList.remove('show')
        doc.modalBackdrop.classList.remove('show')
        setTimeout(() => {
            doc.modal.classList.remove('d-block')
            doc.modalBackdrop.classList.remove('d-block')
            doc.modalbox.classList.add('d-none')
        }, 150)
    }
}

function startGetMovies() {
    getMovies().then(res => {
        console.log(res);
    })
}

renderModal()
startGetMovies()