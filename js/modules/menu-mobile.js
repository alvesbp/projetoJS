import outsideClick from "./outsideClick.js";
export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add("ativo");
      menuButton.classList.add("ativo");
      outsideClick(menuList, events, () => {
        menuList.classList.remove("ativo");
        menuButton.classList.remove("ativo");
      });
    }

    events.forEach((event) => menuButton.addEventListener(event, openMenu));
  }
}
