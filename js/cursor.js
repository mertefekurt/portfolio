document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');
    
    cursorDot.className = 'cursor-dot';
    cursorOutline.className = 'cursor-dot-outline';
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
    
    let cursorVisible = true;
    let cursorEnlarged = false;
    
    const endX = window.innerWidth / 2;
    const endY = window.innerHeight / 2;
    
    let distanceX = 0;
    let distanceY = 0;
    
    let mouseX = endX;
    let mouseY = endY;
    
    function toggleCursorVisibility() {
        if (cursorVisible) {
            cursorDot.style.opacity = 1;
            cursorOutline.style.opacity = 1;
        } else {
            cursorDot.style.opacity = 0;
            cursorOutline.style.opacity = 0;
        }
    }
    
    function toggleCursorSize(enlarged) {
        if (enlarged) {
            cursorOutline.classList.add('cursor-hover');
        } else {
            cursorOutline.classList.remove('cursor-hover');
        }
    }
    
    function updateCursorPosition(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        
        requestAnimationFrame(updateCursor);
    }
    
    function updateCursor() {
        distanceX = mouseX - cursorDot.offsetLeft;
        distanceY = mouseY - cursorDot.offsetTop;
        
        cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        cursorOutline.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
    
    document.addEventListener('mousemove', updateCursorPosition);
    
    document.addEventListener('mouseenter', () => {
        cursorVisible = true;
        toggleCursorVisibility();
    });
    
    document.addEventListener('mouseleave', () => {
        cursorVisible = false;
        toggleCursorVisibility();
    });
    
    document.addEventListener('mousedown', () => {
        cursorEnlarged = true;
        toggleCursorSize(true);
    });
    
    document.addEventListener('mouseup', () => {
        cursorEnlarged = false;
        toggleCursorSize(false);
    });
    
    const clickables = document.querySelectorAll('a, button, .skill-item, .social-icon');
    clickables.forEach((elem) => {
        elem.addEventListener('mouseover', () => {
            cursorEnlarged = true;
            toggleCursorSize(true);
        });
        elem.addEventListener('mouseout', () => {
            cursorEnlarged = false;
            toggleCursorSize(false);
        });
    });
});