window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Sistema de paginación progresiva de noticias:
// - Muestra 7 inicialmente
// - "Ver más" agrega 7 más cada vez
// - "Volver" regresa al estado inicial (7 visibles)
document.addEventListener("DOMContentLoaded", function () {
  const newsItems = document.querySelectorAll("#news-list .news-item");
  const loadMoreBtn = document.getElementById("load-more");
  const resetBtn = document.getElementById("reset-news");

  const step = 7;
  let visible = step;

  function updateView() {
    newsItems.forEach((item, index) => {
      item.style.display = index < visible ? "block" : "none";
    });
  }

  loadMoreBtn.addEventListener("click", function () {
    visible += step;
    if (visible > newsItems.length) {
      visible = newsItems.length;
    }
    updateView();
  });

  resetBtn.addEventListener("click", function () {
    visible = step;
    updateView();
  });

  updateView();
});
