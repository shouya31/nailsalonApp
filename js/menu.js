window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header_wrapper");

  document
    .querySelector(".zdo_drawer_button")
    .addEventListener("click", function () {
      console.log(menu.hasAttribute("style", "display:none;"));

      if (!menu.hasAttribute("style", "display:block;")) {
        menu.setAttribute("style", "display:block;");
      } else {
        menu.setAttribute("style", "display:none;");
      }
    });
});
