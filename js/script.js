document.addEventListener("DOMContentLoaded", () => {
  /***  Declare elements  ***/
  const body = document.querySelector("body");
  const menu = document.querySelector("#main-nav-menu");
  const menuWidgets = document.querySelector("#main-nav-widgets");
  const burgerBtn = document.querySelector("#burger-btn");
  const footerForm = document.querySelector(".footer-club__form");

  /***  Elements wrapper function start  ***/
  function wrap(nodes, elementName, elementClass) {
    const element = document.createElement(elementName);
    element.classList.add(elementClass);

    nodes.forEach((node) => {
      node.parentNode.insertBefore(element, node);
      node.previousElementSibling.appendChild(node);
    });
  }
  /***  Elements wrapper function end  ***/

  /***  Elements unwrapper and element remover function start  ***/
  function unwrap(nodes, elementClass) {
    const wrapper = document.querySelector(`.${elementClass}`);
    if (wrapper) {
      nodes.forEach((node) => {
        wrapper.insertAdjacentElement("beforebegin", node);
      });
      wrapper.remove();
    }
  }
  /***  Elements unwrapper and element remover function end  ***/

  /***  Media query listener and handler start  ***/
  const mediaQuery = window.matchMedia("(max-width: 992px)");

  function handleTabletChange(e) {
    if (e.matches) wrap([menu, menuWidgets], "div", "main-nav__mobile-menu");
    else unwrap([menu, menuWidgets], "main-nav__mobile-menu");
  }

  // Run on client width changes
  mediaQuery.addEventListener("change", handleTabletChange);

  // Run on start changes
  if (mediaQuery.matches) {
    wrap([menu, menuWidgets], "div", "main-nav__mobile-menu");
  }
  /***  Media query listener and handler end  ***/

  burgerBtn.addEventListener("click", (e) => {
    const mobileMenu = document.querySelector(".main-nav__mobile-menu");
    e.currentTarget.classList.toggle("opened");
    mobileMenu.classList.toggle("show");
    body.classList.toggle("overflow-y-hidden");
  });

  // init Slider
  const swiper = new Swiper(".swiper", {
    spaceBetween: 16,
    slidesPerView: 4,
    breakpoints: {
      996: {
        slidesPerView: 4,
      },
      480: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  });

  footerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
