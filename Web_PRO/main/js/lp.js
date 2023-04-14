const images = [
    "lp1.png", "lp2.png", "lp3.png", "lp4.png", "lp5.png"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
$element = document.querySelector("#page_aside>img");

$element.src = `./images/lp/${chosenImage}`;
// $element.src = `./images/myhead.jpg`;