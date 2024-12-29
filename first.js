// Search Functionality: Dynamically filter accommodation options
const searchInput = document.querySelector('input[type="text"]');
const bookingCards = document.querySelectorAll('.card');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    bookingCards.forEach(card => {
        const cardText = card.innerText.toLowerCase();
        if (cardText.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Event Notification System: Display live updates
const notificationBar = document.querySelector('.crowd-ticker');
const liveNotifications = [
    "Crowd density at Ganga Ghat is high. Avoid peak hours!",
    "Morning Aarti starts at 6:00 AM today at the Main Ghat.",
    "Weather alert: Expect light rain around 4:00 PM."
];

let notificationIndex = 0;

function displayNotifications() {
    notificationBar.innerHTML = liveNotifications[notificationIndex];
    notificationIndex = (notificationIndex + 1) % liveNotifications.length;
}

// Cycle through live notifications every 10 seconds
setInterval(displayNotifications, 10000);

// Interactive Map: Simulating the crowd heatmap
const mapPlaceholder = document.querySelector('.map');

mapPlaceholder.addEventListener('click', function() {
    alert('Simulating an interactive map with crowd heatmaps.');
});

// SOS Button Functionality: Trigger emergency alert
const sosButton = document.querySelector('.sos-button');
sosButton.addEventListener('click', function() {
    alert('Emergency services have been contacted!');
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
