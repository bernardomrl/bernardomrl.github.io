const card = document.querySelector('.card'),
    buttons = document.querySelectorAll('.change-page')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        card.classList.toggle('rotated')
    })
})