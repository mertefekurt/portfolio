
document.addEventListener('DOMContentLoaded', () => {
    initializeSkillBars();
});

/**
 * Animate skill bars once they enter the viewport.
 */
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const level = progressBar.parentElement.parentElement.querySelector('.skill-progress').dataset.level;
                
                setTimeout(() => {
                    progressBar.style.width = level + '%';
                }, 200);
                
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            const icon = badge.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotateY(180deg)';
            }
        });
        
        badge.addEventListener('mouseleave', () => {
            const icon = badge.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotateY(0deg)';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const summaryNumbers = document.querySelectorAll('.summary-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target;
                const finalNumber = numberElement.textContent;
                
                const match = finalNumber.match(/(\d+)(\+|%)?/);
                if (match) {
                    const targetNumber = parseInt(match[1]);
                    const suffix = match[2] || '';
                    
                    animateNumber(numberElement, 0, targetNumber, suffix, 2000);
                }
                
                observer.unobserve(numberElement);
            }
        });
    }, {
        threshold: 0.5
    });
    
    summaryNumbers.forEach(number => {
        observer.observe(number);
    });
});

/**
 * Animate a numeric label using an eased counter.
 */
function animateNumber(element, start, end, suffix, duration) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentNumber = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = currentNumber + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}
