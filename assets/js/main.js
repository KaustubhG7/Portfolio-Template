// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
            
            // Smooth scroll to target
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project Modal Functionality
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

// Project details data
const projectDetails = {
    1: {
        title: 'E-commerce Platform',
        content: `
            <img src="https://picsum.photos/800/400?random=4" alt="E-commerce Platform" class="w-full rounded-lg mb-6">
            <div class="space-y-4">
                <h4 class="text-xl font-semibold">Project Overview</h4>
                <p class="text-gray-600">
                    A comprehensive e-commerce platform built with React and Node.js, featuring user authentication,
                    product management, shopping cart functionality, and secure payment processing.
                </p>
                
                <h4 class="text-xl font-semibold">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Express</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Stripe API</span>
                </div>

                <h4 class="text-xl font-semibold">Key Features</h4>
                <ul class="list-disc list-inside text-gray-600">
                    <li>User authentication and authorization</li>
                    <li>Product catalog with search and filtering</li>
                    <li>Shopping cart and wishlist functionality</li>
                    <li>Secure payment processing with Stripe</li>
                    <li>Admin dashboard for product management</li>
                </ul>

                <div class="flex gap-4 mt-6">
                    <a href="#" class="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Live Demo</a>
                    <a href="#" class="inline-block border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition">GitHub Repo</a>
                </div>
            </div>
        `
    },
    2: {
        title: 'Task Management App',
        content: `
            <img src="https://picsum.photos/800/400?random=5" alt="Task Management App" class="w-full rounded-lg mb-6">
            <div class="space-y-4">
                <h4 class="text-xl font-semibold">Project Overview</h4>
                <p class="text-gray-600">
                    A collaborative task management application that enables teams to organize, track, and manage their projects
                    efficiently with real-time updates and intuitive user interface.
                </p>
                
                <h4 class="text-xl font-semibold">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Vue.js</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Firebase</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Vuex</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Socket.io</span>
                </div>

                <h4 class="text-xl font-semibold">Key Features</h4>
                <ul class="list-disc list-inside text-gray-600">
                    <li>Real-time collaboration</li>
                    <li>Drag-and-drop task organization</li>
                    <li>Project timeline and milestone tracking</li>
                    <li>Team chat and file sharing</li>
                    <li>Customizable project dashboards</li>
                </ul>

                <div class="flex gap-4 mt-6">
                    <a href="#" class="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Live Demo</a>
                    <a href="#" class="inline-block border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition">GitHub Repo</a>
                </div>
            </div>
        `
    },
    3: {
        title: 'Social Media Dashboard',
        content: `
            <img src="https://picsum.photos/800/400?random=6" alt="Social Media Dashboard" class="w-full rounded-lg mb-6">
            <div class="space-y-4">
                <h4 class="text-xl font-semibold">Project Overview</h4>
                <p class="text-gray-600">
                    A comprehensive social media analytics dashboard that helps businesses track their social media performance
                    across multiple platforms with detailed insights and reporting capabilities.
                </p>
                
                <h4 class="text-xl font-semibold">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Angular</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">D3.js</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">PostgreSQL</span>
                </div>

                <h4 class="text-xl font-semibold">Key Features</h4>
                <ul class="list-disc list-inside text-gray-600">
                    <li>Multi-platform social media analytics</li>
                    <li>Interactive data visualizations</li>
                    <li>Automated report generation</li>
                    <li>Competitor analysis tools</li>
                    <li>Custom alert system</li>
                </ul>

                <div class="flex gap-4 mt-6">
                    <a href="#" class="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">Live Demo</a>
                    <a href="#" class="inline-block border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition">GitHub Repo</a>
                </div>
            </div>
        `
    }
};

// Open modal with project details
document.querySelectorAll('.view-project-btn').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const project = projectDetails[projectId];
        
        if (project) {
            modalTitle.textContent = project.title;
            modalContent.innerHTML = project.content;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Re-enable scrolling
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form inputs
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    // Reset previous error states
    [name, email, message].forEach(input => {
        input.classList.remove('border-red-500');
        const errorElement = input.parentElement.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    });
    
    // Validate inputs
    let isValid = true;
    
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }
    
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
    }
    
    if (isValid) {
        // In a real application, you would send the form data to a server here
        alert('Message sent successfully!');
        contactForm.reset();
    }
});

// Helper functions
function showError(input, message) {
    input.classList.add('border-red-500');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
