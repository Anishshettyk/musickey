document.addEventListener("keydown", function (kd) {
    const audio = document.querySelector(`audio[data-key="${kd.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${kd.keyCode}"]`);

    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add("play");

});

function removeTransition(e) {
    if (e.propertyName !== "transform") {
        return;
    }
    this.classList.remove("play");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));