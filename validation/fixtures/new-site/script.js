"use strict";

(() => {
  const form = document.querySelector("#effort-filter");
  const fallback = document.querySelector("#filter-fallback");
  const status = document.querySelector("#result-count");
  const walks = Array.from(document.querySelectorAll(".walk-entry"));

  if (!form || !fallback || !status || walks.length === 0) return;

  const filterWalks = (effort) => {
    let count = 0;
    for (const walk of walks) {
      const matches = effort === "all" || walk.dataset.effort === effort;
      walk.hidden = !matches;
      if (matches) count += 1;
    }
    const category = effort === "all" ? "all efforts" : effort;
    status.textContent = `${count} ${count === 1 ? "walk" : "walks"} shown · ${category}`;
  };

  form.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement && event.target.name === "effort") {
      filterWalks(event.target.value);
    }
  });
  form.addEventListener("submit", (event) => event.preventDefault());

  const selected = form.querySelector('input[name="effort"]:checked');
  filterWalks(selected ? selected.value : "all");
  fallback.hidden = true;
  form.hidden = false;
})();
