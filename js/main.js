const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const year = document.querySelector("[data-year]");
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a[href^='#']");
const revealItems = document.querySelectorAll("[data-reveal]");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (header && "IntersectionObserver" in window) {
    const headerSentinel = document.createElement("span");
    headerSentinel.className = "header-sentinel";
    header.before(headerSentinel);

    const headerObserver = new IntersectionObserver(([entry]) => {
        header.classList.toggle("is-scrolled", !entry.isIntersecting);
    });

    headerObserver.observe(headerSentinel);
}

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.dataset.theme;
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("portfolio-theme", nextTheme);
    });
}

if (navToggle && navLinks) {
    const closeMenu = () => {
        navToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
        document.body.classList.remove("nav-open");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!isOpen));
        navLinks.classList.toggle("is-open", !isOpen);
        document.body.classList.toggle("nav-open", !isOpen);
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            closeMenu();
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}

if ("IntersectionObserver" in window && sections.length && links.length) {
    const activeSection = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            links.forEach((link) => {
                link.toggleAttribute("aria-current", link.getAttribute("href") === `#${entry.target.id}`);
            });
        });
    }, {
        rootMargin: "-38% 0px -55% 0px",
        threshold: 0.01
    });

    sections.forEach((section) => activeSection.observe(section));
}

if ("IntersectionObserver" in window && revealItems.length) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        });
    }, {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12
    });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}
