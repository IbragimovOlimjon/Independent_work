const elsSitenavItem = document.querySelectorAll('.sitenav__item');
const elsSitenavLink = document.querySelectorAll('.sitenav__link');

elsSitenavLink.forEach(function (elLink) {
    elLink.addEventListener('click', function (evt) {
        evt.preventDefault();
        
        elsSitenavItem.forEach(function (elItem) {
            elItem.classList.remove('sitenav__item--active');
        });
        
        elLink.parentElement.classList.add('sitenav__item--active');
        
        updateSitenavActiveLineStyles();
        
    });
});

// Chiziqchani topamiz
const elSitenavActiveLine = document.querySelector('.sitenav__active-line');

function updateSitenavActiveLineStyles () {
    // Faol elementni top
    const elSitenavItemActive = document.querySelector('.sitenav__item--active');
    
    // Chiziqchaning chap tomonini faol element chap tomoniga tengla
    elSitenavActiveLine.style.left = elSitenavItemActive.offsetLeft + 'px';
    
    // Chiziqchaning enini faol element eniga tengla
    elSitenavActiveLine.style.width = elSitenavItemActive.offsetWidth + 'px';
}

updateSitenavActiveLineStyles();
