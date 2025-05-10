// Team Members Data
const teamMembers = [
    {
        id: 1,
        name: "Ryan Christian Deniega",
        title: "Web Developer & UI Designer",
        image: "assets/img/Ryan.JPEG",
        bio: "Hi, I'm Ryan Born in Pasay and raised in Mindanao, I discovered my passion for tech in high school mostly from playing a lot of online games and getting curious about what made them tick. That curiosity led me to web development, where I started building personal projects just for the fun (and frustration) of it. Now, I'm a Computer Science student at the University of Mindanao, focusing on web development and UI design. I spend most of my time coding, listening to music, and enjoying the peace of doing things solo.I believe great tech should feel natural — simple, intuitive, and made for everyone.",
        skills: ["HTML", "CSS", "JavaScript", "Photoshop", "UI Design"],
        interests: [
            "Exploring new web technologies and frameworks",
            "Mobile app development",
            "UI/UX design principles",
            "Open-source contribution",
            "Tech community events and hackathons"
        ],
        goals: [
            "Become a full-stack developer with expertise in modern frameworks",
            "Build a portfolio of meaningful projects that solve real problems",
            "Learn cloud technologies and deployment strategies",
            "Contribute to major open-source projects"
        ],
        quote: "CS student who lets the AI write half the code while I take full credit. Vibe coding at its finest.",
        education: [
            {
                level: "preschool",
                degree: "Early Childhood Education",
                institution: "Central Elementary School",
                year: "2006 - 2008",
                description: "Mastered snack time, naptime, and the art of sharing (sometimes)."
            },
            {
                level: "elementary",
                degree: "Elementary Education",
                institution: "Rizal Elementary School",
                year: "2008 - 2014",
                description: "Discovered a love for math, science, and finding excuses to go to the clinic."
            },
            {
                level: "junior",
                degree: "Junior High School",
                institution: "La filipina National High School",
                year: "2014 - 2018",
                description: " a former absentee expert who somehow made it to graduation — just in time."
            },
            {
                level: "senior",
                degree: "Senior High School - ICT",
                institution: "STI College Tagum",
                year: "2018 - 2020",
                description: "Coding, debugging, and occasionally asking Google very dumb questions."
            },
            {
                level: "college",
                degree: "BS in Computer Science",
                institution: "UM Tagum College",
                year: "2020 - Present",
                description: "Currently in 3rd year, vibe coding my way through projects, powered by AI and mild existential dread."
            },
        ],
        projects: [
            {
                title: "BookHub - Digital Reading Companion",
                description: "A digital reading companion for book lovers to manage, read, and share books. I made it so you can finally organize your e-books before your collection gets out of hand.",
                technologies: ["PHP", "MySQL", "Vanilla JavaScript", "CSS3", "PDF.js"],
                preview: "assets/img/projects/bookhub.jpg",
                github: "https://github.com/SemiAutomat1c/bookhub-clean"
            },
            {
                title: "Modern POS System",
                description: "Built a sleek and modern POS system because who doesn't want to make checkout lines faster and cooler?",
                technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
                preview: "assets/img/projects/pos.jpg",
                github: "https://github.com/SemiAutomat1c/POS"
            },
            {
                title: "Paluwagan Management System",
                description: "Created a platform to handle informal savings groups, payments, and member contributions — because who said saving can't be digital?",
                technologies: ["TypeScript", "CSS", "JavaScript"],
                preview: "assets/img/projects/paluwagan.jpg",
                github: "https://github.com/SemiAutomat1c/paluwagan-system"
            }
        ],
        contact: {
            email: "r.deniega.140107.tc@umindanao.edu.ph",
            github: "https://github.com/SemiAutomat1c",
            Facebook: "https://www.facebook.com/RyanDeniega.143/",
            Instagram: "https://www.instagram.com/ryan_0101010/",
            
        }
    },
    {
        id: 2,
        name: "Kyndel Roy Suarez",
        title: "Graphic Designer & Digital Artist",
        image: "assets/img/roy.jpg",
        bio: "My journey in art and design began when I was very young, drawing characters from my favorite animated shows. I grew up in a creative household where my mother, an elementary school art teacher, encouraged me to explore different artistic mediums. During my early school years at St. Mary's Elementary, I won several local art competitions which fueled my passion further. In junior high, I discovered digital design and taught myself how to use design software by watching online tutorials. Now at the University of Mindanao, I'm focusing on graphic design with a special interest in user interface aesthetics. I've worked on several campus publication designs and created logos for student organizations. My design philosophy combines clean aesthetics with functionality - I believe that good design should not only look beautiful but also serve its purpose effectively. Outside of design work, I enjoy photography and collecting vintage design books for inspiration.",
        skills: ["Graphic Design", "Illustration", "Photoshop", "Illustrator", "UI/UX"],
        interests: [
            "Graphic design and typography",
            "Digital illustration and animation",
            "User interface aesthetics",
            "Brand identity development",
            "Responsive design principles"
        ],
        goals: [
            "Become a professional UI/UX designer for leading tech companies",
            "Create a design system that can be implemented across various platforms",
            "Master the latest design tools and software",
            "Publish a portfolio of creative design work"
        ],
        quote: "Design is not just what it looks like and feels like. Design is how it works. I strive to create designs that are both beautiful and functional.",
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
        title: "Cybersecurity Specialist & Programmer",
        image: "assets/img/jeb.jpg",
        bio: `My fascination with tech started young—by age 6, I was already mastering Snake and Sudoku on my dad’s legendary Nokia 3310. Fast forward a few years, and you’d usually find me cutting class to play online games in computer cafés, unknowingly kickstarting my future in tech one respawn at a time.

            Born in Tagum City and raised in a family that treated education like gold, I was always curious about how things worked (especially if they had screens and buttons). At Max Mirafuentes Academy, I spent more time in front of a monitor than a whiteboard, but hey—at least I picked up some actual skills.

            After pushing through the ABM program at the University of Mindanao Tagum, I realized that business math wasn’t really my thing—cybersecurity and backend development were. Now I’m obsessed with creating secure systems, solving complex bugs, and occasionally yelling at my terminal like it’s a teammate who forgot to heal.`,
        skills: ["Python", "JavaScript", "Cybersecurity Analysis", "Problem Solving", "Algorithms"],
        interests: [
            "Cybersecurity and network defense",
            "Ethical hacking and penetration testing",
            "Algorithm optimization",
            "Backend development",
            "Data structures and systems architecture"
        ],
        goals: [
            "Become a certified cybersecurity specialist",
            "Develop secure systems that protect user data and privacy",
            "Contribute to the field of computer security research",
            "Start a company focused on digital security solutions"
        ],
        quote: "It's not a bug, it's a feature. Aiming to be the best in cybersecurity and programming. Ano? Bakit ng ba? You tell me, Damn it.",
        education: [
            {
                level: "preschool",
                degree: "Early Childhood Education",
                institution: "Divine Mercy School of Tagum",
                year: "2007 - 2008",
                description: "A preschooler who already knows how to write in cursive"
            },
            {
                level: "elementary",
                degree: "Elementary Education",
                institution: "Suaybaguio Riña Elementary School",
                year: "2013 - 2014",
                description: "Giving the math teacher they always wanted, but never got"
            },
            {
                level: "junior",
                degree: "Junior High School",
                institution: "Max Mirafuentes Academy",
                year: "2014 - 2018",
                description: "Where the real fun begins, and the bad habits occurs"
            },
            {
                level: "senior",
                degree: "Senior High School - ABM",
                institution: "University of Mindanao Tagum",
                year: "2018 - 2020",
                description: "Me in ABM class: debit 1,000,000 credit 1,000,001. Ano??"
            },
            {
                level: "college",
                degree: "Bachelor of Science in Computer Science",
                institution: "University of Mindanao Tagum",
                year: "2023 - present",
                description: "Where I learned that the best teachers are Indians and AI"
            }
        ],
        projects: [
            {
                title: "Arté Booking System",
                description: "A streamlined web-based platform that allows users to schedule, manage, and track service appointments with ease—designed for efficiency, real-time updates, and user convenience.",
                technologies: ["PHP", "MySQL", "HTML/CSS"],
                preview: "assets/img/projects/Arte_web.png",
                github: "https://github.com/pasta-lover69/Arte_project"
            },
            {
                title: "Ruby Projects",
                description: "Currently Learning Ruby to be more widely know the concept of each programming langguages. And soon to learn the framework of each programming language.",
                technologies: ["Ruby"],
                preview: "assets/img/projects/rb.png",
                github: "https://github.com/pasta-lover69/Ruby-Projects"
            }
        ],
        contact: {
            email: "jayvienmocallay7@gmail.com",
            github: "github.com/pasta-lover69",
            Twitter: "x.com/jebcasia",
            Instagram: "instagram.com/jebcasia",
            Facebook: "facebook.com/jeb.casia"
        }
    },
    {
        id: 4,
        name: "Nina Kristina Nillas",
        title: "Digital Content Creator & Media Specialist",
        image: "assets/img/Nina.jpg",
        bio: "My story begins in a home filled with books and stories, where my parents instilled in me a love for reading and creative expression. Growing up, I was always the one with a camera or notebook in hand, documenting everyday moments and turning them into stories. Throughout elementary and high school at St. Mary's, I was actively involved in the school newspaper and media club, where I discovered my talent for combining words and visuals to communicate ideas. My interest in digital media developed during my senior year when I created a video documentary about our school's history, which won a regional student media award. This experience opened my eyes to the power of multimedia storytelling. Currently studying at the University of Mindanao, I focus on digital media production while managing the university's social media content as a student assistant. I've developed skills in content planning, video production, and social media analytics. I believe that compelling content has the power to educate, inspire, and create meaningful connections. In my free time, I volunteer at a local community radio station and run a blog about student life and technology. My goal is to use digital media to give voice to important stories that might otherwise go untold.",
        skills: ["Content Writing", "Video Editing", "Social Media", "Photography", "Storytelling"],
        interests: [
            "Digital content creation and storytelling",
            "Social media strategy and analytics",
            "Video production and editing",
            "Written communication",
            "Digital marketing and audience engagement"
        ],
        goals: [
            "Develop compelling multimedia content for digital platforms",
            "Master the art of storytelling across different mediums",
            "Create a popular blog or YouTube channel on tech topics",
            "Lead content strategy for a major organization"
        ],
        quote: "Stories are the most powerful way to put ideas into the world. I aim to tell stories that connect people and technology in meaningful ways.",
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
                technologies: ["Video Editing", "Scriptwriting", "Interviewing"],
                github: "https://github.com/kristinanillas/school-documentary"
            },
            {
                title: "Community Stories Blog",
                description: "Created and manage a blog featuring stories from local community members.",
                technologies: ["WordPress", "Photography", "Content Writing"],
                github: "https://github.com/kristinanillas/community-stories"
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
    // Handle Loading Screen
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Simulate loading delay (you can adjust this time as needed)
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500); // Match this time with the CSS transition duration
    }, 1500);
    
    // Get references to main elements
    const teamNav = document.getElementById('team-nav');
    const teamContent = document.getElementById('team-content');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    // Initialize the page
    function init() {
        createNavigation();
        createTeamMemberSections();
        setupThemeToggle();
        setupScrollToTop();
        
        // Show the first team member by default
        showTeamMember(1);
        
        // Add scroll animations
        setupScrollAnimations();
    }
    
    // Setup Theme Toggle
    function setupThemeToggle() {
        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
        } else if (savedTheme === 'light') {
            document.body.classList.remove('dark-theme');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-theme');
        }
        
        // Add event listener to theme toggle button
        themeToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            // Save theme preference
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Setup Scroll to Top functionality
    function setupScrollToTop() {
        // Show/hide scroll-to-top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // Add click event to scroll to top
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
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
        
        // Left side with profile image - don't modify the image
        const imageContainer = document.createElement('div');
        imageContainer.className = 'member-image-container';
        
        const img = document.createElement('img');
        img.src = member.image;
        img.alt = member.name;
        img.className = 'member-image';
        
        imageContainer.appendChild(img);
        
        // Right side with member info
        const infoContainer = document.createElement('div');
        infoContainer.className = 'member-info-container';
        
        // Member name with highlight
        const nameContainer = document.createElement('div');
        nameContainer.className = 'member-name-container';
        
        const name = document.createElement('h2');
        name.className = 'member-name';
        name.textContent = member.name;
        
        nameContainer.appendChild(name);
        
        // Member title with icon
        const titleContainer = document.createElement('div');
        titleContainer.className = 'member-title-container';
        
        const titleIcon = document.createElement('span');
        titleIcon.className = 'title-icon';
        titleIcon.innerHTML = '<i class="fas fa-code"></i>';
        
        const title = document.createElement('p');
        title.className = 'member-title';
        title.textContent = member.title;
        
        titleContainer.appendChild(titleIcon);
        titleContainer.appendChild(title);
        
        // Skills section with improved layout
        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'skills-container';
        
        const skillsLabel = document.createElement('span');
        skillsLabel.className = 'skills-label';
        skillsLabel.textContent = 'Skills';
        
        const skills = document.createElement('div');
        skills.className = 'member-skills';
        
        member.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skills.appendChild(skillTag);
        });
        
        skillsContainer.appendChild(skillsLabel);
        skillsContainer.appendChild(skills);
        
        // Add all elements to their respective containers
        infoContainer.appendChild(nameContainer);
        infoContainer.appendChild(titleContainer);
        infoContainer.appendChild(skillsContainer);
        
        // Add containers to header
        header.appendChild(imageContainer);
        header.appendChild(infoContainer);
        
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
        
        aboutContent.appendChild(createAboutContent(member));
        
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
            
            // Add project preview image if available
            if (project.preview) {
                const projectPreview = document.createElement('div');
                projectPreview.className = 'project-preview';
                
                const img = document.createElement('img');
                img.src = project.preview;
                img.alt = `${project.title} Preview`;
                img.className = 'project-image';
                
                projectPreview.appendChild(img);
                projectCard.appendChild(projectPreview);
            } else {
                // Create a code snippet preview as fallback
                const codeSnippet = document.createElement('div');
                codeSnippet.className = 'code-snippet';
                codeSnippet.innerHTML = `<pre><code>// ${project.title} 
// A project using ${project.technologies.join(', ')}

function initializeProject() {
  console.log("Starting ${project.title}...");
  // Main functionality
  return true;
}</code></pre>`;
                
                projectCard.appendChild(codeSnippet);
            }
            
            // Create project header with title and GitHub link
            const projectHeader = document.createElement('div');
            projectHeader.className = 'project-header';
            
            const projectTitle = document.createElement('h3');
            projectTitle.className = 'project-title';
            projectTitle.textContent = project.title;
            
            projectHeader.appendChild(projectTitle);
            
            // Add GitHub icon with link if github property exists
            if (project.github) {
                const githubLink = document.createElement('a');
                githubLink.href = project.github;
                githubLink.className = 'github-link';
                githubLink.target = '_blank';
                githubLink.rel = 'noopener noreferrer';
                githubLink.setAttribute('aria-label', `GitHub repository for ${project.title}`);
                githubLink.title = "View GitHub Repository";
                
                const githubIcon = document.createElement('i');
                githubIcon.className = 'fab fa-github';
                
                githubLink.appendChild(githubIcon);
                projectHeader.appendChild(githubLink);
            }
            
            projectCard.appendChild(projectHeader);
            
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
        
        // Create section title
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'contact-section-title';
        
        const titleIcon = document.createElement('i');
        titleIcon.className = 'fas fa-address-card';
        
        const titleText = document.createElement('h3');
        titleText.textContent = 'Connect With Me';
        
        sectionTitle.appendChild(titleIcon);
        sectionTitle.appendChild(titleText);
        
        contactContent.appendChild(sectionTitle);
        
        const contactInfo = document.createElement('div');
        contactInfo.className = 'contact-info';
        
        // Create contact items
        for (const [key, value] of Object.entries(member.contact)) {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';
            
            // Icon based on contact type
            const icon = document.createElement('span');
            icon.className = `contact-icon ${key.toLowerCase()}`; // Add platform-specific class
            
            // Use Font Awesome icons
            switch(key.toLowerCase()) {
                case 'email':
                    icon.innerHTML = '<i class="fas fa-envelope"></i>';
                    break;
                case 'github':
                    icon.innerHTML = '<i class="fab fa-github"></i>';
                    break;
                case 'linkedin':
                    icon.innerHTML = '<i class="fab fa-linkedin"></i>';
                    break;
                case 'twitter':
                    icon.innerHTML = '<i class="fab fa-twitter"></i>';
                    break;
                case 'instagram':
                    icon.innerHTML = '<i class="fab fa-instagram"></i>';
                    break;
                case 'facebook':
                    icon.innerHTML = '<i class="fab fa-facebook-f"></i>';
                    break;
                case 'portfolio':
                    icon.innerHTML = '<i class="fas fa-globe"></i>';
                    break;
                case 'youtube':
                    icon.innerHTML = '<i class="fab fa-youtube"></i>';
                    break;
                default:
                    icon.innerHTML = '<i class="fas fa-link"></i>';
            }
            
            // Create link container
            const linkContainer = document.createElement('div');
            linkContainer.className = 'contact-link-container';
            
            // Create link label (platform name)
            const linkLabel = document.createElement('span');
            linkLabel.className = 'contact-platform';
            linkLabel.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            
            // Create link
            const link = document.createElement('a');
            link.className = 'contact-link';
            
            // Format link based on type
            if (key.toLowerCase() === 'email') {
                link.href = `mailto:${value}`;
            } else {
                link.href = value.startsWith('http') ? value : `https://${value}`;
            }
            
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = value;
            
            // Add label and link to container
            linkContainer.appendChild(linkLabel);
            linkContainer.appendChild(link);
            
            // Add icon and link container to contact item
            contactItem.appendChild(icon);
            contactItem.appendChild(linkContainer);
            
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
        
        // Get current active member and new member to show
        const currentMember = document.querySelector('.team-member.active');
        const newMember = document.querySelector(`.team-member[data-id="${id}"]`);
        
        // If there's a currently active member, fade it out before showing the new one
        if (currentMember && currentMember !== newMember) {
            // Add fade-out animation
            currentMember.classList.add('fade-out');
            
            // Wait for animation to complete before switching
            setTimeout(() => {
                currentMember.classList.remove('active', 'fade-out');
                
                // Now fade in the new member
                newMember.classList.add('active', 'fade-in');
                
                // Remove the animation class after it completes
                setTimeout(() => {
                    newMember.classList.remove('fade-in');
                }, 500);
            }, 300);
        } else {
            // No current active member, just show the new one with fade-in
            newMember.classList.add('active', 'fade-in');
            
            // Remove the animation class after it completes
            setTimeout(() => {
                newMember.classList.remove('fade-in');
            }, 500);
        }
        
        // Scroll to top of content
        window.scrollTo({
            top: teamNav.offsetTop,
            behavior: 'smooth'
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
        
        // Get the member section
        const memberSection = document.querySelector(`.team-member[data-id="${memberId}"]`);
        
        // Get the currently active tab content
        const currentTab = memberSection.querySelector('.tab-content.active');
        
        // Get the target tab content
        const targetTab = memberSection.querySelector(`.tab-content[data-tab="${tabName}"]`);
        
        // Only proceed if we're changing to a different tab
        if (currentTab !== targetTab) {
            // Add fade-out class to current tab
            currentTab.classList.add('tab-fade-out');
            
            // Wait for animation to complete
            setTimeout(() => {
                // Hide current tab
                currentTab.classList.remove('active', 'tab-fade-out');
                currentTab.setAttribute('hidden', '');
                
                // Show target tab with fade-in animation
                targetTab.classList.add('active', 'tab-fade-in');
                targetTab.removeAttribute('hidden');
                
                // Apply special animations if needed
                if (tabName === 'education') {
                    animateEducationItems(targetTab);
                }
                
                if (tabName === 'projects') {
                    animateProjectCards(targetTab);
                }
                
                // Remove animation class after it completes
                setTimeout(() => {
                    targetTab.classList.remove('tab-fade-in');
                }, 500);
            }, 300);
        }
    }
    
    // Setup scroll animations
    function setupScrollAnimations() {
        // Add scroll-triggered animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Apply to skill tags
        document.querySelectorAll('.skill-tag').forEach(tag => {
            observer.observe(tag);
        });
    }
    
    // Animate education items
    function animateEducationItems(container) {
        const items = container.querySelectorAll('.education-item');
        
        // Reset all items first
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'none';
        });
        
        // Force reflow to ensure transitions work
        container.offsetHeight;
        
        // Animate items with staggered delay
        items.forEach((item, index) => {
            // Different animation for odd vs even items for timeline effect
            if (index % 2 === 0) {
                item.style.transform = 'translateX(-30px)';
            } else {
                item.style.transform = 'translateX(30px)';
            }
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translate(0, 0)';
            }, 150 * index); // Staggered delay based on item index
        });
        
        // Animate the timeline line
        const timelineLine = container.querySelector('.timeline-line');
        if (timelineLine) {
            timelineLine.style.height = '0';
            timelineLine.style.transition = 'height 1.2s ease';
            
            setTimeout(() => {
                timelineLine.style.height = '100%';
            }, 300);
        }
    }
    
    // Animate project cards
    function animateProjectCards(container) {
        const cards = container.querySelectorAll('.project-card');
        
        // Reset all cards first
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9) translateY(30px)';
            card.style.transition = 'none';
        });
        
        // Force reflow
        container.offsetHeight;
        
        // Animate cards with staggered delay
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
            }, 150 * index);
        });
    }
    
    // Add this function to create expanded About content
    function createAboutContent(member) {
        const aboutContent = document.createElement('div');
        aboutContent.className = 'about-content';
        
        // Add bio paragraph
        const bio = document.createElement('p');
        bio.className = 'bio';
        bio.textContent = member.bio;
        aboutContent.appendChild(bio);
        
        // Add interests section
        if (member.interests && member.interests.length > 0) {
            const interestsTitle = document.createElement('h3');
            interestsTitle.className = 'about-section-title';
            interestsTitle.textContent = 'Interests';
            aboutContent.appendChild(interestsTitle);
            
            const interestsList = document.createElement('ul');
            interestsList.className = 'interests-list';
            
            member.interests.forEach(interest => {
                const interestItem = document.createElement('li');
                interestItem.textContent = interest;
                interestsList.appendChild(interestItem);
            });
            
            aboutContent.appendChild(interestsList);
        }
        
        // Add goals section
        if (member.goals && member.goals.length > 0) {
            const goalsTitle = document.createElement('h3');
            goalsTitle.className = 'about-section-title';
            goalsTitle.textContent = 'Professional Goals';
            aboutContent.appendChild(goalsTitle);
            
            const goalsList = document.createElement('ul');
            goalsList.className = 'goals-list';
            
            member.goals.forEach(goal => {
                const goalItem = document.createElement('li');
                goalItem.textContent = goal;
                goalsList.appendChild(goalItem);
            });
            
            aboutContent.appendChild(goalsList);
        }
        
        // Add quote if available
        if (member.quote) {
            const quoteContainer = document.createElement('div');
            quoteContainer.className = 'quote-container';
            
            const quote = document.createElement('blockquote');
            quote.className = 'personal-quote';
            quote.textContent = member.quote;
            
            quoteContainer.appendChild(quote);
            aboutContent.appendChild(quoteContainer);
        }
        
        return aboutContent;
    }
    
    // Initialize the page
    init();
});