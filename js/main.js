
import config from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    initializePersonalInfo();
    initializeSkills();
    initializeExperience();
    initializeProjects();
    initializeContact();
    updateCopyright();
});

function initializePersonalInfo() {
    const heroName = document.querySelector('.hero-name');
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroName) heroName.textContent = config.name;
    if (heroTitle) heroTitle.textContent = config.title;
    
    const githubLink = document.getElementById('github');
    const linkedinLink = document.getElementById('linkedin');
    const emailLink = document.getElementById('email-link');
    
    if (githubLink) githubLink.href = `https://github.com/${config.github}`;
    if (linkedinLink) linkedinLink.href = `https://linkedin.com/in/${config.linkedin}`;
    if (emailLink) emailLink.href = `mailto:${config.email}`;
}

function initializeSkills() {
    // Skills are defined statically in the HTML; this hook is kept for future data-driven sections.
}

function initializeExperience() {
    const experienceContainer = document.querySelector('.experience-timeline');
    
    if (!experienceContainer) {
        console.log('Experience container not found, skipping experience initialization');
        return;
    }
    
    experienceContainer.innerHTML = '';
    
    config.experience.forEach((exp, index) => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        experienceItem.style.animationDelay = `${index * 0.2}s`;
        
        const achievementsList = exp.achievements.map(achievement => 
            `<li>
                <strong>${achievement.title}</strong> - ${achievement.description}
            </li>`
        ).join('');
        
        experienceItem.innerHTML = `
            <div class="experience-date">
                <span class="date-range">${exp.period}</span>
                <span class="duration">${exp.duration}</span>
            </div>
            <div class="experience-content">
                <div class="company-header">
                    <h3 class="position">${exp.position}</h3>
                    <p class="company">${exp.company}</p>
                    <p class="location">
                        <i class="fas fa-map-marker-alt"></i>
                        ${exp.location}
                    </p>
                </div>
                <div class="achievements">
                    <ul>
                        ${achievementsList}
                    </ul>
                </div>
            </div>
        `;
        
        experienceContainer.appendChild(experienceItem);
    });
}

function initializeProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (!projectsContainer) {
        console.log('Projects container not found, skipping projects initialization');
        return;
    }
    
    config.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const statusClass = project.status === 'Aktif' ? 'status-active' : 
                           project.status === 'Geliştirme Aşamasında' ? 'status-development' : 'status-planning';
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        const projectImage = project.image ? 
            `<div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
            </div>` : '';
        
        projectCard.innerHTML = `
            ${projectImage}
            <div class="project-header">
                <h3>${project.title}</h3>
                <span class="project-status ${statusClass}">${project.status}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${techTags}
            </div>
            <div class="project-links">
                ${project.github !== '#' ? 
                    `<a href="${project.github}" target="_blank" class="project-btn github-btn" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> GitHub
                    </a>` : 
                    `<span class="project-btn disabled">
                        <i class="fab fa-github"></i> GitHub (Yakında)
                    </span>`
                }
                ${project.demo !== '#' ? 
                    `<a href="${project.demo}" target="_blank" class="project-btn demo-btn" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>` : 
                    `<span class="project-btn disabled">
                        <i class="fas fa-external-link-alt"></i> Demo (Yakında)
                    </span>`
                }
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

function initializeContact() {
    const emailElement = document.getElementById('email');
    const githubElement = document.getElementById('github-username');
    
    if (emailElement) {
        emailElement.textContent = config.email;
        emailElement.href = `mailto:${config.email}`;
    }
    if (githubElement) {
        githubElement.textContent = `@${config.github}`;
        githubElement.href = `https://github.com/${config.github}`;
    }
    const linkedinElement = document.getElementById('linkedin-username');
    if (linkedinElement) {
        linkedinElement.textContent = config.name;
        linkedinElement.href = `https://www.linkedin.com/in/${config.linkedin}`;
    }
    
    const emailContactBtn = document.getElementById('email-contact-btn');
    const githubContactBtn = document.getElementById('github-contact-btn');
    const linkedinContactBtn = document.getElementById('linkedin-contact-btn');
    const mainContactBtn = document.getElementById('main-contact-btn');
    
    if (emailContactBtn) emailContactBtn.href = `mailto:${config.email}`;
    if (githubContactBtn) githubContactBtn.href = `https://github.com/${config.github}`;
    if (linkedinContactBtn) linkedinContactBtn.href = `https://linkedin.com/in/${config.linkedin}`;
    if (mainContactBtn) mainContactBtn.href = `mailto:${config.email}`;
}


function updateCopyright() {
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.textContent = `© ${new Date().getFullYear()} ${config.name}`;
    }
}
