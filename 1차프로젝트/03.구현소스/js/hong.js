let openHam = document.querySelector('.open-ham');
let closeHam = document.querySelector('.close-ham');
let hamMenu = document.querySelector('.ham-menu');

openHam.addEventListener('click',function () {
    hamMenu.classList.add('on');
})

closeHam.addEventListener('click', function () {
    hamMenu.classList.remove('on');
})