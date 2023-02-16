const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

tabContent[0].classList.add("ativo");

if (tabMenu.length && tabContent.length) {
  function activeTab(i) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[i].classList.add("ativo");
  }

  tabMenu.forEach((e, i) => {
    e.addEventListener("click", () => {
      activeTab(i);
    });
  });
}
