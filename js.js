function play() {
  let audio = document.getElementById("ost1");
  let pp = document.getElementById(".btn");
  if(audio.paused) {
      audio.play();
  } else {
      audio.pause();
  }
}

const btn = document.querySelector(".pp");
btn.addEventListener("click", (el) => {
    btn.classList.toggle("play");
    play();
});

let slider = document.querySelector('#volume');

slider.addEventListener('input', function() {
    let audio = document.querySelector('#ost1');
    audio.volume = this.value / 100;
});

let container = document.querySelector('.page');

let page = parseInt(window.location.pathname.split('/').pop().split('.')[0].replace('chap', ''), 10);

let minFile;
let maxFile;

switch (page) {
    case 1:
        minFile = 1;
        maxFile = 24;
        break;
    case 2:
        minFile = 25;
        maxFile = 47;
        break;
    case 3:
        minFile = 48;
        maxFile = 62;
        break;
    case 4:
        minFile = 63;
        maxFile = 89;
        break;
    case 5:
        minFile = 90;
        maxFile = 100;
        break;
    case 6:
        minFile = 101;
        maxFile = 158;
        break;
    case 7:
        minFile = 159;
        maxFile = 189;
        break;
    case 8:
        minFile = 190;
        maxFile = 204;
        break;
    case 9:
        minFile = 205;
        maxFile = 214;
        break;
    case 10:
        minFile = 215;
        maxFile = 223;
        break;
    case 11:
        minFile = 224;
        maxFile = 238;
        break;
    case 12:
        minFile = 239;
        maxFile = 249;
        break;
    case 13:
            minFile = 250;
            maxFile = 263;
            break;
    default:
        minFile = 0;
        maxFile = 263;
}

for (let i = minFile; i < maxFile + 1; i++) {
    let img = document.createElement('img');
    img.src = `Rendu/What-If-erwin${i}.jpeg`;
    container.appendChild(img);
}
    
