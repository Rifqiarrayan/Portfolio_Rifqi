// Experience Data
const experienceData = {
    bpjs: {
        title: 'Procurement Data Management Intern - BPJS Ketenagakerjaan',
        description: `
            <div class="modal-key">
                <div class="modal-key-header">Key responsibility:</div>
                <ul class="modal-key-list">
                    <li>Cleaned and preprocessed nationwide Rumah BUMN MSME data (&gt;20,000 records) for analysis and reporting.</li>
                    <li>Processed KPI data and evaluated performance for &gt;70 facilitators and &gt;80 rangers across Indonesia.</li>
                    <li>Performed quarterly analysis on budget allocation, fund utilisation, and KPI achievement; built interactive Looker Studio and Tableau dashboards with KPI metrics and visualization of budget effectiveness and other related metrics.</li>
                    <li>Developed Excel VBA macros for data cleaning, processing, duplication checks, and trend detection, reducing processing time by up to 80%.</li>
                    <li>Conducted MSME trend analysis and prepared weekly internal reports on analyzed data, including sales and performance insights.</li>
                </ul>
            </div>
        `,
        slides: ['images/BPJS.jpeg'],
        tools: ['Tableau', 'Google Looker Studio', 'Excel']
    },
    telkom: {
        title: 'Data Analyst Intern - PT Telkom Indonesia',
        description: `
            <div class="modal-key">
                <div class="modal-key-header">Key responsibility:</div>
                <ul class="modal-key-list">
                    <li>Cleaned and preprocessed nationwide Rumah BUMN MSME data (&gt;20,000 records) for analysis and reporting.</li>
                    <li>Processed KPI data and evaluated performance for &gt;70 facilitators and &gt;80 rangers across Indonesia.</li>
                    <li>Performed quarterly analysis on budget allocation, fund utilisation, and KPI achievement; built interactive Looker Studio and Tableau dashboards with KPI metrics and visualization of budget effectiveness and other related metrics.</li>
                    <li>Developed Excel VBA macros for data cleaning, processing, duplication checks, and trend detection, reducing processing time by up to 80%.</li>
                    <li>Conducted MSME trend analysis and prepared weekly internal reports on analyzed data, including sales and performance insights.</li>
                </ul>
            </div>
        `,
        slides: ['images/Telkom 1.jpeg', 'images/Telkom 2.jpeg', 'images/Telkom 3.jpeg'],
        tools: ['Python', 'Looker Studio', 'Tableau', 'Excel Macro VBA', 'Excel Formulas']
    },
    bpom: {
        title: 'Data Analyst Intern - BPOM',
        description: `
            <div class="modal-key">
                <div class="modal-key-header">Key responsibility:</div>
                <ul class="modal-key-list">
                    <li>Built an informative and easy to use dashboard for BPOM Main Inspectorate employee data (permanent & contract), covering education, certifications, job titles, gender, and tenure.</li>
                    <li>Processed and analyzed nationwide complaint data (financial, goods/services, and core duties) from all BPOM branches, including timeliness, responder identification, unanswered cases, and regional grouping.</li>
                    <li>Developed interactive visualizations on complaint categories, regional volumes, and trend patterns.</li>
                    <li>Created Excel VBA Macros to automate data processing and significantly accelerate workflow.</li>
                </ul>
            </div>
        `,
        slides: ['images/bpom1.jpeg', 'images/bpom2.jpeg', 'images/bpom3.jpeg'],
        tools: ['Excel Macro VBA', 'Data Visualization', 'Dashboard Design']
    },
    labassist: {
        title: 'Laboratory Assistant - Data Structure and Algorithms',
        description: `
            <div class="modal-key">
                <div class="modal-key-header">Key responsibility:</div>
                <ul class="modal-key-list">
                    <li>Directly assisted 70 students from two study programs: Bachelor of Information Systems (class A) using C programming language, and Bachelor of Informatics (class B) using C++ programming language.</li>
                    <li>Developed 14 technical learning modules covering topics such as Array, Single-Linked List, Sorting Algorithm, Tree, Queue, Pointer, and Minimum Spanning Tree (MST), among others.</li>
                    <li>Provided direct instruction for 14 sessions per class, training students in understanding programming logic and code efficiency.</li>
                </ul>
            </div>
        `,
        slides: ['images/Aslab1.jpg', 'images/Aslab2.jpg', 'images/Aslab3.jpg'],
        tools: ['C Programming language', 'C++ programming language', 'Data Structures', 'Algorithms']
    },

    ksm: {
        title: 'Member Data Scientist - Kelompok Studi Mahasiswa Android UPNVJ',
        description: `
            <div class="modal-key">
                <div class="modal-key-header">Key responsibility:</div>
                <ul class="modal-key-list">
                    <li>Mentaled and practiced advanced Microsoft Excel techniques (Pivot Table, Lookup functions, conditional formulas, data visualization).</li>
                    <li>Utilized advanced SQL to write queries, perform multi table joins, apply aggregations, Window Function, etc and prepare datasets for analysis and modeling.</li>
                    <li>Performed EDA, feature engineering, and machine learning modeling (KNN, DBSCAN, ensemble methods) across multiple end to end projects.</li>
                    <li>Developed analytics workflows using Python (pandas, NumPy, scikit-learn) for data cleaning, preprocessing, and evaluation.</li>
                    <li>Gained experience in NLP tasks and building recommendation systems, covering the full pipeline from raw data to actionable insights.</li>
                </ul>
            </div>
        `,
        tools: ['Python', 'SQL', 'Machine Learning', 'NLP', 'Excel Advanced', 'scikit-learn', 'Deep Learning']
    },
    senat: {
        title: 'Staff of Commission 3 - Senat Mahasiswa Fakultas Ilmu Komputer',
        description: `
            <div class="modal-key">
                <div class="modal-key-header">Key responsibility:</div>
                <ul class="modal-key-list">
                    <li>Supervising the BEM of the Computer Science Faculty.</li>
                    <li>Attending every BEM meeting to monitor progress, provide suggestions, and record outcomes.</li>
                    <li>Preparing supervision reports for the Chairman of the Computer Science Faculty Senate.</li>
                </ul>
            </div>
        `,
        slides: ['images/senat1.jpg', 'images/senat2.jpg', 'images/senat3.jpg'],
        tools: ['Supervision', 'Documentation', 'Communication', 'Leadership']
    }
};

// Projects Data
const projectsData = [
    {
        id: 1,
        title: 'RAB Efektivitas Dashboard',
        category: 'data-analyst',
        related: 'Telkom Indonesia Internship',
        tools: ['Tableau', 'Looker Studio', 'Spreadsheet'],
        description: 'Performed quarterly analysis on budget allocation, fund utilisation, and KPI achievement; built interactive Looker Studio and Tableau dashboards with KPI metrics and visualization of budget effectiveness and other.',
        image: '🔒',
        slides: ['images/Confidential project.jpg']
    },
    {
        id: 2,
        title: 'Uber Travel Pattern Analysis',
        category: 'data-analyst',
        related: 'Personal Project',
        tools: ['SQL', 'BigQuery', 'Excel'],
        description: 'Analyzed Uber travel patterns using SQL queries on BigQuery. Identified peak hours, popular routes, and customer behavior patterns to derive actionable insights for optimization.',
        image: '🚗'
    },
    {
        id: 3,
        title: 'Analyze E-Commerce Performance',
        category: 'data-analyst',
        related: 'Personal Project',
        tools: ['Power BI', 'DAX', 'Data Modeling'],
        description: 'Created comprehensive Power BI dashboard analyzing e-commerce metrics including sales trends, customer segmentation, product performance, and revenue analysis.',
        image: '🛒'
    },
    {
        id: 4,
        title: 'United State Flight Delay Analysis',
        category: 'data-analyst',
        related: 'Personal Project',
        tools: ['Tableau', 'Data Visualization'],
        description: 'Developed interactive Tableau visualizations to analyze flight delay patterns across US airports. Identified key factors contributing to delays and seasonal trends.',
        image: '✈️'
    },
    {
        id: 5,
        title: 'Sentiment Analysis on Tokopedia (NLP)',
        category: 'data-scientist',
        related: 'Personal Project',
        tools: ['Python', 'NLP', 'Machine Learning'],
        description: 'Built a sentiment analysis model using Natural Language Processing to analyze customer reviews on Tokopedia. Classified sentiments and extracted insights from user feedback.',
        image: '💬'
    },
    {
        id: 6,
        title: 'Banking Product Marketing Optimization',
        category: 'data-scientist',
        related: 'Data Scientist Competition - UI',
        tools: ['XGBoost', 'Streamlit', 'Python'],
        description: 'Developed "Optimalisasi Kampanye Pemasaran Produk Perbankan (Deposito Berjangka) Menggunakan XGBoost dan Streamlit: Studi Kasus Optimalisasi Pemasaran Fintech di Indonesia". Built predictive model and interactive web application.',
        image: '🏦'
    }
];

// Certifications Data
const certificationsData = [
    // Special certificates first (1 and 2)
    {
        id: 1,
        title: 'IT Specialist - Data Analytics (Certiport)',
        category: 'data-analyst',
        image: 'images/Certiport.jpg',
        hasDetails: true,
        slides: ['images/cfi.png', 'images/Certiport.jpg'],
        details: `
        <div class="modal-key">
            <div class="modal-key-header">IT Specialist - Data Analytics (Certiport)</div>
            <ul class="modal-key-list">
                <li>The IT Specialist - Data Analytics certificate is held offline in the laboratory of the Faculty of Computer Science.</li>
                <li>The exam tests understanding and skills in data analysis, including data processing, visualization and interpretation for sound decision-making.</li>
            </ul>
        </div>`
    },
    {
        id: 2,
        title: 'Information Representation and Data Organization (Huawei ICT Academy)',
        category: 'data-analyst',
        image: 'images/Huawei Certification.png',
        hasDetails: true,
        slides: ['images/Huawei Certification.png'],
        details: `
        <div class="modal-key">
            <div class="modal-key-header">Information Representation and Data Organization (Huawei ICT Academy)</div>
            <ul class="modal-key-list">
                <li>Complete a certification that covers data formats, encoding techniques, and data organization strategies essential for efficient data analysis and processing.</li>
                <li>Provides a solid foundation in understanding data structures relevant to analytical workflows.</li>
            </ul>
        </div>`
    },
    // Other certificates
    { id: 3, title: 'Data Science and Machine Learning (CFI)', category: 'data-scientist', image: 'images/cfi.png' },
    { id: 4, title: 'Intermediate Machine Learning (Kaggle)', category: 'data-scientist', image: 'images/ML(Kaggle).png' },
    { id: 5, title: 'Feature Engineering (Kaggle)', category: 'data-scientist', image: 'images/Feature engineering.png' },
    { id: 6, title: 'Data Cleaning (Kaggle)', category: 'data-scientist', image: 'images/Data Cleaning.png' },
    { id: 7, title: 'Pandas (Kaggle)', category: 'data-scientist', image: 'images/Pandas.png' },
    { id: 8, title: 'Sql Advanced (HackerRank)', category: 'data-analyst', image: 'images/sql-advanced.png' },
    { id: 9, title: 'Sql Basic (HackerRank)', category: 'data-analyst', image: 'images/sqlbasic.png' },
    { id: 10, title: 'Belajar Dasar Visualisasi Data (Dicoding)', category: 'data-analyst', image: 'images/Belajarvisualisasidata.png' },
    { id: 11, title: 'Memulai Pemrograman Python (Dicoding)', category: 'data-analyst', image: 'images/python(dicoding).png' },
    { id: 12, title: 'Belajar Dasar Structured Query Language (Dicoding)', category: 'data-analyst', image: 'images/sql_dicoding.png' },
    { id: 13, title: 'Power BI For Beginners (Simplilearn)', category: 'data-analyst', image: 'images/powerbi.png' },
    { id: 14, title: 'Microsoft Excel (DQlab)', category: 'data-analyst', image: 'images/excel(dqlab).png' },
    { id: 15, title: 'Data Analytics (Delloite)', category: 'data-analyst', image: 'images/Delloite.png' },
];

// Load Projects and Certifications on Start
document.addEventListener('DOMContentLoaded', () => {
    loadProjects('all');
    loadCertifications('all');
    startRoleLoop();
    setupNav();
});

// Load Certifications
function loadCertifications(filter = 'all') {
    const grid = document.getElementById('cert-grid');
    const items = filter === 'all' ? certificationsData : certificationsData.filter(c => c.category === filter);

    grid.innerHTML = items.map(c => `
        <div class="cert-card" role="button" tabindex="0" onclick="openCertificationModal(${c.id})" onkeydown="if(event.key==='Enter') openCertificationModal(${c.id})">
            <div class="cert-image"><img src="${c.image || 'https://via.placeholder.com/600x400?text=Certificate'}" alt="${c.title}"></div>
            <div class="cert-content">
                <h3>${c.title}</h3>
                ${c.hasDetails ? `<button class="btn btn-primary" onclick="event.stopPropagation(); openCertificationModal(${c.id})">View Details</button>` : ''}
            </div>
        </div>
    `).join('');
}

// Filter Certifications
function filterCertifications(category, btn) {
    document.querySelectorAll('#certifications .filter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    loadCertifications(category);
}

// Open certification modal (image or details)
function openCertificationModal(id) {
    const cert = certificationsData.find(c => c.id === id);
    if (!cert) return;
    document.getElementById('modal-title').textContent = cert.title;
    
    if (cert.hasDetails && cert.details) {
        document.getElementById('modal-description').innerHTML = cert.details;
        
        // If it has slides, populate the slider
        if (cert.slides && cert.slides.length > 0) {
            populateSlider(cert.slides);
            currentSlide = 0;
            showSlide(currentSlide);
        } else {
            // No slides, clear slider
            const slider = document.querySelector('.slider');
            if (slider) slider.innerHTML = '';
        }
    } else {
        document.getElementById('modal-description').innerHTML = `<img src="${cert.image}" alt="${cert.title}" class="modal-cert-img">`;
        // Clear slider for image-only display
        const slider = document.querySelector('.slider');
        if (slider) slider.innerHTML = '';
    }
    
    // Clear tools for certifications (not used)
    document.getElementById('modal-tools').innerHTML = '';
    document.getElementById('modal-tools-title').style.display = 'none';

    document.getElementById('modal').style.display = 'block';
}

// Animated role loop
function startRoleLoop() {
    const roles = ['Data Analyst Enthusiast', 'Data Scientist Enthusiast', 'Business Intelligence Enthusiast'];
    let i = 0;
    const roleEl = document.getElementById('role');
    if (!roleEl) return;

    function showNext() {
        // entrance
        roleEl.classList.remove('exit');
        roleEl.textContent = roles[i];
        void roleEl.offsetWidth; // force reflow to restart animation
        roleEl.classList.add('enter');

        // stay visible, then exit
        setTimeout(() => {
            roleEl.classList.remove('enter');
            roleEl.classList.add('exit');

            // move to next after exit completes
            setTimeout(() => {
                i = (i + 1) % roles.length;
                showNext();
            }, 300);
        }, 1600);
    }

    showNext();
}

// Setup responsive nav toggle
function setupNav() {
    const nav = document.querySelector('nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    if (!navToggle) return;

    navToggle.addEventListener('click', function(e) {
        const isOpen = nav.classList.toggle('open');
        this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.classList.toggle('no-scroll', isOpen);
    });

    navLinks.forEach(link => link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    }));

    // Close on resize when moving to desktop layout
    window.addEventListener('resize', () => {
        if (window.innerWidth > 880 && nav.classList.contains('open')) {
            nav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    });

    // Close when clicking outside the nav on mobile
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && nav.classList.contains('open')) {
            nav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('no-scroll');
        }
    });
}

// Load Projects Function
function loadProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);
    
    grid.innerHTML = filtered.map(project => `
        <div class="project-card">
            <div class="project-image">${project.image}</div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <div class="project-tools">
                    ${project.tools.map(tool => `<span class="project-tool">${tool}</span>`).join('')}
                </div>
                <p class="project-related">Related to: ${project.related}</p>
                <button class="btn-detail" onclick="openProjectModal(${project.id})">Read More</button>
            </div>
        </div>
    `).join('');
}

// Filter Projects
function filterProjects(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    loadProjects(category);
}

// Modal Functions
let currentSlide = 0;

const defaultSlides = [
    'https://via.placeholder.com/800x400/667eea/ffffff?text=Image+1',
    'https://via.placeholder.com/800x400/764ba2/ffffff?text=Image+2',
    'https://via.placeholder.com/800x400/f093fb/ffffff?text=Image+3'
];

function populateSlider(slides = defaultSlides) {
    const slider = document.querySelector('.slider');
    if (!slider) return;

    // Build images HTML and include nav buttons
    const imagesHtml = slides.map((src, i) => `\n        <img src="${src}" class="${i===0 ? 'active' : ''}">`).join('');
    slider.innerHTML = `${imagesHtml}\n        <button class="slider-btn slider-prev" onclick="changeSlide(-1)">❮</button>\n        <button class="slider-btn slider-next" onclick="changeSlide(1)">❯</button>`;
}

function openModal(type) {
    const data = experienceData[type];
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-description').innerHTML = data.description;

    // populate slider with provided slides or fallback defaults
    populateSlider(data.slides || defaultSlides);

    // Populate tools
    const toolsHtml = (data.tools || []).map(tool => `<span class="modal-tool">${tool}</span>`).join('');
    document.getElementById('modal-tools').innerHTML = toolsHtml;
    document.getElementById('modal-tools-title').style.display = toolsHtml ? 'block' : 'none';

    document.getElementById('modal').style.display = 'block';
    currentSlide = 0;
    showSlide(currentSlide);
}

function openProjectModal(id) {
    const project = projectsData.find(p => p.id === id);
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').innerHTML = project.description;

    // populate slider with provided slides or fallback defaults
    populateSlider(project.slides || defaultSlides);

    const toolsHtml = (project.tools || []).map(tool => `<span class="modal-tool">${tool}</span>`).join('');
    document.getElementById('modal-tools').innerHTML = toolsHtml;
    document.getElementById('modal-tools-title').style.display = toolsHtml ? 'block' : 'none';

    document.getElementById('modal').style.display = 'block';
    currentSlide = 0;
    showSlide(currentSlide);
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function changeSlide(n) {
    const slides = document.querySelectorAll('.slider img');
    currentSlide += n;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slider img');
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === n) slide.classList.add('active');
    });
}

// Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        }

        // Initialize
        loadProjects();

        // Page indicator + scroll-snap behavior
        (function() {
            const sections = document.querySelectorAll('section');
            if (!sections.length) return;

            const indicator = document.createElement('div');
            indicator.className = 'page-indicator';
            indicator.innerHTML = ''
                + '<div class="counter"><span class="current">1</span> / <span class="total">' + sections.length + '</span></div>'
                + '<div class="dots">' + Array.from(sections).map(function(_,i){ return '<button class="dot" data-index="'+i+'" aria-label="Go to section '+(i+1)+'"></button>'; }).join('') + '</div>';

            document.body.appendChild(indicator);
            const dots = indicator.querySelectorAll('.dot');

            function setActive(index) {
                indicator.querySelector('.current').textContent = index + 1;
                dots.forEach(d => d.classList.remove('active'));
                if (dots[index]) dots[index].classList.add('active');
            }
            setActive(0);

            dots.forEach((dot, i) => dot.addEventListener('click', () => {
                sections[i].scrollIntoView({behavior:'smooth'});
            }));

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        const idx = Array.from(sections).indexOf(entry.target);
                        setActive(idx);
                    }
                });
            }, { threshold: 0.5 });

            sections.forEach(sec => observer.observe(sec));

            let scrollTimer;
            window.addEventListener('scroll', () => {
                indicator.classList.add('visible');
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(()=> indicator.classList.remove('visible'), 1400);
            }, { passive: true });
        })();