
function createStars() {
    const stars = document.getElementById('stars');
    if (!stars) {
        return;
    }

    const count = 200; 

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        const size = Math.random() * 2;
        
        const duration = 2 + Math.random() * 3;
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        
        stars.appendChild(star);
    }
}
    
window.addEventListener('load', createStars);

window.addEventListener('resize', () => {
    const stars = document.getElementById('stars');
    if (!stars) {
        return;
    }

    stars.innerHTML = '';
    createStars();
});
