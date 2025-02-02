function playSurprise() {
    const balloonContainer = document.getElementById("balloons");
    const song = document.getElementById("birthdaySong");

    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");

        let randomLeft = Math.random() * 100;
        let randomDelay = Math.random() * 2;
        let randomColor = `hsl(${Math.random() * 360}, 100%, 75%)`;

        balloon.style.left = randomLeft + "%";
        balloon.style.animationDelay = randomDelay + "s";
        balloon.style.background = randomColor;

        balloonContainer.appendChild(balloon);
    }

    song.play();
    alert("Selamat Ulang Tahun, Mamah! 🎉🎂💖");
}
