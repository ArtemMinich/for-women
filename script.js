setTimeout(() => {
    setInterval(() => {
        const heartsContainer = document.querySelector('.hearts-container');
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }, 500);
}, 3000);