// Scroll animations
ScrollReveal().reveal('.event', {
    distance: '60px',
    duration: 900,
    easing: 'ease-in-out',
    origin: 'bottom'
});

// Angry Meter
const moods = [
    "Normal 😇",
    "Staring 😐",
    "Silent… 😶",
    "Deadly Angry 😭",
    "MAR JAUNGA BUT I WILL SAY SORRY 😭🔥"
];

document.getElementById("angryRange").oninput = function () {
    document.getElementById("angryText").innerText = moods[this.value];
};

// Love reasons
const reasons = [
    "Your smile makes everything better.",
    "You act like a kid with me and I love it.",
    "You get angry but still stay.",
    "You make boring days funny.",
    "You’re my peace + chaos combo.",
    "Talking to you feels like home ❤️"
];

document.getElementById("reasonBtn").onclick = function () {
    const r = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById("reasonOutput").innerText = r;
};

// Don't click me
document.getElementById("dontClickBtn").onclick = function () {
    alert("I knew you'd click 😭❤️ That’s why I love you.");
};
