// script.js
document.addEventListener('DOMContentLoaded', function () {
    fetch('resume.json')
        .then(response => response.json())
        .then(data => {
            // Populate header
            document.getElementById('name').textContent = data.name;
            document.getElementById('contact').innerHTML = `
                <a href="mailto:${data.contact.email}">${data.contact.email}</a> | 
                ${data.contact.phone} | 
                <a href="${data.contact.portfolio}" target="_blank">Portfolio</a>
            `;

            // Populate education
            const educationList = document.getElementById('education-list');
            data.education.forEach(item => {
                let li = document.createElement('li');
                li.innerHTML = `<strong>${item.degree}</strong> - ${item.institution} (${item.duration})`;
                educationList.appendChild(li);
            });

            // Populate experience
            const experienceList = document.getElementById('experience-list');
            data.experience.forEach(item => {
                let li = document.createElement('li');
                li.innerHTML = `<strong>${item.title}</strong> - ${item.company} (${item.duration}): ${item.description}`;
                experienceList.appendChild(li);
            });

            // Populate projects
            const projectsList = document.getElementById('projects-list');
            data.projects.forEach(item => {
                let li = document.createElement('li');
                li.innerHTML = `<a href="${item.link}" target="_blank">${item.name}</a>: ${item.description}`;
                projectsList.appendChild(li);
            });

            // Populate skills
            const skillsList = document.getElementById('skills-list');
            data.skills.forEach(skill => {
                let li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });

            // Populate certifications
            const certificationsList = document.getElementById('certifications-list');
            data.certifications.forEach(cert => {
                let li = document.createElement('li');
                li.textContent = `${cert.name} (${cert.date})`;
                certificationsList.appendChild(li);
            });
        });
});
