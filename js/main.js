const elLightModeButton = document.querySelector('.light-link')
const elDarkModeButton = document.querySelector('.night-link')

elLightModeButton.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
});

elDarkModeButton.addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
});



