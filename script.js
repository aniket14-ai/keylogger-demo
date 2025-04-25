// Keylogger Functionality
document.addEventListener('DOMContentLoaded', () => {
    const logElement = document.getElementById('log');

    // Keylogger Function
    function logKey(e) {
        const key = e.key;
        const logMessage = `Key pressed: ${key}\n`;
        logElement.textContent += logMessage;
        logElement.scrollTop = logElement.scrollHeight; // Auto-scroll to bottom
    }

    // Attach event listeners to the login form fields
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keydown', logKey);
    });

    // Clickjacking Functionality
    document.getElementById('winButton')?.addEventListener('click', () => {
        // Simulate a click on the hidden checkbox
        const hiddenCheckbox = document.getElementById('hiddenCheckbox');
        hiddenCheckbox.click();
        console.log('Checkbox clicked secretly! Dangerous action performed!');
        alert('You just triggered a dangerous action!');
    });

    // Optionally simulate sending the data for keylogger
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Data is being sent (simulation).");
    });
});
