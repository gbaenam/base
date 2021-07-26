addEventListener('DOMContentLoaded', () => {

    const   header = document.getElementById('main-header'),
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



    // Función change icons.
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
        vh = innerHeight
        // Leyendo la variable CSS '--height-header' con JavaScript.
        heightHeader = getComputedStyle(document.documentElement).getPropertyValue('--height-header')
        // Leyendo la variable CSS '--height-footer' con JavaScript.
        heightFooter = getComputedStyle(document.documentElement).getPropertyValue('--height-footer')
        // Altura mínima del main
        mainHeight = `min-height: calc(${vh/16}rem - ${heightHeader} - ${heightFooter})`
        // Aplicando el estilo (min-height) a main
        main.setAttribute('style', mainHeight)

        if (mql.matches) {
            navHeight = `height: auto`
            nav.setAttribute('style', navHeight)
        } else {
            vh = innerHeight
            navHeight = `height: calc(${vh/16}rem - ${heightHeader})`
            nav.setAttribute('style', navHeight)
        }
    }
    // Ejecución de la función Altura Elemento.
    elementHeight()
    // Evento 'change' consulta de medios función Altura Elemento.
    mql.addEventListener('change', elementHeight)
    // Evento 'resize' función Altura Elemento.
    addEventListener('resize', elementHeight)



    const moveSocialBar = () => {
        if (mql.matches) {
            footerContainer.insertAdjacentElement('beforeend', socialBar)
        } else {
            nav.insertAdjacentElement('beforeend', socialBar)
        }
    }
    moveSocialBar()
    mql.addEventListener('change', moveSocialBar)

})




// const styles = `
//     height: calc(${hRem}rem - ${hdr});
//     color: red;
//     border-radius: ${br};
//     font-size: ${hdr};
// `

