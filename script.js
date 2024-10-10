document.addEventListener('click', musicPlay);
document.getElementById('overlay').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
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
    audio.volume = 0.1;
    audio.play();
    document.removeEventListener('click', musicPlay);
    start();
}