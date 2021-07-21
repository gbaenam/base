addEventListener('DOMContentLoaded', () => {

    const   header = document.getElementById('main-header'),
            burguerButton = document.querySelector('.burguer-button'),
            burguerLine = document.querySelector('.burguer-button__line'),
            nav = document.getElementById('main-nav'),
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
            document.getElementById("checkin").src = "img/icons/checkin-desk.svg"
            document.getElementById("contact").src = "img/icons/contact-desk.svg"
        }

        else {
            document.getElementById("checkin").src = "img/icons/checkin-mobl.svg"
            document.getElementById("contact").src = "img/icons/contact-mobl.svg"
        }
    }
    // Ejecución de la función change icons.
    changeIcons()

    // Evento 'change' change icons.
    mql.addEventListener('change', changeIcons)



    // Leyendo la variable CSS '--height-header' con JavaScript.
    const heightHeader = getComputedStyle(document.documentElement).getPropertyValue('--height-header')

    // Función alturaInterna
    alturaInterna = () => {
        vh = innerHeight
        const styles = `height: calc(${vh/16}rem - ${heightHeader})`
        document.getElementById('main-nav').setAttribute('style', styles)
    }

    // Ejecución de la función alturaInterna.
    alturaInterna()

    // Evento 'resize' alturaInterna.
    addEventListener('resize', alturaInterna)

})












// const styles = `
//     height: calc(${hRem}rem - ${hdr});
//     color: red;
//     border-radius: ${br};
//     font-size: ${hdr};
// `







