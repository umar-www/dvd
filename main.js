const dvdText = document.querySelector(".container");
let colorRand;

let leftElm = 0;
let topElm = 0;

let leftNum = 2;
let topNum = 3;

const text = dvdText.querySelector('p')

setInterval(() => {
  leftElm += leftNum;
  topElm += topNum;

  dvdText.style.left = `${leftElm}px`;
  dvdText.style.top = `${topElm}px`;

  if (topElm >= window.innerHeight - 150) {
    topNum -= 3;
    colorRand = Math.floor(Math.random() * 16777215).toString(16);
    text.style.color = `#${colorRand}`;
  } else if (leftElm >= window.innerWidth - 300) {
    leftNum = -3;
    colorRand = Math.floor(Math.random() * 16777215).toString(16);
    text.style.color = `#${colorRand}`;
  } else if (topElm <= 0) {
    topNum = 3;
    colorRand = Math.floor(Math.random() * 16777215).toString(16);
    text.style.color = `#${colorRand}`;
  } else if (leftElm <= 0) {
    leftNum = 2;
    colorRand = Math.floor(Math.random() * 16777215).toString(16);
    text.style.color = `#${colorRand}`;
  }
}, 10);
