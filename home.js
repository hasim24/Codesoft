let menu =  document.querySelector('.nav-menu')
let sidenav = document.querySelector('.side-nav')
menu.addEventListener('click', () => {
    sidenav.style.left = '0'
})

let xmark = document.querySelector('.xmark')
xmark.addEventListener('click', () => {
    sidenav.style.left = '-60%'
})