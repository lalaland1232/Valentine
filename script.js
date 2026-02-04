gsap.registerPlugin(ScrollTrigger);


/* -----------------------------------------
   FLOATING HEARTS & SPARKLES
------------------------------------------ */
setInterval(() => {
    const icons = ["❤️", "✨", "💕", "🌸"];
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.textContent = icons[Math.floor(Math.random() * icons.length)];
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.bottom = "-20px";
    particle.style.fontSize = (Math.random() * 12 + 18) + "px";
    document.getElementById("particles").appendChild(particle);

    setTimeout(() => particle.remove(), 4000);
}, 600);


/* -----------------------------------------
   PARALLAX CLOUDS (smooth depth effect)
------------------------------------------ */
/* -----------------------------------------
   SMOOTH TIME-BASED PARALLAX (best fix)
------------------------------------------ */

let cloudOffset1 = 0;
let cloudOffset2 = 0;
let cloudOffset3 = 0;

function animateClouds() {

    cloudOffset1 -= 0.10;  // fastest (front)
    cloudOffset2 -= 0.06;  // mid
    cloudOffset3 -= 0.03;  // slowest (back)

    document.querySelector(".layer1").style.transform = `translateX(${cloudOffset1}px)`;
    document.querySelector(".layer2").style.transform = `translateX(${cloudOffset2}px)`;
    document.querySelector(".layer3").style.transform = `translateX(${cloudOffset3}px)`;

    requestAnimationFrame(animateClouds);
}

animateClouds();




/* -----------------------------------------
   POLAROID ANIMATION ON SCROLL
------------------------------------------ */
document.querySelectorAll(".event-box").forEach((box, i) => {
    gsap.from(box, {
        opacity: 0,
        y: 70,
        rotate: -8,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: box,
            start: "top 80%",
        }
    });
});




/* -----------------------------------------
   THEME TOGGLE (Cute Mode ↔ Minimal Mode)
------------------------------------------ */
/* -----------------------------------------
   THEME TOGGLE (Cute → Minimal → Night)
------------------------------------------ */
/* -----------------------------------------
   THEME TOGGLE (Cute → Minimal → Night)
------------------------------------------ */
const toggleBtn = document.getElementById("themeToggle");

let mode = 0; 
// 0 = cute
// 1 = minimal
// 2 = night

toggleBtn.onclick = () => {
    mode = (mode + 1) % 3;

    if (mode === 0) {
        document.body.classList.remove("minimal", "night");
        toggleBtn.innerText = "Minimal Mode ⚫";
    }
    else if (mode === 1) {
        document.body.classList.add("minimal");
        document.body.classList.remove("night");
        toggleBtn.innerText = "Night Mode 🌙";
    }
    else if (mode === 2) {
        document.body.classList.remove("minimal");
        document.body.classList.add("night");
        toggleBtn.innerText = "Cute Mode 💖";
    }
};


/*---------------------
   GENERATE TWINKLING STARS FOR NIGHT MODE
------------------------------------------ */
function generateStars() {
    const sky = document.getElementById("nightStars");
    if (sky.children.length > 0) return; // generate once

    for (let i = 0; i < 80; i++) {
        const s = document.createElement("div");
        s.classList.add("star");
        s.style.left = Math.random() * 100 + "vw";
        s.style.top = Math.random() * 100 + "vh";
        s.style.animationDelay = Math.random() + "s";
        sky.appendChild(s);
    }
}
/* -----------------------------------------
   SHOOTING STAR RANDOMLY
------------------------------------------ */
function shootingStar() {
    if (!document.body.classList.contains("night")) return;

    const star = document.createElement("div");
    star.classList.add("shooting-star");

    star.style.top = Math.random() * 50 + "vh";
    star.style.left = Math.random() * 50 + "vw";

    document.body.appendChild(star);

    setTimeout(() => star.remove(), 1500);
}

setInterval(() => shootingStar(), 5000);



/* -----------------------------------------
   MUSIC TOGGLE BUTTON
------------------------------------------ */


/* -----------------------------------------
   ANGRY METER
------------------------------------------ */
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


/* -----------------------------------------
   REASONS GENERATOR
------------------------------------------ */
const reasons = [
    "Your smile makes everything better.",
    "You act like a cute kid with me.",
    "You get angry but you never leave.",
    "You make every boring day funny.",
    "You're my peace & chaos at the same time.",
    "Talking to you feels like home ❤️",
    "You understand me without words."
];

document.getElementById("reasonBtn").onclick = function () {
    const r = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById("reasonOutput").innerText = r;
};


/* -----------------------------------------
   DON'T CLICK BUTTON
------------------------------------------ */
document.getElementById("dontClickBtn").onclick = function () {
    alert("I KNEW you'd click 😭❤️ come here, idiot.");
};
/* -----------------------
   LITTLE MOMENTS LIGHTBOX
------------------------ */
const lmItems = document.querySelectorAll(".lm-item");

lmItems.forEach(item => {
    item.addEventListener("click", () => {
        showLightbox(item.querySelector("img").src);
    });
});

// Create lightbox container
const lb = document.createElement("div");
lb.id = "lightbox";
document.body.appendChild(lb);

function showLightbox(src) {
    lb.innerHTML = `<img src="${src}">`;
    lb.style.display = "flex";
}

lb.addEventListener("click", () => {
    lb.style.display = "none";
});
/* -----------------------------------------
   TIMELINE DOTTED PATH DRAW ANIMATION
------------------------------------------ */
gsap.fromTo(
    "#roadLine",
    { strokeDashoffset: 2000 },
    {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
            trigger: "#road-path",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    }
);
/* -----------------------------------------
   STAGE DOTS GLOW ON SCROLL
------------------------------------------ */
document.querySelectorAll(".dot").forEach((dot) => {
    ScrollTrigger.create({
        trigger: dot,
        start: "top center",
        onEnter: () => dot.classList.add("active"),
        onLeaveBack: () => dot.classList.remove("active")
    });
});

/* -----------------------------------------
   FIREWORKS + LOVE MESSAGE AT THE END
------------------------------------------ */

const fireworksCanvas = document.getElementById("fireworksCanvas");
const loveMsg = document.getElementById("loveMessage");
const ctx = fireworksCanvas.getContext("2d");

function resizeCanvas() {
    fireworksCanvas.width = window.innerWidth;
    fireworksCanvas.height = window.innerHeight;
}
resizeCanvas();
window.onresize = resizeCanvas;

let fireworks = [];

function createFirework() {
    const x = Math.random() * fireworksCanvas.width;
    const y = Math.random() * fireworksCanvas.height/2;
    const colors = ["#ff85a2", "#ffd369", "#a29bfe", "#74b9ff", "#fab1a0"];

    for (let i = 0; i < 30; i++) {
        fireworks.push({
            x,
            y,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 4 + 2,
            radius: Math.random() * 2 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 60
        });
    }
}

function renderFireworks() {
    ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

    fireworks.forEach((p, index) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) fireworks.splice(index, 1);
    });

    requestAnimationFrame(renderFireworks);
}

ScrollTrigger.create({
    trigger: ".little-moments",

    start: "top center",
    onEnter: () => {
        fireworksCanvas.style.display = "block";

        // show text
        gsap.to(loveMsg, { opacity: 1, y: -10, duration: 1 });

        // start fireworks loop
        setInterval(() => createFirework(), 400);
        renderFireworks();
    }
});

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicOn = false;

musicBtn.onclick = () => {
    musicOn = !musicOn;

    if (musicOn) {
        bgMusic.play().catch(()=>{});
        musicBtn.style.background = "#ffb3c6";
    } else {
        bgMusic.pause();
        musicBtn.style.background = "rgba(255,255,255,0.35)";
    }
};

/* UNLOCK AUDIO ON FIRST TOUCH */
document.addEventListener("click", () => {
    if (musicOn) {
        bgMusic.play().catch(()=>{});
    }
}, { once: true });

document.addEventListener("scroll", () => {
    if (!musicOn) {
        musicOn = true;
        bgMusic.play().catch(()=>{});
        musicBtn.style.background = "#ffb3c6";
    }
}, { once: true });
document.addEventListener("touchstart", () => {
    if (!musicOn) {
        musicOn = true;
        bgMusic.play().catch(()=>{});
        musicBtn.style.background = "#ffb3c6";
    }
}, { once: true });
