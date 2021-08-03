const   mainHeader = document.getElementById('main-header'),
        burguerButton = document.querySelector('.burguer-button'),
        burguerLine = document.querySelector('.burguer-button__line'),
        nav = document.getElementById('main-nav'),
        iconCheckin = document.getElementById('checkin'),
        iconContact = document.getElementById('contact'),
        socialBar = document.getElementById('social-bar'),
        main = document.getElementById('main'),
        footerContainer = document.getElementById('footer-container'),
        mql = matchMedia('(min-width: 1024px)')



// Función hamburger button animation
const buttonAnimation = () => {
    burguerLine.classList.toggle('cruz')
    nav.classList.toggle('main-nav__move')
    }
// Evento 'click' hamburger button animation.
burguerButton.addEventListener('click', buttonAnimation)



// Función change icons del Header.
const changeIcons = () => {
    if (mql.matches) {
        iconCheckin.src = "img/icons/checkin-desk.svg"
        iconContact.src = "img/icons/contact-desk.svg"
    } else {
        iconCheckin.src = "img/icons/checkin-mobl.svg"
        iconContact.src = "img/icons/contact-mobl.svg"
    }
    }
// Ejecución de la función change icons.
changeIcons()
// Evento 'change' consulta de medios.
mql.addEventListener('change', changeIcons)



// Función Altura Elemento.
elementHeight = () => {
    // Altura interna del viewport.
    const vh = innerHeight
    // Leyendo y asignando la variable CSS '--height-header' con JavaScript.
    const heightHeader = getComputedStyle(document.documentElement).getPropertyValue('--height-header')
    // Leyendo y asignando la variable CSS '--height-footer' con JavaScript.
    // const heightFooter = getComputedStyle(document.documentElement).getPropertyValue('--height-footer')
    // Calculando altura mínima del main.
    // const minHeightMain = `min-height: calc(${vh/16}rem - ${heightHeader} - ${heightFooter})`
    // Asignando 'min-height' a main
    // main.setAttribute('style', minHeightMain)

    // Calculando la altura del NAV
    if (mql.matches) {
        nav.style.height = 'auto'
    } else {
        const navHeight = `height: calc(${vh/16}rem - ${heightHeader})`
        nav.setAttribute('style', navHeight)
    }
}
// Ejecución de la función Altura Elemento.
elementHeight()
// Evento 'change' consulta de medios función Altura Elemento.
// mql.addEventListener('change', elementHeight)
// Evento 'resize' función Altura Elemento.
addEventListener('resize', elementHeight)



// Creación elemento 'h3' de socialBar.
const h3 = document.createElement('h3')
h3.textContent = 'Síguenos en redes sociales'
h3.classList.add('social-bar__title')
h3.id = 'bar-text'

// Función mover la Barra Social.
const moveSocialBar = () => {
    if (mql.matches) {
        footerContainer.insertAdjacentElement('afterbegin', socialBar)
        socialBar.insertAdjacentElement('afterbegin', h3)
    } else if (socialBar.firstElementChild.id === 'bar-text') {
        socialBar.firstElementChild.remove()
        nav.insertAdjacentElement('beforeend', socialBar)
    }
}
// Ejecución de la función mover la Barra Social.
moveSocialBar()
// Evento 'change'
mql.addEventListener('change', moveSocialBar)
// })





// const styles = `
//     height: calc(${hRem}rem - ${hdr});
//     color: red;
//     border-radius: ${br};
//     font-size: ${hdr};
// `

