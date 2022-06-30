class ItcAccordion {
  constructor(target, config) {
    this._el =
      typeof target === "string" ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener("click", (e) => {
      const elHeader = e.target.closest(".accordion-content__header");
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector(
          ".accordion-content__item_show"
        );
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement
            ? elOpenItem.classList.toggle("accordion-content__item_show")
            : null;
        }
      }
      elHeader.parentElement.classList.toggle("accordion-content__item_show");
    });
  }
}

new ItcAccordion(document.querySelector(".accordion-content"), {
  alwaysOpen: false,
});

let headerItems = document.querySelectorAll(".accordion-content__header");

headerItems.forEach((item, index) => {
  item.innerHTML = index + 1 + ". " + item.innerHTML;
});
