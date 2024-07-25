// JavaScript code for dynamically generating content (e.g., project cards, experience, blogs)
// Example: Generate project cards
const projectsContainer = document.querySelector('.project-cards');

const projects = [
    { name: 'Project 1', description: 'Description of Project 1', technologies: 'HTML, CSS, JavaScript' },
    { name: 'Project 2', description: 'Description of Project 2', technologies: 'React, Node.js, MongoDB' }
];

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p>Technologies used: ${project.technologies}</p>
    `;
    projectsContainer.appendChild(card);
});

// Similarly, you can add JavaScript for other sections like experience, blogs, etc.
