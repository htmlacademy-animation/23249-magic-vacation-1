export default () => {
  const pageHeader = document.querySelector(`.js-header`);

  window.addEventListener(`load`, () => {
    pageHeader.classList.remove(`page-header--loading`);
  });

  const lastRulesItem = document.querySelector(`.rules__item:last-child`);
  const rulesLink = document.querySelector(`.rules__link`);

  lastRulesItem.addEventListener(`animationend`, () => {
    rulesLink.classList.add(`rules__link--animated`);

    setTimeout(() => {
      rulesLink.classList.remove(`rules__link--animated`);
    }, 1000);
  });
};
