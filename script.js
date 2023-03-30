const popup = document.querySelector(".popup");
const isi = document.querySelector(".isi");
const audio = document.querySelector("#myAudio");
document.querySelector("#buka").onclick = () => {
  popup.classList.add("off");
  isi.classList.remove("isi");
  audio.autoplay = true;
  audio.load();
};
// Audio Autoplay
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

play.onclick = () => {
  audio.play();
  play.style.display = "none";
  pause.style.display = "block";
};
pause.onclick = () => {
  audio.pause();
  pause.style.display = "none";
  play.style.display = "block";
};

const inputElement = document.querySelector("#myInput");
const copyButton = document.querySelector(".copy-btn");

copyButton.addEventListener("click", function (event) {
  event.preventDefault();
  inputElement.select();
  document.execCommand("copy");
  alert("Teks sudah disalin!");
});
