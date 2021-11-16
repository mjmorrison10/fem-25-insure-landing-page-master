const MenuBar = document.querySelector(".menu-bar");
const HeaderMenu = document.querySelector(".header-menu");

MenuBar.addEventListener("click", () => {
  MenuBar.children[0].classList.toggle("fa-bars");
  MenuBar.children[0].classList.toggle("fa-times");
  HeaderMenu.style.display =
    HeaderMenu.style.display == "flex" ? "none" : "flex";
});
