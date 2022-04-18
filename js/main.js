const elLightModeButton = document.querySelector('.light-link');
const elDarkModeButton = document.querySelector('.night-link');

elLightModeButton.addEventListener('click', function() {
    document.body.classList.add('dark-mode');
});

elDarkModeButton.addEventListener('click', function() {
    document.body.classList.remove('dark-mode');
});


const elSelect = document.querySelector ('.main-select');
const elInput = document.querySelector ('.main-input');
elSelect.addEventListener('change', function () {
console.log(elSelect.value);
if (elSelect.value === 'Other') {
elInput.disabled = false;
} else {
elInput.value = '';
elInput.disabled = true;
}

});
