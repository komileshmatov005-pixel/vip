// Countdown Timer
const countdown = () => {
    const countDate = new Date("2026-06-01T00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById("timer").innerHTML = `${d} kun ${h} soat ${m} daqiqa ${s} soniya`;
};

setInterval(countdown, 1000);

// Music Play
function playMusic() {
    const audio = document.getElementById('audio');
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
