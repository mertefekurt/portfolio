
gsap.registerPlugin(ScrollTrigger);


window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    const progressBar = document.getElementById("scroll-indicator");
    progressBar.style.height = `${scrollPercent}%`;
});


gsap.from(".hero-left", {
    opacity: 0,
    x: -50,
    duration: 1.2,
    ease: "power3.out",
});

gsap.from(".hero-right", {
    opacity: 0,
    x: 50,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3,
});


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        gsap.utils.toArray(".skill-item").forEach((item, index) => {
            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: index * 0.08
            });
        });
    }, 500);
});

gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        delay: index * 0.2
    });
});


particlesJS("particles-hero", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#64ffda"
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#64ffda",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});