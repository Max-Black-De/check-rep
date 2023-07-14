let app = document.querySelector('.application')
let menuModal = document.querySelector('.menu-modal--none')
let openMenuBtn = document.querySelector('.buttons-block__burger-button')
let closeMenuBtn = document.querySelector('.menu-header__close-button')

let feedbackModal = document.querySelector('.feedback')
let openFeedbackBtn = document.querySelector('.footer-buttons-block__chat')
let closeFeedbackBtn = document.querySelector('.feedback__close-btn')

let callModal = document.querySelector('.call')
let openCallBtn = document.querySelector('.footer-buttons-block__call')
let closeCallBtn = document.querySelector('.call__close-btn')

let generalOpenCallBtn= document.querySelector('.buttons__call-button')
let generalOpenFeedbackBtn= document.querySelector('.buttons__chat-button')


openMenuBtn.addEventListener('click', () => {
    menuModal.classList.toggle('menu-modal--none')
    menuModal.classList.toggle('menu-modal')
    app.style.overflow = 'hidden'
})
closeMenuBtn.addEventListener('click', () => {
    app.style.overflow = 'scroll'
    menuModal.classList.toggle('menu-modal--none')
    menuModal.classList.toggle('menu-modal')
})

const mediaQuery = window.matchMedia('(min-width: 1120px)')

let handleTableChange = (event) => {
    if (event.matches) {
        menuModal.classList.add('menu-modal--static')
        console.log('mediaQuery')
    } else {menuModal.classList.remove('menu-modal--static')}
}
mediaQuery.addListener(handleTableChange)
handleTableChange(mediaQuery)
    
    
openFeedbackBtn.addEventListener('click', () => {
    feedbackModal.style.display = 'flex'
    if (window.innerWidth < 1120) {
        menuModal.classList.toggle('menu-modal--none')
    }
    app.style.overflow = 'hidden'
})
closeFeedbackBtn.addEventListener('click', () => {
    app.style.overflow = 'scroll'
    feedbackModal.style.display = 'none'
})


openCallBtn.addEventListener('click', () => {
    callModal.style.display = 'flex'
    if (window.innerWidth < 1120) {
        menuModal.classList.toggle('menu-modal--none')
    }
    app.style.overflow = 'hidden'
})
closeCallBtn.addEventListener('click', () => {
    app.style.overflow = 'scroll'
    callModal.style.display = 'none'
})



generalOpenCallBtn.addEventListener('click', () => {
    callModal.style.display = 'flex'
    app.style.overflow = 'hidden'
})

generalOpenFeedbackBtn.addEventListener('click', () => {
    feedbackModal.style.display = 'flex'
    app.style.overflow = 'hidden'
})

window.addEventListener('click', (event) => {
    if (event.target == menuModal) {
        app.style.overflow = 'scroll'
        menuModal.classList.toggle('menu-modal--none')
    }
})
window.addEventListener('click', (event) => {
    if(event.target == feedbackModal) {
        app.style.overflow = 'scroll'
        feedbackModal.style.display = 'none'
    }
})
window.addEventListener('click', (event) => {
    if(event.target == callModal) {
        app.style.overflow = 'scroll'
        callModal.style.display = 'none'
    }
})