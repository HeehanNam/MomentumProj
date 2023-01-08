const images = ["1.jpg","2.jpg","3.jpg","4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const body = document.querySelector("body")

const backgroundImg = `url('img/${chosenImage}')`

body.style.backgroundImage = backgroundImg
body.style.backgroundSize = "1972px"