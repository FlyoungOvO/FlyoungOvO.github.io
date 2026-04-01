document.addEventListener("DOMContentLoaded", () => {
  const shells = document.querySelectorAll("[data-browser-root]");

  shells.forEach((shell) => {
    const cards = Array.from(shell.querySelectorAll("[data-browser-item]"));
    const results = shell.querySelector("[data-browser-results]");
    const emptyState = shell.querySelector("[data-browser-empty]");
    const countNode = shell.querySelector("[data-browser-count]");
    const searchInput = shell.querySelector("[data-browser-search]");
    const viewButtons = shell.querySelectorAll("[data-view-target]");
    const sortButtons = shell.querySelectorAll("[data-sort-value]");
    const filterButtons = shell.querySelectorAll("[data-filter-group]");

    const state = {
      view: localStorage.getItem("blog-browser-view") || shell.dataset.view || "grid",
      search: "",
      sort: "newest",
      filters: {
        category: "",
        tag: "",
        year: "",
      },
    };

    const applyView = () => {
      shell.dataset.view = state.view;
      viewButtons.forEach((button) => {
        const active = button.dataset.viewTarget === state.view;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });
    };

    const applyFilters = () => {
      const activeCards = cards.filter((card) => {
        const haystack = [
          card.dataset.title || "",
          card.dataset.summary || "",
          card.dataset.category || "",
          card.dataset.tag || "",
          card.dataset.year || "",
        ].join(" ");

        const matchesSearch = haystack.includes(state.search);
        const matchesCategory = !state.filters.category || (card.dataset.category || "").split(" ").includes(state.filters.category);
        const matchesTag = !state.filters.tag || (card.dataset.tag || "").split(" ").includes(state.filters.tag);
        const matchesYear = !state.filters.year || card.dataset.year === state.filters.year;

        return matchesSearch && matchesCategory && matchesTag && matchesYear;
      });

      const sortedCards = activeCards.sort((a, b) => {
        if (state.sort === "oldest") return (a.dataset.date || "").localeCompare(b.dataset.date || "");
        if (state.sort === "title") return (a.dataset.title || "").localeCompare(b.dataset.title || "");
        return (b.dataset.date || "").localeCompare(a.dataset.date || "");
      });

      cards.forEach((card) => {
        card.hidden = !activeCards.includes(card);
      });

      sortedCards.forEach((card) => results.appendChild(card));

      if (countNode) countNode.textContent = String(sortedCards.length);
      if (emptyState) emptyState.hidden = sortedCards.length !== 0;
    };

    viewButtons.forEach((button) => {
      button.addEventListener("click", () => {
        state.view = button.dataset.viewTarget;
        localStorage.setItem("blog-browser-view", state.view);
        applyView();
      });
    });

    sortButtons.forEach((button) => {
      button.addEventListener("click", () => {
        state.sort = button.dataset.sortValue;
        sortButtons.forEach((node) => node.classList.toggle("is-active", node === button));
        applyFilters();
      });
    });

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const group = button.dataset.filterGroup;
        if (!group) return;
        state.filters[group] = button.dataset.filterValue || "";

        filterButtons.forEach((node) => {
          if (node.dataset.filterGroup === group) node.classList.remove("is-active");
        });
        button.classList.add("is-active");
        applyFilters();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        state.search = searchInput.value.trim().toLowerCase();
        applyFilters();
      });
    }

    applyView();
    applyFilters();
  });
});
