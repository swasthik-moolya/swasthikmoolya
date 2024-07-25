// JavaScript code for dynamically generating content (e.g., project cards, experience, blogs)
// Example: Generate project cards
const projectsContainer = document.querySelector('.project-cards');

const projects = [
    { name: 'Cake Shop Management System', description: 'Description of Project 1', technologies: 'HTML, CSS, JavaScript, DBMS' },
    { name: 'Dangerous Road Curvature Detection Using Edge Devices', description: 'Using Raspberry Pi', technologies: 'Python, OpenCV, Image Processing, RaspberryPi, IoT' }
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

const experienceContainer = document.querySelector('.experience-cards');

const experience = [
    { name: 'Python Full-Stack Developer', duration: '6 Months', skills: 'Python, Pandas, Numpy, Matplotlib, Flask, ReactJS'},
    { name: 'UI/UX Designer', duration: '2 Months', skills: 'UI/UX, Design Thinking, Wire-framing, Prototyping, StoryBoard'},
    { name: 'Internshala Students Partner', duration: '3 Months', skills: 'Communication, Social Media Marketing'}
];

experience.forEach(experienceItem => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h3>${experience.name}</h3>
        <p>${experience.duration}</p>
        <p>skills: ${experience.skills}</p>
    `;
    experienceContainer.appendChild(card);
});

// Similarly, you can add JavaScript for other sections like experience, blogs, etc.
