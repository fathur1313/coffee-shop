// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar navbar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// memutar video saat melihat dan berhenti memutar saat tidak melihat
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".video-container video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(video);
});
