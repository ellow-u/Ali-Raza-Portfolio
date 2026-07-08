/*=====================================
LOADER
=====================================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

        loader.style.pointerEvents="none";

    },1200);

});


/*=========================================
TYPING EFFECT
=========================================*/

const words = [

    "Web Developer",
    "Frontend Developer",
    "Responsive Designer",
    "Creative Coder"

];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(type, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(type, deleting ? 50 : 110);

}

type();


/*=========================================
MOUSE GLOW
=========================================*/

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


/*=========================================
COUNTER
=========================================*/

const counters = document.querySelectorAll("[data-count]");

let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    const trigger = window.innerHeight;

    if (stats.getBoundingClientRect().top < trigger - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.count;

            let value = 0;

            const speed = target / 70;

            function update() {

                value += speed;

                if (value < target) {

                    counter.innerHTML = Math.floor(value);

                    requestAnimationFrame(update);

                } else {

                    counter.innerHTML = target + "+";

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll", runCounters);


/*=========================================
SCROLL REVEAL
=========================================*/

const revealItems = document.querySelectorAll(

".feature,.skill-card,.service-card,.project-card,.stat-card,.about-content,.about-image"

);

function reveal() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(50px)";

    item.style.transition = ".8s";

});

window.addEventListener("scroll", reveal);

reveal();


/*=========================================
HEADER EFFECT
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,8,22,.92)";

        header.style.boxShadow =

        "0 15px 40px rgba(0,0,0,.35)";

    }

    else {

        header.style.background = "rgba(5,8,22,.70)";

        header.style.boxShadow = "none";

    }

});


/*=========================================
ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current)

            link.classList.add("active");

    });

});


/*=========================================
MOBILE MENU
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });

});


/*=========================================
SMOOTH BUTTON HOVER
=========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});


/*=========================================
PARALLAX BLOBS
=========================================*/

const blur1 = document.querySelector(".blur1");

const blur2 = document.querySelector(".blur2");

window.addEventListener("mousemove", e => {

    let x = e.clientX / window.innerWidth;

    let y = e.clientY / window.innerHeight;

    blur1.style.transform =
    `translate(${x*30}px,${y*30}px)`;

    blur2.style.transform =
    `translate(${-x*30}px,${-y*30}px)`;

});


/*==============================
EMAIL JS
==============================*/

emailjs.init("pyVj3_RkhShFL1G2c");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

e.preventDefault();

const btn = form.querySelector("button");

btn.innerHTML = "Sending...";

btn.disabled = true;

emailjs.sendForm(

"service_40kljy8",

"template_8d28bwt",

this

)

.then(()=>{

btn.innerHTML="✓ Message Sent";

btn.style.background="#22c55e";

form.reset();

setTimeout(()=>{

btn.innerHTML="Send Message";

btn.disabled=false;

btn.style.background="";

},2500);

})

.catch(()=>{

btn.innerHTML="Something went wrong";

btn.style.background="#ef4444";

setTimeout(()=>{

btn.innerHTML="Send Message";

btn.disabled=false;

btn.style.background="";

},2500);

});

});



/*=====================================
SCROLL TO TOP
=====================================*/

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
END
=========================================*/