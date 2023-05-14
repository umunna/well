window.addEventListener("DOMContentLoaded", () => {
    split();
    const scroll = new LocomotiveScroll({
      smooth: true,
      lerp: 0.09,
    });
    setTimeout(() => {
      scroll.update();
    }, 1000);
  });

  let navlinks = document.querySelectorAll("header nav a");


for (const link of navlinks) {

  link.addEventListener("click", smoothScroll);

}

function smoothScroll(event) {

  event.preventDefault();

  const href = this.getAttribute("href");


  document.querySelector(href).scrollIntoView({

    behavior: "smooth"

  });

}