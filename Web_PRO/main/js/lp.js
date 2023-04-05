const images = [
    "lp1.png", "lp2.png", "lp3.png", "lp4.png", "lp5.png"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `images/lp/${chosenImage}`;
document.body.appendChild(bgImage);
