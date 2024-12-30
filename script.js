// Authentication Page Script
if (document.body.classList.contains('auth-page')) {
    const authForm = document.querySelector('#auth-form');
    const authButton = document.querySelector('#auth-button');
    const toggleSignupButton = document.querySelector('#toggle-signup');
    const confirmPasswordGroup = document.querySelector('#confirm-password-group');
    const formTitle = document.querySelector('#form-title');
    const formSubtitle = document.querySelector('#form-subtitle');
  
    let isLoginMode = true; // Track whether it's login or signup mode
  
    // Toggle Between Login and Signup
    toggleSignupButton.addEventListener('click', (e) => {
      e.preventDefault();
      isLoginMode = !isLoginMode;
  
      if (isLoginMode) {
        formTitle.textContent = 'Login';
        formSubtitle.textContent = 'Welcome back! Please login to your account.';
        confirmPasswordGroup.classList.add('hidden');
        authButton.textContent = 'Login';
        toggleSignupButton.textContent = 'Signup';
      } else {
        formTitle.textContent = 'Signup';
        formSubtitle.textContent = 'Create a new account to get started.';
        confirmPasswordGroup.classList.remove('hidden');
        authButton.textContent = 'Signup';
        toggleSignupButton.textContent = 'Login';
      }
    });
  
    // Handle Form Submission
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const email = document.querySelector('#email').value.trim();
      const password = document.querySelector('#password').value.trim();
  
      if (!isLoginMode) {
        const confirmPassword = document.querySelector('#confirm-password').value.trim();
  
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
      }
  
      if (email && password) {
        alert(isLoginMode ? 'Logged in successfully!' : 'Account created successfully!');
        // Replace alert with actual backend authentication API call
      } else {
        alert('Please fill in all required fields.');
      }
    });
  }  
// Global Variables
const baseURL = window.location.origin; // Base URL to handle navigation dynamically

// Navigation Menu Highlight
document.querySelectorAll('.nav-link').forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add('active'); // Add an active class to the current page
  }
});

// Home Page Functionalities
if (document.body.classList.contains('home-page')) {
  const searchBar = document.querySelector('#search-bar');
  const searchButton = document.querySelector('#search-button');

  searchButton.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (query) {
      alert(`Searching for "${query}"...`); // Replace with actual search logic
    } else {
      alert('Please enter a search query.');
    }
  });
}

// Map Page Functionalities
if (document.body.classList.contains('map-page')) {
  // Simulated Crowd Data for Heatmap
  const heatmapData = {
    "Main Ghat": "High",
    "Parking Lot A": "Medium",
    "Medical Tent 1": "Low",
  };

  const heatmapContainer = document.querySelector('#heatmap-container');

  // Display Heatmap Data
  Object.entries(heatmapData).forEach(([location, density]) => {
    const densityColor =
      density === 'High'
        ? 'red'
        : density === 'Medium'
        ? 'orange'
        : 'green';

    const locationElement = document.createElement('div');
    locationElement.classList.add('location-marker');
    locationElement.style.backgroundColor = densityColor;
    locationElement.textContent = `${location}: ${density}`;
    heatmapContainer.appendChild(locationElement);
  });

  // Route Suggestions
  const routeButton = document.querySelector('#route-suggestions');
  routeButton.addEventListener('click', () => {
    alert('Showing least crowded route...'); // Replace with actual map routing logic
  });
}

// Booking Page Functionalities
if (document.body.classList.contains('booking-page')) {
  const bookingButtons = document.querySelectorAll('.book-now');

  bookingButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const bookingDetails = button.dataset.details;
      alert(`Booking ${bookingDetails}...`); // Replace with booking logic
    });
  });
}

// Events Page Functionalities
if (document.body.classList.contains('events-page')) {
  const notificationBar = document.querySelector('#notification-bar');

  // Sample Live Notifications
  const notifications = [
    'Weather Alert: Possible rain at 5 PM.',
    'Event Update: Bhajan session starts at 4 PM.',
    'Safety Warning: High crowd density near Main Ghat.',
  ];

  let notificationIndex = 0;
  setInterval(() => {
    notificationBar.textContent = notifications[notificationIndex];
    notificationIndex = (notificationIndex + 1) % notifications.length;
  }, 5000); // Rotate notifications every 5 seconds
}

// Emergency Page Functionalities
if (document.body.classList.contains('emergency-page')) {
  const sosButton = document.querySelector('#sos-button');

  sosButton.addEventListener('click', () => {
    const userLocation = 'Latitude: 27.1767, Longitude: 78.0081'; // Replace with actual geolocation
    alert(`SOS sent with location: ${userLocation}`); // Replace with SOS API call
  });
}

// Dark Mode Toggle (Global)
const darkModeToggle = document.querySelector('#dark-mode-toggle');

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  });
}

// Footer Navigation to Contact Pages
const contactSupportLink = document.querySelector('#contact-support');
if (contactSupportLink) {
  contactSupportLink.addEventListener('click', () => {
    window.location.href = `${baseURL}/contact.html`;
  });
}

