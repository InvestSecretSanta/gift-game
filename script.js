const banner = document.getElementById('banner');

// Counter for remaining movements
let movesLeft = 25; // Allow 10 movements

// Function to move the banner
function moveBanner() {
    if (movesLeft > 0) {
        const x = Math.random() * (window.innerWidth - banner.offsetWidth);
        const y = Math.random() * (window.innerHeight - banner.offsetHeight);
        banner.style.left = `${x}px`;
        banner.style.top = `${y}px`;
        movesLeft--;
    } else {
        banner.removeEventListener('mouseover', moveBanner);
        banner.textContent = '🎉 Let me help you! Click me!';
    }
}

// Attach the move function to mouseover event
banner.addEventListener('mouseover', moveBanner);

// Click event to show a message
banner.addEventListener('click', () => {
    alert('Congratulations! You caught the gift!');
    banner.textContent = '🎁 The gift is your lunch today! Head to the 4th-floor kitchen at 12 PM.';
    // Optionally, stop further movement after catching
    banner.removeEventListener('mouseover', moveBanner);
});
