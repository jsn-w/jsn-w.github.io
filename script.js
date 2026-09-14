const roles = [
    "designing PCBs and embedded systems",
    "building things with microcontrollers",
    "learning how hardware and software meet",
    "breaking things to understand them",
    "a transit enthusiast",
    "a sports enjoyer",
    "a sticker collector"
];

let index = 0;
const textEl = document.getElementById("rotating-text");

function rotateText() {
    textEl.textContent = roles[index];
    index = (index + 1) % roles.length;
}

rotateText();
setInterval(rotateText, 3500);


function updateTime() {
    const options = {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };

    const timeInEastern = new Date().toLocaleString('en-US', options);
    document.getElementById('time').textContent = timeInEastern;
}

setInterval(updateTime, 1000);
updateTime(); 