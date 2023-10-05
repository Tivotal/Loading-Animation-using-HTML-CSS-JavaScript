/* Created by Tivotal */

let percent = document.querySelector(".percent");
let progress = document.querySelector(".progress");
let text = document.querySelector(".text");
let count = 4;
let per = 16;
let loading = setInterval(load, 50);

function load() {
  if (count == 100 && per == 400) {
    percent.classList.add("blink");
    text.style.display = "block";
    clearInterval(load);
  } else {
    per = per + 4;
    count = count + 1;
    progress.style.width = per + "px";
    percent.textContent = count + "%";
  }
}
