"use strict";
document.addEventListener('click', musicPlay);
document.getElementById('overlay').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    /*Array.from(document.getElementsByClassName("text")).forEach(element => {
        typeWriterEffect(element, "now playing");
        setTimeout(() => typeWriterEffect(element, "clara la san - unplanned"), 2500);
        setTimeout(() => typeWriterEffect(element, "@devoooo"), 8000);
    });*/
}); 
function start() {
    let backgroundElements = document.getElementsByClassName("background");
    if (backgroundElements.length > 0 && typeof backgroundElements[0].play === 'function') {
        backgroundElements[0].play();
    } else {
        console.log("No playable media element found with class 'background'.");
    }
    document.removeEventListener('DOMContentLoaded', start);
}
function musicPlay() {
    var audio = document.getElementById("music");
    audio.volume = 0.05;
    audio.play();
    document.removeEventListener('click', musicPlay);
    start();
}
const typeWriterEffect = (element, text, typeSpeed = 100, eraseSpeed = 50) => {
    let currentIndex = 0;
    function eraseExistingText(callback) {
        if (element.textContent.length > 0) {
            element.textContent = element.textContent.slice(0, -1);
            setTimeout(() => eraseExistingText(callback), eraseSpeed);
        } else {
            callback(); 
        }
    }
    function type() {
        if (currentIndex < text.length) {
            element.textContent += text.charAt(currentIndex);
            currentIndex++;
            setTimeout(type, typeSpeed);
        }
    }
    eraseExistingText(type);
};
let e = ["rgba(255, 255, 255, 0.8)"],
    n = document.body,
    i = n || document.body,
    o = window.innerWidth,
    s = window.innerHeight;
const h = {
        x: o / 2,
        y: o / 2
    },
    c = {
        x: o / 2,
        y: o / 2
    },
    l = [],
    a = [];
let r, d, u;
const A = window.matchMedia("(prefers-reduced-motion: reduce)");
if (A.matches) {
    console.log("This browser has prefers reduced motion turned on, so the cursor did not init");
} else {
    r = document.createElement("canvas");
    d = r.getContext("2d");
    r.style.top = "0px";
    r.style.left = "0px";
    r.style.pointerEvents = "none";
    r.style.position = "fixed";
    i.appendChild(r);
    r.width = o;
    r.height = s;
    d.font = "21px serif";
    d.textBaseline = "middle";
    d.textAlign = "center";
    e.forEach((t) => {
        let e = d.measureText("*"),
            n = document.createElement("canvas"),
            i = n.getContext("2d");
        n.width = e.width;
        n.height = e.actualBoundingBoxAscent + e.actualBoundingBoxDescent;
        i.fillStyle = t;
        i.textAlign = "center";
        i.font = "21px serif";
        i.textBaseline = "middle";
        i.fillText("*", n.width / 2, e.actualBoundingBoxAscent);
        a.push(n);
    });
    i.addEventListener("mousemove", p);
    i.addEventListener("touchmove", f, {
        passive: true
    });
    i.addEventListener("touchstart", f, {
        passive: true
    });
    window.addEventListener("resize", g);
    v();
}
function g() {
    o = window.innerWidth;
    s = window.innerHeight;
    r.width = o;
    r.height = s;
}
function f(t) {
    if (t.touches.length > 0) {
        for (let e = 0; e < t.touches.length; e++) {
            y(t.touches[e].clientX, t.touches[e].clientY, a[Math.floor(Math.random() * a.length)]);
        }
    }
}
function p(t) {
    window.requestAnimationFrame(() => {
        if (n) {
            const e = i.getBoundingClientRect();
            h.x = t.clientX - e.left;
            h.y = t.clientY - e.top;
        } else {
            h.x = t.clientX;
            h.y = t.clientY;
        }
        y(h.x, h.y, a[Math.floor(Math.random() * e.length)]);
    });
}
function y(t, e, n) {
    const offsetX = 10;
    const offsetY = 10;
    l.push(new x(t + offsetX, e + offsetY, n));
}
function v() {
    ! function() {
        if (0 != l.length) {
            d.clearRect(0, 0, o, s);
            for (let t = 0; t < l.length; t++) l[t].update(d);
            for (let t = l.length - 1; t >= 0; t--) {
                l[t].lifeSpan < 0 && l.splice(t, 1);
            }
            if (l.length === 0) d.clearRect(0, 0, o, s);
        }
    }();
    u = requestAnimationFrame(v);
}
function x(t, e, n) {
    const i = Math.floor(30 * Math.random() + 60);
    this.initialLifeSpan = i;
    this.lifeSpan = i;
    this.velocity = {
        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
        y: 0.7 * Math.random() + 0.9
    };
    this.position = {
        x: t,
        y: e
    };
    this.canv = n;
    this.update = function(t) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.lifeSpan--;
        this.velocity.y += 0.02;
        const e = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
        t.drawImage(this.canv, this.position.x - this.canv.width / 2 * e, this.position.y - this.canv.height / 2, this.canv.width * e, this.canv.height * e);
    };
}
A.onchange = () => {
    if (A.matches) {
        r.remove();
        cancelAnimationFrame(u);
        i.removeEventListener("mousemove", p);
        i.removeEventListener("touchmove", f);
        i.removeEventListener("touchstart", f);
        window.removeEventListener("resize", g);
    } else {
        r = document.createElement("canvas");
        d = r.getContext("2d");
        r.style.position = "fixed";
        i.appendChild(r);
        r.width = o;
        r.height = s;
    }
};
