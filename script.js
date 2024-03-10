new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  scrollingSpeed: 600,
  anchors: ["1", "2", "3", "4", "5", "6", "7"],
});

addEventListener("DOMContentLoaded", () => {
  let section = document.querySelectorAll(".section");

  section.forEach((secItem) => {
    secItem.classList.remove("fp-table");
  });
});
