var popup = document.querySelector('.popup')
var popupBtn = document.querySelector('.banner__js')
var popupClose = document.querySelector('.close__btn')

popupBtn.addEventListener('click', function() {
    popup.classList.add('popup__open')
})

popupClose.addEventListener('click', function() {
    popup.classList.remove('popup__open')
})