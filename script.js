function navTab() {
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
}
navTab();

function initAccordion() {
  accordionList = document.querySelectorAll(".js-accordion dt");
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
