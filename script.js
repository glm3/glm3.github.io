document.addEventListener('DOMContentLoaded', (event) => {
    // Add floating UFO icons to the header
    const header = document.querySelector('header');
    const ufo = document.createElement('span');
    ufo.textContent = '🛸';
    ufo.classList.add('ufo-icon');
    header.appendChild(ufo);

    // Add hover effect to chapter list
    const chapterItems = document.querySelectorAll('#chapters ol li');
    chapterItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = '#00ff00';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '#e0e0e0';
        });
    });
});