(function () {
  "use strict";

  var WA_BASE = "https://wa.me/5500000000000?text=";
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Marcas: pausa persistente, inclusive em dispositivos sem hover. */
  var clients = document.querySelector(".clients");
  var clientsToggle = document.querySelector(".clients__toggle");
  if (clients && clientsToggle) {
    clientsToggle.hidden = false;
    clientsToggle.addEventListener("click", function () {
      var paused = clients.classList.toggle("is-paused");
      clientsToggle.textContent = paused ? "Retomar animação" : "Pausar animação";
    });
  }

  /* Header shadow on scroll */
  var header = document.getElementById("header");
  if (header) {
    window.addEventListener(
      "scroll",
      function () {
        header.classList.toggle("is-scrolled", window.scrollY > 24);
      },
      { passive: true }
    );
  }

  /* Parallax banner */
  var parallax = document.querySelector(".parallax");
  if (parallax && !reducedMotion) {
    function updateParallax() {
      var rect = parallax.getBoundingClientRect();
      var vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      var progress = (vh - rect.top) / (vh + rect.height);
      var offset = Math.max(-24, Math.min(24, (progress - 0.5) * 48));
      parallax.style.backgroundPosition = "center calc(50% + " + offset + "px)";
    }
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);
    updateParallax();
  }

  /* Service panel tabs + dynamic WhatsApp CTA */
  var tabs = document.querySelectorAll(".panel__tab");
  var blocks = document.querySelectorAll(".panel__block");
  var panelWas = document.querySelectorAll(".panel__wa");

  function setPanelWa(serviceName) {
    if (!panelWas || !panelWas.length) return;
    var msg = encodeURIComponent("Olá, quero informações sobre " + serviceName);
    panelWas.forEach(function (el) {
      el.href = WA_BASE + msg;
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-target");
      var waLabel = tab.getAttribute("data-wa") || "";

      tabs.forEach(function (t) {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      blocks.forEach(function (b) {
        b.classList.remove("is-active");
      });

      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      var block = document.getElementById(target);
      if (block) block.classList.add("is-active");

      setPanelWa(waLabel);
    });
  });

  if (tabs.length) {
    var active = document.querySelector(".panel__tab.is-active");
    if (active) setPanelWa(active.getAttribute("data-wa") || "");
  }

  /* FAQ accordion */
  var faqItems = document.querySelectorAll(".faq__item");

  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq__btn");
    var body = item.querySelector(".faq__body");
    if (!btn || !body) return;

    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      faqItems.forEach(function (other) {
        other.classList.remove("is-open");
        var otherBtn = other.querySelector(".faq__btn");
        var otherBody = other.querySelector(".faq__body");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        if (otherBody) otherBody.style.maxHeight = "0";
      });

      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  /* Scroll reveal */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window && !reducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
