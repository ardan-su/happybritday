document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const music = document.getElementById("music");
  const message = document.getElementById("message");
  const gallery = document.getElementById("gallery");
  const closing = document.getElementById("closing");

  btn.addEventListener("click", function () {
    music.play();

    message.classList.add("show");

    setTimeout(() => {
      gallery.classList.add("show");
    }, 1000);

    setTimeout(() => {
      closing.classList.add("show");
    }, 2000);
  });
});
