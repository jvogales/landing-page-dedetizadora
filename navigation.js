(function () {
  "use strict";
  var header = document.querySelector(".header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (!header || !toggle || !nav) return;
  var mobile = window.matchMedia("(max-width: 600px)");
  header.classList.add("has-menu");
  toggle.hidden = false;
  function closeMenu(restoreFocus) {
    header.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    if (restoreFocus) toggle.focus();
  }
  toggle.addEventListener("click", function () {
    var open = toggle.getAttribute("aria-expanded") !== "true";
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && header.classList.contains("menu-open")) closeMenu(true);
  });
  document.addEventListener("click", function (event) {
    if (!header.contains(event.target)) closeMenu(false);
  });
  header.addEventListener("focusout", function () {
    setTimeout(function () {
      if (!header.contains(document.activeElement)) closeMenu(false);
    }, 0);
  });
  mobile.addEventListener("change", function () { closeMenu(false); });
})();
