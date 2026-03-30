document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const music = document.getElementById("music");
  const message = document.getElementById("message");
  const gallery = document.getElementById("gallery");
  const closing = document.getElementById("closing");
  const typingEl = document.getElementById("typing");

  const text = "Semoga hari kamu penuh hal kecil yang bikin kamu senyum, bahkan dari hal yang paling sederhana. Makasih udah ada sejauh ini, nemenin, dan jadi versi kamu yang selalu bisa bikin hari lebih ringan. Aku ga jago bikin kata-kata, tapi aku harap hal baik selalu dateng ke kamu. Stay happy ya 🩶";

  let i = 0;

  function typingEffect(done) {
    if (i < text.length) {
      typingEl.innerHTML += text.charAt(i);
      i++;
      setTimeout(() => typingEffect(done), 30);
    } else {
      done();
    }
  }

  btn.addEventListener("click", function () {
    music.play();

    message.classList.add("show");

    setTimeout(() => {
      message.scrollIntoView({ behavior: "smooth" });
    }, 300);

    typingEffect(() => {
      setTimeout(() => {
        gallery.classList.add("show");
        gallery.scrollIntoView({ behavior: "smooth" });
      }, 800);

      setTimeout(() => {
        closing.classList.add("show");
        closing.scrollIntoView({ behavior: "smooth" });
      }, 2000);
    });
  });
});