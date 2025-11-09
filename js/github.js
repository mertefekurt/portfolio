// ==========================================
// GitHub API Integration
// ==========================================
const username = 'mertefekurt';

// GitHub API endpoints
const endpoints = {
    user: `https://api.github.com/users/${username}`,
    repos: `https://api.github.com/users/${username}/repos`,
    activity: `https://api.github.com/users/${username}/events/public`
};

async function fetchGitHubData() {
    try {
        const [userResponse, reposResponse] = await Promise.all([
            fetch(endpoints.user),
            fetch(endpoints.repos)
        ]);

        if (userResponse.ok && reposResponse.ok) {
            const userData = await userResponse.json();
            const reposData = await reposResponse.json();

            updateGitHubStats(userData, reposData);
            
            loadLanguageStats(reposData);
            
            loadRecentActivity();
        }
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        showFallbackData();
    }
}

function updateGitHubStats(userData, reposData) {
    const stats = {
        repos: userData.public_repos,
        followers: userData.followers,
        stars: reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0)
    };

    document.getElementById('github-stats').innerHTML = `
        <div class="stat">
            <span class="stat-value">${stats.repos}</span>
            <span class="stat-label">Repositories</span>
        </div>
        <div class="stat">
            <span class="stat-value">${stats.followers}</span>
            <span class="stat-label">Followers</span>
        </div>
        <div class="stat">
            <span class="stat-value">${stats.stars}</span>
            <span class="stat-label">Stars</span>
        </div>
    `;
}

function loadLanguageStats(reposData) {
    const languages = {};
    
    reposData.forEach(repo => {
        if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
        }
    });

    const sortedLanguages = Object.entries(languages)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 6);

    const container = document.getElementById('github-languages');
    if (container) {
        container.innerHTML = sortedLanguages.map(([language, count]) => `
            <div class="language-item">
                <div class="language-name">${language}</div>
                <div class="language-bar">
                    <div class="bar" style="width: ${(count / reposData.length) * 100}%"></div>
                </div>
                <div class="language-count">${count} repos</div>
            </div>
        `).join('');
    }
}

async function loadRecentActivity() {
    try {
        const response = await fetch(endpoints.activity);
        if (response.ok) {
            const activities = await response.json();
            const recentActivities = activities.slice(0, 5);

            const container = document.getElementById('github-activity');
            if (container) {
                container.innerHTML = recentActivities.map(activity => {
                    const date = new Date(activity.created_at).toLocaleDateString();
                    return createActivityHTML(activity, date);
                }).join('');
            }
        }
    } catch (error) {
        console.error('Error loading activity:', error);
    }
}

function createActivityHTML(activity, date) {
    let icon, text;
    
    switch(activity.type) {
        case 'PushEvent':
            icon = 'code-branch';
            text = `Pushed to ${activity.repo.name}`;
            break;
        case 'CreateEvent':
            icon = 'plus';
            text = `Created ${activity.repo.name}`;
            break;
        case 'ForkEvent':
            icon = 'code-branch';
            text = `Forked ${activity.repo.name}`;
            break;
        case 'WatchEvent':
            icon = 'star';
            text = `Starred ${activity.repo.name}`;
            break;
        default:
            icon = 'circle';
            text = `Activity in ${activity.repo.name}`;
    }

    return `
        <div class="activity-item">
            <div class="activity-icon">
                <i class="fas fa-${icon}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-text">${text}</div>
                <div class="activity-date">${date}</div>
            </div>
            <a href="https://github.com/${activity.repo.name}" target="_blank" class="activity-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
        </div>
    `;
}

function showFallbackData() {
    document.getElementById('github-stats').innerHTML = `
        <div class="stat">
            <span class="stat-value">--</span>
            <span class="stat-label">Repositories</span>
        </div>
        <div class="stat">
            <span class="stat-value">--</span>
            <span class="stat-label">Followers</span>
        </div>
        <div class="stat">
            <span class="stat-value">--</span>
            <span class="stat-label">Stars</span>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', fetchGitHubData);