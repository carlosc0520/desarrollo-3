'use strict'

const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}
}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

const contenedor = document.getElementsByClassName('js-cont-todo')[0]

for (let i = 0; i < to_do.length; i++) {
    let li = document.createElement('li')
    li.innerHTML = to_do[i]
    contenedor.appendChild(li)
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    li.appendChild(checkbox)
    checkbox.addEventListener('click', function() {
        if (checkbox.checked) {
            li.classList.add('tilde')
        } else {
            li.classList.remove('tilde')
        }
    })
}