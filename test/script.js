// Team Members Data
const teamMembers = [
    {
        id: 1,
        name: "Ryan Christian Deniega",
        title: "Team Member",
        image: "assets/img/Ryan.png",
        bio: "I'm a student with a passion for web development and design. I enjoy creating user-friendly interfaces and learning new technologies. In my free time, I like to work on personal coding projects and contribute to open-source.",
        skills: ["HTML", "CSS", "JavaScript", "Photoshop", "UI Design"],
        education: [
            {
                level: "preschool",
                degree: "Early Childhood Education",
                institution: "Sunshine Kids Preschool",
                year: "2010 - 2012",
                description: "Early foundation in learning through play and social interaction"
            },
            {
                level: "elementary",
                degree: "Elementary Education",
                institution: "St. Mary's Elementary",
                year: "2012 - 2018",
                description: "Excellence in Mathematics and Science, Member of the Science Club"
            },
            {
                level: "junior",
                degree: "Junior High School",
                institution: "St. Mary's High School",
                year: "2018 - 2022",
                description: "Class Representative, Active in Robotics Club"
            },
            {
                level: "senior",
                degree: "Senior High School - STEM",
                institution: "St. Mary's High School",
                year: "2022 - Present",
                description: "Focus on Computer Programming and Web Development"
            },
            {
                level: "college",
                degree: "Web Development Certification",
                institution: "Online Learning Platform",
                year: "2023",
                description: "Advanced web development and modern frameworks"
            }
        ],
        projects: [
            {
                title: "School News Website",
                description: "Designed and developed the school's news portal with article submission system.",
                technologies: ["HTML", "CSS", "JavaScript"]
            },
            {
                title: "Math Learning Game",
                description: "Interactive game to help elementary students learn basic math concepts.",
                technologies: ["JavaScript", "HTML Canvas", "CSS"]
            }
        ],
        contact: {
            email: "ryan@example.com",
            github: "github.com/ryancd",
            linkedin: "linkedin.com/in/ryancd"
        }
    },
    {
        id: 2,
        name: "Kyndel Roy Suarez",
        title: "Team Member",
        image: "assets/img/roy.jpg",
        bio: "I'm interested in graphic design and digital art. I enjoy creating visually appealing content and have a keen eye for detail. I'm currently exploring UI/UX design principles and how they can enhance user experience.",
        skills: ["Graphic Design", "Illustration", "Photoshop", "Illustrator", "UI/UX"],
        education: [
            {
                level: "preschool",
                degree: "Early Childhood Education",
                institution: "Sunshine Kids Preschool",
                year: "2010 - 2012",
                description: "Early foundation in learning through play and social interaction"
            },
            {
                level: "elementary",
                degree: "Elementary Education",
                institution: "St. Mary's Elementary",
                year: "2012 - 2018",
                description: "Excellence in Mathematics and Science, Member of the Science Club"
            },
            {
                level: "junior",
                degree: "Junior High School",
                institution: "St. Mary's High School",
                year: "2018 - 2022",
                description: "Class Representative, Active in Robotics Club"
            },
            {
                level: "senior",
                degree: "Senior High School - Art & Design",
                institution: "St. Mary's High School",
                year: "2022 - Present",
                description: "Focus on Graphic Design and Digital Art"
            },
            {
                level: "college",
                degree: "Digital Illustration Certification",
                institution: "Community Art Center",
                year: "2023",
                description: "Advanced techniques in digital illustration and design"
            }
        ],
        projects: [
            {
                title: "School Yearbook Design",
                description: "Lead designer for the annual school yearbook, creating layouts and graphics.",
                technologies: ["InDesign", "Photoshop", "Illustrator"]
            },
            {
                title: "Environmental Awareness Campaign",
                description: "Created posters and digital content for school's environmental initiative.",
                technologies: ["Illustrator", "Photoshop", "Digital Drawing"]
            }
        ],
        contact: {
            email: "kyndel@example.com",
            portfolio: "kyndelroy.design",
            instagram: "instagram.com/kyndelroy"
        }
    },
    {
        id: 3,
        name: "Jayvien Mocallay",
        title: "Team Member",
        image: "assets/img/Untitled.png",
        bio: "I'm passionate about programming and problem-solving. I enjoy working on challenging projects that require logical thinking and creativity. My goal is to develop applications that can make a positive impact on people's lives.",
        skills: ["Python", "JavaScript", "Data Analysis", "Problem Solving", "Algorithms"],
        education: [
            {
                level: "preschool",
                degree: "Early Childhood Education",
                institution: "Sunshine Kids Preschool",
                year: "2010 - 2012",
                description: "Early foundation in learning through play and social interaction"
            },
            {
                level: "elementary",
                degree: "Elementary Education",
                institution: "St. Mary's Elementary",
                year: "2012 - 2018",
                description: "Excellence in Mathematics and Science, Member of the Science Club"
            },
            {
                level: "junior",
                degree: "Junior High School",
                institution: "St. Mary's High School",
                year: "2018 - 2022",
                description: "Class Representative, Active in Robotics Club"
            },
            {
                level: "senior",
                degree: "Senior High School - STEM",
                institution: "St. Mary's High School",
                year: "2022 - Present",
                description: "Focus on Computer Programming and Data Analysis"
            },
            {
                level: "college",
                degree: "Python Programming Certification",
                institution: "Online Learning Platform",
                year: "2023",
                description: "Advanced Python programming and data analysis techniques"
            }
        ],
        projects: [
            {
                title: "Student Attendance System",
                description: "Developed an automated system to track and report student attendance.",
                technologies: ["Python", "SQLite", "HTML/CSS"]
            },
            {
                title: "Weather Data Analyzer",
                description: "Application that collects and visualizes local weather patterns.",
                technologies: ["Python", "Data Visualization", "APIs"]
            }
        ],
        contact: {
            email: "jayvien@example.com",
            github: "github.com/jayvienm",
            twitter: "twitter.com/jayvienm"
        }
    },
    {
        id: 4,
        name: "Kristina Nina Nillas",
        title: "Team Member",
        image: "assets/img/Nina.jpg",
        bio: "I'm interested in digital media and content creation. I enjoy writing, editing, and producing multimedia content. I believe in the power of storytelling and how it can be used to educate and inspire others.",
        skills: ["Content Writing", "Video Editing", "Social Media", "Photography", "Storytelling"],
        education: [
            {
                level: "preschool",
                degree: "Early Childhood Education",
                institution: "Sunshine Kids Preschool",
                year: "2010 - 2012",
                description: "Early foundation in learning through play and social interaction"
            },
            {
                level: "elementary",
                degree: "Elementary Education",
                institution: "St. Mary's Elementary",
                year: "2012 - 2018",
                description: "Excellence in Mathematics and Science, Member of the Science Club"
            },
            {
                level: "junior",
                degree: "Junior High School",
                institution: "St. Mary's High School",
                year: "2018 - 2022",
                description: "Class Representative, Active in Robotics Club"
            },
            {
                level: "senior",
                degree: "Senior High School - Media Studies",
                institution: "St. Mary's High School",
                year: "2022 - Present",
                description: "Focus on Digital Media and Storytelling"
            },
            {
                level: "college",
                degree: "Digital Storytelling Workshop",
                institution: "Youth Media Center",
                year: "2023",
                description: "Advanced techniques in digital storytelling and multimedia production"
            }
        ],
        projects: [
            {
                title: "School Documentary",
                description: "Produced a short documentary about the history of our school.",
                technologies: ["Video Editing", "Scriptwriting", "Interviewing"]
            },
            {
                title: "Community Stories Blog",
                description: "Created and manage a blog featuring stories from local community members.",
                technologies: ["WordPress", "Photography", "Content Writing"]
            }
        ],
        contact: {
            email: "kristina@example.com",
            portfolio: "kristinanillas.com",
            youtube: "youtube.com/kristinanillas"
        }
    }
];

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to main elements
    const teamNav = document.getElementById('team-nav');
    const teamContent = document.getElementById('team-content');
    
    // Initialize the page
    function init() {
        createNavigation();
        createTeamMemberSections();
        
        // Show the first team member by default
        showTeamMember(1);
    }
    
    // Create navigation buttons for each team member
    function createNavigation() {
        teamMembers.forEach(member => {
            const button = document.createElement('button');
            button.className = 'nav-button';
            button.setAttribute('data-id', member.id);
            button.textContent = member.name;
            
            button.addEventListener('click', function() {
                showTeamMember(member.id);
            });
            
            teamNav.appendChild(button);
        });
    }
    
    // Create HTML sections for each team member
    function createTeamMemberSections() {
        teamMembers.forEach(member => {
            // Create main container for team member
            const memberSection = document.createElement('section');
            memberSection.className = 'team-member';
            memberSection.setAttribute('data-id', member.id);
            
            // Create member header (image, name, title, skills)
            const memberHeader = createMemberHeader(member);
            
            // Create member content (tabs and tab content)
            const memberContent = document.createElement('div');
            memberContent.className = 'member-content';
            
            // Add header to content
            memberContent.appendChild(memberHeader);
            
            // Create tabs container
            const tabsContainer = document.createElement('div');
            tabsContainer.className = 'tabs-container';
            
            // Create tabs navigation
            const tabs = createTabs(member.id);
            
            // Create tab content
            const tabContents = createTabContents(member);
            
            // Add tabs and content to tabs container
            tabsContainer.appendChild(tabs);
            tabsContainer.appendChild(tabContents);
            
            // Add tabs container to member content
            memberContent.appendChild(tabsContainer);
            
            // Add member content to member section
            memberSection.appendChild(memberContent);
            
            // Add complete member section to team content
            teamContent.appendChild(memberSection);
        });
    }
    
    // Create the header section for a team member
    function createMemberHeader(member) {
        const header = document.createElement('div');
        header.className = 'member-header';
        
        // Member image
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        img.className = 'member-image';
        
        // Member name
        const name = document.createElement('h2');
        name.className = 'member-name';
        name.textContent = member.name;
        
        // Member title
        const title = document.createElement('p');
        title.className = 'member-title';
        title.textContent = member.title;
        
        // Member skills
        const skills = document.createElement('div');
        skills.className = 'member-skills';
        
        member.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skills.appendChild(skillTag);
        });
        
        // Add all elements to header
        header.appendChild(img);
        header.appendChild(name);
        header.appendChild(title);
        header.appendChild(skills);
        
        return header;
    }
    
    // Create tabs navigation
    function createTabs(memberId) {
        const tabs = document.createElement('div');
        tabs.className = 'tabs';
        tabs.setAttribute('role', 'tablist');
        
        // Create tab buttons
        const tabNames = ['About', 'Education', 'Projects', 'Contact'];
        
        tabNames.forEach((tabName, index) => {
            const tabButton = document.createElement('button');
            tabButton.className = 'tab-button' + (index === 0 ? ' active' : '');
            tabButton.textContent = tabName;
            tabButton.setAttribute('data-tab', tabName.toLowerCase());
            tabButton.setAttribute('data-member', memberId);
            tabButton.setAttribute('role', 'tab');
            tabButton.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
            tabButton.id = `tab-${tabName.toLowerCase()}-${memberId}`;
            tabButton.setAttribute('aria-controls', `panel-${tabName.toLowerCase()}-${memberId}`);
            
            tabButton.addEventListener('click', function() {
                switchTab(this);
            });
            
            tabs.appendChild(tabButton);
        });
        
        return tabs;
    }
    
    // Create tab content sections
    function createTabContents(member) {
        const tabContents = document.createElement('div');
        tabContents.className = 'tab-contents';
        
        // About tab content
        const aboutContent = document.createElement('div');
        aboutContent.className = 'tab-content active';
        aboutContent.setAttribute('data-tab', 'about');
        aboutContent.setAttribute('role', 'tabpanel');
        aboutContent.id = `panel-about-${member.id}`;
        aboutContent.setAttribute('aria-labelledby', `tab-about-${member.id}`);
        
        const bio = document.createElement('p');
        bio.className = 'bio';
        bio.textContent = member.bio;
        aboutContent.appendChild(bio);
        
        // Education tab content
        const educationContent = document.createElement('div');
        educationContent.className = 'tab-content';
        educationContent.setAttribute('data-tab', 'education');
        educationContent.setAttribute('role', 'tabpanel');
        educationContent.id = `panel-education-${member.id}`;
        educationContent.setAttribute('aria-labelledby', `tab-education-${member.id}`);
        educationContent.setAttribute('hidden', '');

        // Create timeline container
        const timelineContainer = document.createElement('div');
        timelineContainer.className = 'education-timeline';
        
        // Add timeline line
        const timelineLine = document.createElement('div');
        timelineLine.className = 'timeline-line';
        timelineContainer.appendChild(timelineLine);

        // Add education items
        member.education.forEach(edu => {
            const eduItem = document.createElement('div');
            eduItem.className = 'education-item';

            // Education level badge
            const levelBadge = document.createElement('span');
            levelBadge.className = `education-level level-${edu.level}`;
            levelBadge.textContent = edu.level.charAt(0).toUpperCase() + edu.level.slice(1);

            // Degree
            const degree = document.createElement('h3');
            degree.className = 'education-degree';
            degree.textContent = edu.degree;

            // School
            const school = document.createElement('p');
            school.className = 'education-school';
            school.textContent = edu.institution;

            // Year
            const year = document.createElement('p');
            year.className = 'education-year';
            year.textContent = edu.year;

            // Description
            const description = document.createElement('p');
            description.className = 'education-description';
            description.textContent = edu.description;

            // Append all elements
            eduItem.appendChild(levelBadge);
            eduItem.appendChild(degree);
            eduItem.appendChild(school);
            eduItem.appendChild(year);
            eduItem.appendChild(description);

            timelineContainer.appendChild(eduItem);
        });

        educationContent.appendChild(timelineContainer);
        
        // Projects tab content
        const projectsContent = document.createElement('div');
        projectsContent.className = 'tab-content';
        projectsContent.setAttribute('data-tab', 'projects');
        projectsContent.setAttribute('role', 'tabpanel');
        projectsContent.id = `panel-projects-${member.id}`;
        projectsContent.setAttribute('aria-labelledby', `tab-projects-${member.id}`);
        projectsContent.setAttribute('hidden', '');
        
        const projectsGrid = document.createElement('div');
        projectsGrid.className = 'projects-grid';
        
        member.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            const projectTitle = document.createElement('h3');
            projectTitle.className = 'project-title';
            projectTitle.textContent = project.title;
            
            const projectDesc = document.createElement('p');
            projectDesc.className = 'project-description';
            projectDesc.textContent = project.description;
            
            const projectTech = document.createElement('div');
            projectTech.className = 'project-tech';
            
            project.technologies.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag';
                techTag.textContent = tech;
                projectTech.appendChild(techTag);
            });
            
            projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectDesc);
            projectCard.appendChild(projectTech);
            
            projectsGrid.appendChild(projectCard);
        });
        
        projectsContent.appendChild(projectsGrid);
        
        // Contact tab content
        const contactContent = createContactContent(member);
        
        // Add all tab contents
        tabContents.appendChild(aboutContent);
        tabContents.appendChild(educationContent);
        tabContents.appendChild(projectsContent);
        tabContents.appendChild(contactContent);
        
        return tabContents;
    }

    // Create Contact content section
    function createContactContent(member) {
        const contactContent = document.createElement('div');
        contactContent.className = 'tab-content';
        contactContent.setAttribute('data-tab', 'contact');
        contactContent.setAttribute('role', 'tabpanel');
        contactContent.id = `panel-contact-${member.id}`;
        contactContent.setAttribute('aria-labelledby', `tab-contact-${member.id}`);
        contactContent.setAttribute('hidden', '');
        
        const contactInfo = document.createElement('div');
        contactInfo.className = 'contact-info';
        
        // Create contact items
        for (const [key, value] of Object.entries(member.contact)) {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';
            
            // Icon based on contact type
            const icon = document.createElement('span');
            icon.className = 'contact-icon';
            
            switch(key) {
                case 'email':
                    icon.textContent = '✉️';
                    break;
                case 'github':
                    icon.textContent = '💻';
                    break;
                case 'linkedin':
                    icon.textContent = '🔗';
                    break;
                case 'twitter':
                    icon.textContent = '🐦';
                    break;
                case 'instagram':
                    icon.textContent = '📷';
                    break;
                case 'portfolio':
                    icon.textContent = '🌐';
                    break;
                case 'youtube':
                    icon.textContent = '▶️';
                    break;
                default:
                    icon.textContent = '📱';
            }
            
            // Create link
            const link = document.createElement('a');
            link.className = 'contact-link';
            
            // Format link based on type
            if (key === 'email') {
                link.href = `mailto:${value}`;
            } else {
                link.href = value.startsWith('http') ? value : `https://${value}`;
            }
            
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = value;
            
            // Add icon and link to contact item
            contactItem.appendChild(icon);
            contactItem.appendChild(link);
            
            // Add contact item to contact info
            contactInfo.appendChild(contactItem);
        }
        
        contactContent.appendChild(contactInfo);
        return contactContent;
    }
    
    // Show a specific team member
    function showTeamMember(id) {
        // Update navigation buttons
        const navButtons = document.querySelectorAll('.nav-button');
        navButtons.forEach(button => {
            if (parseInt(button.getAttribute('data-id')) === id) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        // Show selected team member, hide others
        const memberSections = document.querySelectorAll('.team-member');
        memberSections.forEach(section => {
            if (parseInt(section.getAttribute('data-id')) === id) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
    
    // Switch between tabs
    function switchTab(tabButton) {
        // Get the tab name and member ID
        const tabName = tabButton.getAttribute('data-tab');
        const memberId = tabButton.getAttribute('data-member');
        
        // Update active tab button
        const tabButtons = document.querySelectorAll(`.tab-button[data-member="${memberId}"]`);
        tabButtons.forEach(button => {
            if (button === tabButton) {
                button.classList.add('active');
                button.setAttribute('aria-selected', 'true');
            } else {
                button.classList.remove('active');
                button.setAttribute('aria-selected', 'false');
            }
        });
        
        // Show selected tab content, hide others
        const memberSection = document.querySelector(`.team-member[data-id="${memberId}"]`);
        const tabContents = memberSection.querySelectorAll('.tab-content');
        
        tabContents.forEach(content => {
            if (content.getAttribute('data-tab') === tabName) {
                content.classList.add('active');
                content.removeAttribute('hidden');
            } else {
                content.classList.remove('active');
                content.setAttribute('hidden', '');
            }
        });
    }
    
    // Initialize the page
    init();
});