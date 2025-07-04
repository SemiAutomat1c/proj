// Team Members Data
const teamMembers = [
    {
        id: 1,
        name: "Ryan Christian Deniega",
        title: "Web Developer & UI Designer",
        image: "assets/img/Ryan.JPEG",
        bio: "Hi, I'm Ryan. I discovered my passion for tech in high school mostly from playing a lot of online games and getting curious about what made them tick. That curiosity led me to web development, where I started building personal projects just for the fun (and frustration) of it. Now, I'm a Computer Science student at the University of Mindanao, focusing on web development and UI design. I spend most of my time coding, listening to music, and enjoying the peace of doing things solo.I believe great tech should feel natural — simple, intuitive, and made for everyone.",
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
                github: "https://github.com/SemiAutomat1c/bookhub-clean",
                website: "https://bookhub-clean.vercel.app/"
            },
            {
                title: "Modern POS System",
                description: "Built a sleek and modern POS system because who doesn't want to make checkout lines faster and cooler?",
                technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
                preview: "assets/img/projects/POS.png",
                github: "https://github.com/SemiAutomat1c/POS",
                website: "https://gadgettrack.vercel.app/"``
            },
            {
                title: "Paluwagan Management System",
                description: "Created a platform to handle informal savings groups, payments, and member contributions — because who said saving can't be digital?",
                technologies: ["TypeScript", "CSS", "JavaScript"],
                preview: "assets/img/projects/paluwagan.jpg",
                github: "https://github.com/SemiAutomat1c/paluwagan-system",
                website: "https://paluwagan-system.vercel.app/"
            },
            {
                title: "Portfolio Commission",
                description: "Developed a dynamic portfolio commission website that showcases work, handles client inquiries, and offers a smooth user experience with animations — because every great portfolio deserves a great presentation.",
                technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Nodemailer", "React Icons"],
                preview: "assets/img/projects/Pillo.png",  
                github: "https://github.com/SemiAutomat1c/VidEditPortfolioCommision",
                website: "https://jayromepillo.vercel.app/"
            },
            
             {
    title: "Text-to-Image Converter",
    description: "A web-based tool that converts text or code into properly formatted images, specifically designed for creating cheat sheets and answer keys. The tool automatically arranges the content on A4 pages for easy printing and cutting.",
    technologies: ["HTML", "CSS", "JavaScript"],
    preview: "assets/img/projects/text2image.png",
    github: "https://github.com/SemiAutomat1c/text-to-image-cheatsheet",
    website: "https://text-to-image-cheatsheet.vercel.app/"
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
        title: "Software/AI Engineer",
        image: "assets/img/roy.jpg",
        bio: "My journey in tech began when I was very young, tinkering with gadgets and exploring how they worked. I grew up in a household that encouraged curiosity and problem-solving, which naturally led me to programming. During my early school years at St. Mary's Elementary, I excelled in math and science, which fueled my passion for technology. In junior high, I discovered software development and taught myself coding by building small projects and experimenting with different programming languages. Now at the University of Mindanao, I'm focusing on software engineering with a special interest in backend systems and cloud computing. I've worked on several academic projects and contributed to open-source initiatives. My engineering philosophy combines clean code with efficient problem-solving - I believe that great software should not only work seamlessly but also be maintainable and scalable. Outside of coding, I enjoy reading tech blogs and participating in hackathons for inspiration.",
        skills: ["JavaScript", "Python", "Node.js", "React", "Cloud Computing"],
        interests: [
            "Backend development and APIs",
            "Cloud infrastructure and deployment",
            "Algorithm design and optimization",
            "Open-source contribution",
            "Tech community events and hackathons"
        ],
        goals: [
            "Become a lead software engineer in a tech company",
            "Develop scalable backend systems for large-scale applications",
            "Master cloud technologies like AWS and Azure",
            "Contribute to open-source projects that impact the tech community"
        ],
        quote: "Code is like humor. When you have to explain it, it's bad. I strive to write code that speaks for itself.",
        education: [
            {
                level: "preschool",
                degree: "Early Childhood Education",
                institution: "Anderson Elementary School",
                year: "2007 - 2009",
                description: "Early foundation in learning through play and social interaction"
            },
            {
                level: "elementary",
                degree: "Elementary Education",
                institution: "Anderson Elementary School",
                year: "2009 - 2015",
                description: "Excellence in Mathematics and Science, Member of the Science Club"
            },
            {
                level: "junior",
                degree: "Junior High School",
                institution: "Justino Sevilla Junior High School",
                year: "2015 - 2019",
                description: "Class President, Active in Science Club and Journalism"
            },
            {
                level: "senior",
                degree: "Senior High School - ABM",
                institution: "Justino Sevilla Senior High School",
                year: "2019 - 2021",
                description: "Studied in the ABM track, focusing on business and technology"
            },
            {
                level: "college",
                degree: "BS in Computer Science",
                institution: "University of Mindanao Tagum",
                year: "2023-2025",
                description: "Advanced techniques in software engineering and cloud computing"
            }
        ],
        projects: [
            {
                title: "Arté Booking System",
                description: "A streamlined web-based platform that allows users to schedule, manage, and track service appointments with ease—designed for efficiency, real-time updates, and user convenience.",
                technologies: ["PHP", "MySQL", "HTML/CSS"],
                preview: "assets/img/projects/Arte_web.png",
                github: "https://github.com/pasta-lover69/Arte_project",
                website: "https://arte-booking.vercel.app/"
            },
            {
              title: "Team Portfolio Website - CS15 Project",
              description: "A responsive and interactive team portfolio website for the CS15 Web Design & Development course at University of Mindanao.",
              technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
              preview: "assets/img/projects/proj.jpg",
              github: "https://github.com/SemiAutomat1c/proj",
              website: "https://cs15-portfolio.vercel.app/"
            }
        ],
        contact: {
            email: "k.bangoy.suarez@gmail.com",
            github: "https://github.com/KyndelRoy",
            instagram: "instagram.com/kyndelroy",
        }
    },
    {
        id: 3,
        name: "Jayvien Mocallay",
        title: "Cybersecurity Specialist & Programmer",
        image: "assets/img/jeb.jpg",
        bio: `My fascination with tech started young—by age 6, I was already mastering Snake and Sudoku on my dad's legendary Nokia 3310. Fast forward a few years, and you'd usually find me cutting class to play online games in computer cafés, unknowingly kickstarting my future in tech one respawn at a time.

            Born in Tagum City and raised in a family that treated education like gold, I was always curious about how things worked (especially if they had screens and buttons). At Max Mirafuentes Academy, I spent more time in front of a monitor than a whiteboard, but hey—at least I picked up some actual skills.

            After pushing through the ABM program at the University of Mindanao Tagum, I realized that business math wasn't really my thing—cybersecurity and backend development were. Now I'm obsessed with creating secure systems, solving complex bugs, and occasionally yelling at my terminal like it's a teammate who forgot to heal.`,
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
        quote: "Ano? Bakit nga ba? You tell me, Damn it.",
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
                degree: "BS in Computer Science",
                institution: "University of Mindanao Tagum",
                year: "2023 - present",
                description: "Where I learned that the best teachers are Indians and AI"
            }
        ],
        projects: [
            {
                title: "Password Manager",
                description: "A secure password manager that allows users to store, generate, and manage their passwords safely. Built with Python and Tkinter for a user-friendly interface.",
                technologies: ["Python", "Tkinter", "JavaScript", "HTML/CSS"],
                preview: "assets/img/pm.png",
                github: "https://github.com/pasta-lover69/Password-Manager",
                website: "https://password-manager-62hc.onrender.com/"
            },

            {
                title: "Ruby Projects",
                description: "Currently Learning Ruby to be more widely know the concept of each programming langguages. And soon to learn the framework of each programming language.",
                technologies: ["Ruby"],
                preview: "assets/img/projects/rb.png",
                github: "https://github.com/pasta-lover69/Ruby-Projects"
            },
            {
                title: "Arté Booking System",
                description: "A streamlined web-based platform that allows users to schedule, manage, and track service appointments with ease—designed for efficiency, real-time updates, and user convenience.",
                technologies: ["PHP", "MySQL", "HTML/CSS"],
                preview: "assets/img/projects/Arte_web.png",
                github: "https://github.com/pasta-lover69/Arte_project"
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
        title: "Machine Learning Engineer",
        image: "assets/img/Nina.jpg",
        bio: "Back in junior high, I absolutely dreaded ICT. It was all about coding HTML in Notepad, which felt less like building a website and more like arguing with a brick wall. I swore I'd never touch anything that even smelled like web development again. Fast forward to 2023: there I was, proudly showing off my little coding projects—like a calculator and a bato-bato pick (rock-paper-scissors) game—like I had just hacked into NASA. Somehow, I had gone from anti-code to kind-of-obsessed. Eventually, I made the bold (and slightly terrifying) decision to shift from Hospitality Management to Computer Science—a choice that took me six months, three existential crises, and countless cups of coffee to finalize. The first few months felt like being thrown into the deep end… without knowing how to swim... and the pool was full of JavaScript errors. I had zero tech background and survived purely on self-study, YouTube tutorials, and BroCode's soothing voice. There were times I seriously wondered if I had made a huge mistake choosing this so-called \"fun\" program. But now, in my second year, I'm leveling up. I'm solving complex problems, diving into algorithms, and honestly, some of it feels like trying to master Sova lineups in Valorant—equal parts strategy, precision, and frustration. And weirdly enough… I love it.",
        skills: ["JAVA", "HTML", "MySQL", "PYTHON", "CSS"],
        interests: [
            "Artificial Intelligence & Machine Learning ",
            "Backend Development",
            "Data Analytics",
            "Cybersecurity Fundamentals",
            "Database Management"
        ],
        goals: [
            "Design Scalable Machine Learning Pipelines",
            "Develop a full-stack application from scratch",
            "Gain experience in agile development and team collaboration",
            "Get a job in your desired field (software engineering, data science, etc.)"
        ],
        quote: "recent search history was how to center a div.",
        education: [
            {
                level: "preschool",
                degree: "Early Childhood Education",
                institution: "Nabunturan Elementary School",
                year: "2009 - 2010",
                description: "The only time my problem was choosing the best color for my drawing book "
            },
            {
                level: "elementary",
                degree: "Elementary Education",
                institution: "Nabunturan Elementary School SPED Center",
                year: "2010 - 2016",
                description: "Award: Most Punctual"
            },
            {
                level: "junior",
                degree: "Junior High School",
                institution: "Assumption College of Nabunturan",
                year: "2016 - 2020",
                description: "Our ICT subject taught us to code in HTML... I HATE ICT "
            },
            {
                level: "senior",
                degree: "Senior High School - Accountancy, Business, and Management (ABM) ",
                institution: "AAssumption College of Nabunturan",
                year: "2020-2022",
                description: "Teacher: na kuha ang trial balance? me: na kuha ang unsa maam?"
            },
            {
                level: "college",
                degree: "BS in Computer Science",
                institution: "University of Mindanao Tagum College",
                year: "2023-present",
                description: "How to center a div?"
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
            email: "ninakristinanillas@gmail.com",
            Facebook: "facebook.com/kristina.nillas",
            linked: "linkedin.com/in/nina-kristina-nillas",
            github:"github.com/print-betty"
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

        if (savedTheme === 'light') {
            document.body.classList.remove('dark-theme');
        } else {
            // Default to dark theme if no preference is set or if dark was previously selected
            document.body.classList.add('dark-theme');
            if (!savedTheme) {
                localStorage.setItem('theme', 'dark');
            }
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
        // Clear any existing navigation buttons first
        teamNav.innerHTML = '';
        
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

        // Create education timeline
        const educationTimeline = document.createElement('div');
        educationTimeline.className = 'education-timeline';
        
        // Add an educational journey title with icon
        const educationJourneyTitle = document.createElement('div');
        educationJourneyTitle.className = 'education-journey-title';
        educationJourneyTitle.innerHTML = `
            <i class="fas fa-graduation-cap"></i>
            <h3>Educational Journey</h3>
        `;
        educationContent.appendChild(educationJourneyTitle);
        
        const timelineLine = document.createElement('div');
        timelineLine.className = 'timeline-line';
        educationTimeline.appendChild(timelineLine);

        if (member.education && member.education.length > 0) {
        member.education.forEach(edu => {
                const educationItem = document.createElement('div');
                educationItem.className = `education-item level-${edu.level}`;

                // Add education level badge with better styling
                const levelBadge = document.createElement('div');
            levelBadge.className = `education-level level-${edu.level}`;
                
                // Choose appropriate icon based on level
                let levelIcon = '';
                switch(edu.level) {
                    case 'preschool':
                        levelIcon = 'fa-child';
                        break;
                    case 'elementary':
                        levelIcon = 'fa-book';
                        break;
                    case 'junior':
                        levelIcon = 'fa-pencil-alt';
                        break;
                    case 'senior':
                        levelIcon = 'fa-user-graduate';
                        break;
                    case 'college':
                        levelIcon = 'fa-university';
                        break;
                    default:
                        levelIcon = 'fa-book';
                }
                
                levelBadge.innerHTML = `<i class="fas ${levelIcon}"></i> ${edu.level.charAt(0).toUpperCase() + edu.level.slice(1)}`;
                educationItem.appendChild(levelBadge);
                
                // Degree header with icon
                const degreeContainer = document.createElement('div');
                degreeContainer.className = 'degree-container';
                
                const degreeIcon = document.createElement('span');
                degreeIcon.className = 'degree-icon';
                degreeIcon.innerHTML = '<i class="fas fa-award"></i>';
                
            const degree = document.createElement('h3');
            degree.className = 'education-degree';
            degree.textContent = edu.degree;

                degreeContainer.appendChild(degreeIcon);
                degreeContainer.appendChild(degree);
                educationItem.appendChild(degreeContainer);
                
                // School with icon
                const schoolContainer = document.createElement('div');
                schoolContainer.className = 'school-container';
                
                const schoolIcon = document.createElement('span');
                schoolIcon.className = 'school-icon';
                schoolIcon.innerHTML = '<i class="fas fa-school"></i>';
                
                const school = document.createElement('div');
            school.className = 'education-school';
            school.textContent = edu.institution;

                schoolContainer.appendChild(schoolIcon);
                schoolContainer.appendChild(school);
                educationItem.appendChild(schoolContainer);
                
                // Year with icon
                const yearContainer = document.createElement('div');
                yearContainer.className = 'year-container';
                
                const yearIcon = document.createElement('span');
                yearIcon.className = 'year-icon';
                yearIcon.innerHTML = '<i class="fas fa-calendar-alt"></i>';
                
                const year = document.createElement('div');
            year.className = 'education-year';
            year.textContent = edu.year;

                yearContainer.appendChild(yearIcon);
                yearContainer.appendChild(year);
                educationItem.appendChild(yearContainer);
                
                // Description with improved styling
                const descriptionContainer = document.createElement('div');
                descriptionContainer.className = 'description-container';
                
                const descriptionIcon = document.createElement('span');
                descriptionIcon.className = 'description-icon';
                descriptionIcon.innerHTML = '<i class="fas fa-quote-left"></i>';
                
            const description = document.createElement('p');
            description.className = 'education-description';
            description.textContent = edu.description;

                descriptionContainer.appendChild(descriptionIcon);
                descriptionContainer.appendChild(description);
                educationItem.appendChild(descriptionContainer);
                
                // Add achievements if available
                if (edu.achievements) {
                    const achievementsContainer = document.createElement('div');
                    achievementsContainer.className = 'achievements-container';
                    
                    const achievementsTitle = document.createElement('h4');
                    achievementsTitle.className = 'achievements-title';
                    achievementsTitle.innerHTML = '<i class="fas fa-trophy"></i> Key Achievements';
                    achievementsContainer.appendChild(achievementsTitle);
                    
                    const achievementsList = document.createElement('ul');
                    achievementsList.className = 'achievements-list';
                    
                    edu.achievements.forEach(achievement => {
                        const achievementItem = document.createElement('li');
                        achievementItem.textContent = achievement;
                        achievementsList.appendChild(achievementItem);
                    });
                    
                    achievementsContainer.appendChild(achievementsList);
                    educationItem.appendChild(achievementsContainer);
                }
                
                educationTimeline.appendChild(educationItem);
            });
        } else {
            const noEducation = document.createElement('p');
            noEducation.className = 'no-content-message';
            noEducation.textContent = 'No education history available.';
            educationTimeline.appendChild(noEducation);
        }
        
        educationContent.appendChild(educationTimeline);
        
        // Projects tab content
        const projectsContent = document.createElement('div');
        projectsContent.className = 'tab-content';
        projectsContent.setAttribute('data-tab', 'projects');
        projectsContent.setAttribute('role', 'tabpanel');
        projectsContent.id = `panel-projects-${member.id}`;
        projectsContent.setAttribute('aria-labelledby', `tab-projects-${member.id}`);
        projectsContent.setAttribute('hidden', '');
        
        if (member.projects && member.projects.length > 0) {
            // Use the new createProjectCards function to generate project cards
            projectsContent.appendChild(createProjectCards(member.projects));
        } else {
            const noProjects = document.createElement('p');
            noProjects.className = 'no-content-message';
            noProjects.textContent = 'No projects available.';
            projectsContent.appendChild(noProjects);
        }
        
        // Contact tab content - using the dedicated function
        const contactContent = createContactContent(member);
        
        // Add all tab content sections to tab contents container
        tabContents.appendChild(aboutContent);
        tabContents.appendChild(educationContent);
        tabContents.appendChild(projectsContent);
        tabContents.appendChild(contactContent);
        
        return tabContents;
    }

    // Create contact information content
    function createContactContent(member) {
        const contactContent = document.createElement('div');
        contactContent.className = 'tab-content';
        contactContent.setAttribute('data-tab', 'contact');
        contactContent.setAttribute('role', 'tabpanel');
        contactContent.id = `panel-contact-${member.id}`;
        contactContent.setAttribute('aria-labelledby', `tab-contact-${member.id}`);
        contactContent.setAttribute('hidden', '');
        
        // Contact container
        const contactContainer = document.createElement('div');
        contactContainer.className = 'contact-content';
        
        // Contact information list
        const contactInfo = document.createElement('div');
        contactInfo.className = 'contact-info';
        
        // Contact section title
        const contactSectionTitle = document.createElement('div');
        contactSectionTitle.className = 'contact-section-title';
        contactSectionTitle.innerHTML = `
            <i class="fas fa-address-card"></i>
            <h3>Contact Information</h3>
        `;
        contactInfo.appendChild(contactSectionTitle);
        
        // Create each contact item
        if (member.contact) {
            Object.entries(member.contact).forEach(([platform, link]) => {
                let icon;
                switch (platform.toLowerCase()) {
                case 'email':
                        icon = 'fa-envelope';
                    break;
                case 'github':
                        icon = 'fa-github';
                    break;
                case 'twitter':
                        icon = 'fa-twitter';
                    break;
                    case 'linkedin':
                        icon = 'fa-linkedin';
                    break;
                case 'portfolio':
                        icon = 'fa-globe';
                    break;
                    case 'facebook':
                        icon = 'fa-facebook';
                        break;
                    case 'instagram':
                        icon = 'fa-instagram';
                    break;
                default:
                        icon = 'fa-link';
                }
                
                const contactItem = document.createElement('div');
                contactItem.className = 'contact-item';
                
                const contactIcon = document.createElement('div');
                contactIcon.className = `contact-icon ${platform.toLowerCase()}`;
                contactIcon.innerHTML = `<i class="fab ${icon}"></i>`;
                
                const contactLinkContainer = document.createElement('div');
                contactLinkContainer.className = 'contact-link-container';
                
                const contactPlatform = document.createElement('div');
                contactPlatform.className = 'contact-platform';
                contactPlatform.textContent = platform;
                
                const contactLink = document.createElement('a');
                contactLink.className = 'contact-link';
                contactLink.textContent = link;
                
                if (platform.toLowerCase() === 'email') {
                    contactLink.href = `mailto:${link}`;
            } else {
                    contactLink.href = link.startsWith('http') ? link : `https://${link}`;
                    contactLink.target = '_blank';
                    contactLink.rel = 'noopener noreferrer';
            }
            
                contactLinkContainer.appendChild(contactPlatform);
                contactLinkContainer.appendChild(contactLink);
            
            contactItem.appendChild(contactIcon);
            contactItem.appendChild(contactLinkContainer);
            
            contactInfo.appendChild(contactItem);
            });
        }
        
        contactContainer.appendChild(contactInfo);
        
        // Add contact form
        const contactForm = document.createElement('div');
        contactForm.className = 'contact-form-container';
        
        // Contact form title
        const formTitle = document.createElement('div');
        formTitle.className = 'contact-section-title';
        formTitle.innerHTML = `
            <i class="fas fa-paper-plane"></i>
            <h3>Send a Message</h3>
        `;
        
        // Create form
        const form = document.createElement('form');
        form.className = 'contact-form';
        form.setAttribute('action', '#'); // In a real app, set to proper form handler
        form.setAttribute('method', 'post');
        
        // Name input
        const nameGroup = document.createElement('div');
        nameGroup.className = 'form-group';
        
        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', `name-${member.id}`);
        nameLabel.textContent = 'Your Name';
        
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('id', `name-${member.id}`);
        nameInput.setAttribute('name', 'name');
        nameInput.setAttribute('placeholder', 'Enter your name');
        nameInput.required = true;
        
        nameGroup.appendChild(nameLabel);
        nameGroup.appendChild(nameInput);
        
        // Email input
        const emailGroup = document.createElement('div');
        emailGroup.className = 'form-group';
        
        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', `email-${member.id}`);
        emailLabel.textContent = 'Your Email';
        
        const emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('id', `email-${member.id}`);
        emailInput.setAttribute('name', 'email');
        emailInput.setAttribute('placeholder', 'Enter your email');
        emailInput.required = true;
        
        emailGroup.appendChild(emailLabel);
        emailGroup.appendChild(emailInput);
        
        // Message textarea
        const messageGroup = document.createElement('div');
        messageGroup.className = 'form-group';
        
        const messageLabel = document.createElement('label');
        messageLabel.setAttribute('for', `message-${member.id}`);
        messageLabel.textContent = 'Message';
        
        const messageTextarea = document.createElement('textarea');
        messageTextarea.setAttribute('id', `message-${member.id}`);
        messageTextarea.setAttribute('name', 'message');
        messageTextarea.setAttribute('placeholder', 'Enter your message');
        messageTextarea.setAttribute('rows', '5');
        messageTextarea.required = true;
        
        messageGroup.appendChild(messageLabel);
        messageGroup.appendChild(messageTextarea);
        
        // Submit button
        const submitBtn = document.createElement('button');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.className = 'submit-button';
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        
        // Add event listener for form submission (demo only)
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show a success message (in real app, would send the form data)
            const formSuccess = document.createElement('div');
            formSuccess.className = 'form-success';
            formSuccess.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Message sent successfully! (Demo only)</p>
            `;
            
            // Replace form with success message
            form.innerHTML = '';
            form.appendChild(formSuccess);
            
            // Reset form after 3 seconds in this demo
            setTimeout(() => {
                form.reset();
                form.innerHTML = '';
                form.appendChild(nameGroup);
                form.appendChild(emailGroup);
                form.appendChild(messageGroup);
                form.appendChild(submitBtn);
            }, 3000);
        });
        
        // Assemble form
        form.appendChild(nameGroup);
        form.appendChild(emailGroup);
        form.appendChild(messageGroup);
        form.appendChild(submitBtn);
        
        // Add form to container
        contactForm.appendChild(formTitle);
        contactForm.appendChild(form);
        
        // Add form container to contact content
        contactContainer.appendChild(contactForm);
        
        // Add container to tab content
        contactContent.appendChild(contactContainer);
        
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
        const journeyTitle = container.parentNode.querySelector('.education-journey-title');
        
        // Animate the title first
        if (journeyTitle) {
            journeyTitle.style.opacity = '0';
            journeyTitle.style.transform = 'translateY(-20px)';
            
            // Force reflow
            journeyTitle.offsetHeight;
            
            journeyTitle.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            journeyTitle.style.opacity = '1';
            journeyTitle.style.transform = 'translateY(0)';
        }
        
        // Reset all items first
        items.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'none';
            item.classList.remove('animate-hover');
            
            // Reset internal elements too
            const elements = item.querySelectorAll('.education-level, .degree-container, .school-container, .year-container, .description-container, .achievements-container');
            elements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(15px)';
                el.style.transition = 'none';
            });
        });
        
        // Force reflow to ensure transitions work
        container.offsetHeight;
        
        // Animate timeline line with a slight delay
        const timelineLine = container.querySelector('.timeline-line');
        if (timelineLine) {
            timelineLine.style.height = '0';
            timelineLine.style.transition = 'height 1.5s ease';
            
            setTimeout(() => {
                timelineLine.style.height = '100%';
            }, 300);
        }
        
        // Animate items with staggered delay
        items.forEach((item, index) => {
            // Different animation for odd vs even items for timeline effect
            if (index % 2 === 0) {
                item.style.transform = 'translateX(-50px) rotate(-1deg)';
            } else {
                item.style.transform = 'translateX(50px) rotate(1deg)';
            }
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                item.style.opacity = '1';
                item.style.transform = 'translate(0, 0) rotate(0)';
                
                // Animate internal elements with cascade effect
                const elements = item.querySelectorAll('.education-level, .degree-container, .school-container, .year-container, .description-container, .achievements-container');
                elements.forEach((el, elIndex) => {
                    setTimeout(() => {
                        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, 100 + (elIndex * 70)); // Cascade effect with 70ms intervals
                });
                
                // Add animate-hover class after all animations are complete
                setTimeout(() => {
                    item.classList.add('animate-hover');
                }, 1200);
                
            }, 400 + (index * 200)); // Staggered delay based on item index
        });
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
    
    // Function to create project cards with View Details button
    function createProjectCards(projects) {
        const projectsContainer = document.createElement('div');
        projectsContainer.className = 'projects-grid';
        
        projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-index', index);
            
            // Create project preview with image if available
            const preview = document.createElement('div');
            preview.className = 'project-preview';
            
            if (project.preview) {
                const img = document.createElement('img');
                img.src = project.preview;
                img.alt = project.title;
                img.className = 'project-image';
                preview.appendChild(img);
                
                // Add overlay with View Details button
                const overlay = document.createElement('div');
                overlay.className = 'project-overlay';
                
                const viewDetailsBtn = document.createElement('button');
                viewDetailsBtn.className = 'view-details-btn';
                viewDetailsBtn.textContent = 'View Details';
                viewDetailsBtn.addEventListener('click', () => {
                    showProjectDetails(project);
                });
                
                overlay.appendChild(viewDetailsBtn);
                
                // Add Visit Website button if website URL exists
                if (project.website) {
                    const visitWebsiteBtn = document.createElement('a');
                    visitWebsiteBtn.className = 'visit-website-btn';
                    visitWebsiteBtn.href = project.website;
                    visitWebsiteBtn.target = '_blank';
                    visitWebsiteBtn.rel = 'noopener noreferrer';
                    visitWebsiteBtn.innerHTML = '<i class="fas fa-globe"></i> Visit';
                    overlay.appendChild(visitWebsiteBtn);
                }
                
                preview.appendChild(overlay);
            } else {
                // If no image, show a placeholder
                preview.innerHTML = `<div class="project-placeholder">
                    <i class="fas fa-code"></i>
                    <p>No Preview Available</p>
                </div>`;
            }
            
            // Project header with title and GitHub link
            const header = document.createElement('div');
            header.className = 'project-header';
            
            const title = document.createElement('h3');
            title.className = 'project-title';
            title.textContent = project.title;
            
            const githubLink = document.createElement('a');
            githubLink.className = 'github-link';
            githubLink.href = project.github;
            githubLink.target = '_blank';
            githubLink.rel = 'noopener noreferrer';
            githubLink.innerHTML = '<i class="fab fa-github"></i>';
            githubLink.setAttribute('aria-label', 'View project on GitHub');
            
            header.appendChild(title);
            header.appendChild(githubLink);
            
            // Project technologies
            const technologies = document.createElement('div');
            technologies.className = 'project-tech';
            
            if (project.technologies && project.technologies.length > 0) {
                project.technologies.forEach(tech => {
                    const techTag = document.createElement('span');
                    techTag.className = 'tech-tag';
                    techTag.textContent = tech;
                    technologies.appendChild(techTag);
                });
            }
            
            // Assemble card
            card.appendChild(preview);
            card.appendChild(header);
            card.appendChild(technologies);
            
            projectsContainer.appendChild(card);
        });
        
        return projectsContainer;
    }

    // Function to show project details modal
    function showProjectDetails(project) {
        // Remove any existing modal
        const existingModal = document.querySelector('.project-modal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Create modal container
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'modal-close-btn';
        closeBtn.innerHTML = '&times;';
        closeBtn.addEventListener('click', () => {
            modal.classList.add('modal-fade-out');
            setTimeout(() => {
                modal.remove();
            }, 300);
        });
        
        // Project details
        const detailsContainer = document.createElement('div');
        detailsContainer.className = 'project-details-container';
        
        // Project image
        if (project.preview) {
            const img = document.createElement('img');
            img.src = project.preview;
            img.alt = project.title;
            img.className = 'modal-project-image';
            detailsContainer.appendChild(img);
        }
        
        // Project info
        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';
        
        // Project title
        const title = document.createElement('h2');
        title.textContent = project.title;
        projectInfo.appendChild(title);
        
        // Project description
        const description = document.createElement('p');
        description.className = 'project-modal-description';
        description.textContent = project.description;
        projectInfo.appendChild(description);
        
        // Technologies section
        if (project.technologies && project.technologies.length > 0) {
            const techSection = createTechnologiesSection(project.technologies);
            projectInfo.appendChild(techSection);
        }
        
        // Project links
        const linksContainer = document.createElement('div');
        linksContainer.className = 'project-links';
        
        // GitHub link
        if (project.github) {
            const githubLink = document.createElement('a');
            githubLink.className = 'github-modal-link';
            githubLink.href = project.github;
            githubLink.target = '_blank';
            githubLink.rel = 'noopener noreferrer';
            githubLink.innerHTML = '<i class="fab fa-github"></i> View on GitHub';
            linksContainer.appendChild(githubLink);
        }
        
        // Website link
        if (project.website) {
            const websiteLink = document.createElement('a');
            websiteLink.className = 'website-modal-link';
            websiteLink.href = project.website;
            websiteLink.target = '_blank';
            websiteLink.rel = 'noopener noreferrer';
            websiteLink.innerHTML = '<i class="fas fa-globe"></i> Visit Website';
            linksContainer.appendChild(websiteLink);
        }
        
        projectInfo.appendChild(linksContainer);
        detailsContainer.appendChild(projectInfo);
        
        // Add elements to modal
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(detailsContainer);
        modal.appendChild(modalContent);
        
        // Add modal to body
        document.body.appendChild(modal);
        
        // Add fade-in animation
        setTimeout(() => {
            modal.classList.add('modal-fade-in');
        }, 10);
        
        // Close when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('modal-fade-out');
                setTimeout(() => {
                    modal.remove();
                }, 300);
            }
        });
    }
    
    // Function to create a styled technologies section
    function createTechnologiesSection(technologies) {
        const container = document.createElement('div');
        container.className = 'technologies-container';
        
        const title = document.createElement('h3');
        title.className = 'technologies-title';
        title.innerHTML = '<i class="fas fa-code"></i> Technologies';
        container.appendChild(title);
        
        const list = document.createElement('div');
        list.className = 'technologies-list';
        
        technologies.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'technology-tag';
            tag.textContent = tech;
            list.appendChild(tag);
        });
        
        container.appendChild(list);
        return container;
    }
    
    // Initialize the page
    init();
});

