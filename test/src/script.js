const data = {
    // Update Ryan's projects
    projects: [
        {
            title: "BookHub",
            shortDesc: "Digital library management system",
            technologies: ["PHP", "MySQL", "JavaScript"],
            preview: "assets/img/projects/bookhub.jpg",
            github: "https://github.com/SemiAutomat1c/bookhub-clean",
            fullDescription: "A digital reading companion for book lovers to manage, read, and share books. I made it so you can finally organize your e-books before your collection gets out of hand."
        },
        {
            title: "POS System",
            shortDesc: "Modern point of sale system",
            technologies: ["Next.js", "TypeScript"],
            preview: "assets/img/projects/pos.jpg",
            github: "https://github.com/SemiAutomat1c/POS",
            fullDescription: "Built a sleek and modern POS system because who doesn't want to make checkout lines faster and cooler?"
        },
        {
            title: "Paluwagan",
            shortDesc: "Digital savings group manager",
            technologies: ["TypeScript", "JavaScript"],
            preview: "assets/img/projects/paluwagan.jpg",
            github: "https://github.com/SemiAutomat1c/paluwagan-system",
            fullDescription: "Created a platform to handle informal savings groups, payments, and member contributions — because who said saving can't be digital?"
        }
    ],
    // ...existing code...

    // Update Jayvien's projects
    projects: [
        {
            title: "Arté Booking",
            shortDesc: "Service appointment system",
            technologies: ["PHP", "MySQL"],
            preview: "assets/img/projects/Arte_web.png",
            github: "https://github.com/pasta-lover69/Arte_project",
            fullDescription: "A streamlined web-based platform that allows users to schedule, manage, and track service appointments with ease—designed for efficiency, real-time updates, and user convenience."
        },
        {
            title: "Ruby Projects",
            shortDesc: "Ruby programming exploration",
            technologies: ["Ruby"],
            preview: "assets/img/projects/rb.png",
            github: "https://github.com/pasta-lover69/Ruby-Projects",
            fullDescription: "Currently Learning Ruby to be more widely know the concept of each programming languages. And soon to learn the framework of each programming language."
        }
    ],
    // ...existing code...
};

function createProjectCards(projects) {
    const projectsContainer = document.createElement('div');
    projectsContainer.className = 'projects-grid';
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Project header with title
        const header = document.createElement('div');
        header.className = 'project-header';
        
        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = project.title;
        
        // Short description
        const desc = document.createElement('p');
        desc.className = 'project-short-desc';
        desc.textContent = project.shortDesc;
        
        // View Details button
        const detailsBtn = document.createElement('button');
        detailsBtn.className = 'view-details-btn';
        detailsBtn.textContent = 'View Details';
        detailsBtn.addEventListener('click', () => showProjectDetails(project));
        
        // Assemble card
        header.appendChild(title);
        card.appendChild(header);
        card.appendChild(desc);
        card.appendChild(detailsBtn);
        
        projectsContainer.appendChild(card);
    });
    
    return projectsContainer;
}

// Function to show detailed project modal
function showProjectDetails(project) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    modalContent.innerHTML = `
        <span class="modal-close">&times;</span>
        ${project.preview ? `<img src="${project.preview}" alt="${project.title}" class="project-preview">` : ''}
        <h2>${project.title}</h2>
        <p class="project-full-desc">${project.fullDescription}</p>
        <div class="project-tech-list">
            <h4>Technologies Used:</h4>
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        ${project.github ? `
            <div class="project-links">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="github-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        ` : ''}
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close button functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.onclick = () => modal.remove();
    
    // Click outside to close
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}
// ...existing code...