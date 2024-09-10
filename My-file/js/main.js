let menu = document.querySelector("header > img");

let mainLinks = document.querySelectorAll(".content > .links > ul > li");

let imgHero = document.querySelector("section  aside img");

window.onload = function () {
  if (window.innerWidth <= 575) imgHero.src = "../images/image-hero-mobile.png";
  else imgHero.src = "../images/image-hero-desktop.png";
};

window.onresize = function () {
  if (window.innerWidth <= 575) imgHero.src = "../images/image-hero-mobile.png";
  else imgHero.src = "../images/image-hero-desktop.png";
};

menu.onclick = function () {
  if (!menu.classList.contains("click")) {
    menu.classList.add("click");
    menu.src = "../images/icon-close-menu.svg";
  } else {
    {
      menu.classList.remove("click");
      menu.src = "../images/icon-menu.svg";
    }
  }
};

mainLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("drop-down-list")) {
      link.classList.remove("drop-down-list");
    } else {
      mainLinks.forEach((link) => {
        link.classList.remove("drop-down-list");
      });
      link.classList.add("drop-down-list");
    }
  });
});
