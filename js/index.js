function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocaleTimeString();
    //clock.style.color = 'blue';
    clock.classList.add('highlight');
}
setInterval(updateClock, 1000);