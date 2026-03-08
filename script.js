const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainWindow = document.getElementById('main-window');
const successMessage = document.getElementById('success-message');

// 1. Falling Stickers Logica
const emojis = ['🐝', '🌸', '✨', '🍯', '🍭', '💖', '⭐'];

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('falling-emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = (Math.random() * 2 + 3) + 's';
    emoji.style.opacity = Math.random();

    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000);
}

// Start falling effect immediately
setInterval(createEmoji, 400);

// 2. Runaway "No" Button
const moveButton = () => {
    // Get random coordinates within the screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

// 3. Success Event
yesBtn.addEventListener('click', () => {
    mainWindow.classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Celebration: spawn way more emojis!
    setInterval(createEmoji, 50);

});
