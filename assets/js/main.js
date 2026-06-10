/* ===========================================================
   Grand Vue Apartments — site behaviour
   =========================================================== */
(function () {
  "use strict";

  var PHONE = "+255 719 180 380";
  var PHONE_RAW = "255719180380";
  var EMAIL = "info@grandvueapartments.com";
  var FB = "https://www.facebook.com/GrandVueApartmentsLimited";
  var IG = "https://www.instagram.com/grandvueapartments/";

  /* ---- icons (inline svg) ---- */
  var ICON = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5Z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.7 15l-1.3 5 5.1-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-1-.3-1.6-.6-2.8-1.2-4.6-4-4.8-4.2-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4 0 .5l-.4.5c-.2.2-.3.4-.1.7.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.5 2.6 1.6.3.1.5.1.6-.1l.6-.8c.2-.3.4-.2.6-.1l1.8.9c.3.1.4.2.5.3 0 .2 0 .8-.2 1.3Z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 13 4 4L19 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:1em;height:1em"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  var NAV = [
    ["index.html", "Home"],
    ["about-arusha.html", "About Arusha"],
    ["characteristics.html", "Characteristics"],
    ["apartments.html", "Apartments"],
    ["gallery.html", "Gallery"],
    ["contacts.html", "Contacts"]
  ];

  var page = document.body.getAttribute("data-page") || "index.html";

  /* ---- header ---- */
  function buildHeader() {
    var solid = document.body.hasAttribute("data-solid-header");
    var links = NAV.map(function (n) {
      var active = n[0] === page ? " active" : "";
      return '<a href="' + n[0] + '" class="' + active.trim() + '">' + n[1] + "</a>";
    }).join("");
    var html =
      '<header class="site-header' + (solid ? " solid" : "") + '">' +
        '<div class="container">' +
          '<a href="index.html" class="brand" aria-label="Grand Vue Apartments home">' +
            '<img src="assets/img/logo.png" alt="Grand Vue Apartments">' +
          "</a>" +
          '<nav class="nav" aria-label="Main menu">' + links +
            '<a href="contacts.html" class="btn btn-gold header-cta">Book a Viewing</a>' +
          "</nav>" +
          '<button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
        "</div>" +
      "</header>";
    document.body.insertAdjacentHTML("afterbegin", html);
  }

  /* ---- footer ---- */
  function buildFooter() {
    var quick = NAV.map(function (n) {
      return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>";
    }).join("");
    var html =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-top">' +
            "<div>" +
              '<img class="flogo" src="assets/img/logo.png" alt="Grand Vue Apartments">' +
              '<p class="ftagline">Luxury apartments for rent in the heart of Olorien, Arusha — where heaven meets earth.</p>' +
              '<div class="fsocial"><a href="' + IG + '" target="_blank" rel="noopener" aria-label="Instagram">' + ICON.ig + "</a>" +
              '<a href="' + FB + '" target="_blank" rel="noopener" aria-label="Facebook">' + ICON.fb + "</a>" +
              '<a href="https://wa.me/' + PHONE_RAW + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + ICON.wa + "</a></div>" +
            "</div>" +
            '<div><h4>Explore</h4><ul class="fmenu">' + quick + "</ul></div>" +
            '<div><h4>Discover</h4><ul class="fmenu">' +
              '<li><a href="apartments.html">Residences</a></li>' +
              '<li><a href="characteristics.html">Amenities</a></li>' +
              '<li><a href="gallery.html">Gallery</a></li>' +
              '<li><a href="assets/GVA-Brochure.pdf" target="_blank" rel="noopener">Download Brochure</a></li>' +
              '<li><a href="' + IG + '" target="_blank" rel="noopener">Follow on Instagram</a></li>' +
              '<li><a href="contacts.html#map">Find us on map</a></li>' +
            "</ul></div>" +
            '<div class="fcontact"><h4>Get in touch</h4>' +
              "<p>PPF AGM Building, Njiro<br>P.O. Box 421, Arusha, Tanzania</p>" +
              '<p><a href="tel:+' + PHONE_RAW + '">' + PHONE + "</a></p>" +
              '<p><a href="mailto:' + EMAIL + '">' + EMAIL + "</a></p>" +
              '<a class="btn btn-gold fbrochure" href="assets/GVA-Brochure.pdf" target="_blank" rel="noopener">Download Brochure</a>' +
            "</div>" +
          "</div>" +
          '<div class="footer-bottom">' +
            "<span>Grand Vue Apartments &copy; " + new Date().getFullYear() + "</span>" +
            "<span>Designed by architect <a href=\"https://www.sandradekusserow.com/\" target=\"_blank\" rel=\"noopener\">Sandra de Kusserow</a></span>" +
          "</div>" +
        "</div>" +
      "</footer>";
    document.body.insertAdjacentHTML("beforeend", html);
  }

  /* ---- header scroll state + mobile toggle ---- */
  function headerBehaviour() {
    var header = document.querySelector(".site-header");
    var solid = document.body.hasAttribute("data-solid-header");
    function onScroll() {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else if (!solid) header.classList.remove("scrolled");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = document.querySelector(".nav-toggle");
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- hero slider ---- */
  function heroSlider() {
    var slides = document.querySelectorAll(".hero-slide");
    if (!slides.length) return;
    var dotsWrap = document.querySelector(".hero-dots");
    var i = 0, timer;
    slides.forEach(function (s, idx) {
      var b = document.createElement("button");
      b.setAttribute("aria-label", "Slide " + (idx + 1));
      if (idx === 0) b.classList.add("active");
      b.addEventListener("click", function () { go(idx); reset(); });
      dotsWrap.appendChild(b);
    });
    var dots = dotsWrap.querySelectorAll("button");
    function go(n) {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
      i = (n + slides.length) % slides.length;
      slides[i].classList.add("active");
      dots[i].classList.add("active");
    }
    function reset() { clearInterval(timer); timer = setInterval(function () { go(i + 1); }, 6000); }
    reset();
  }

  /* ---- reveal on scroll ---- */
  function reveal() {
    var els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.14 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---- lightbox gallery ---- */
  function lightbox() {
    var items = document.querySelectorAll("[data-lightbox]");
    if (!items.length) return;
    var srcs = [], cur = 0;
    items.forEach(function (it, idx) {
      srcs.push(it.getAttribute("data-lightbox") || it.querySelector("img").src);
      it.addEventListener("click", function () { cur = idx; open(); });
    });
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML =
      '<button class="lb-close" aria-label="Close">&times;</button>' +
      '<button class="lb-nav lb-prev" aria-label="Previous">&#8249;</button>' +
      '<img alt="Grand Vue Apartments gallery image">' +
      '<button class="lb-nav lb-next" aria-label="Next">&#8250;</button>';
    document.body.appendChild(lb);
    var img = lb.querySelector("img");
    function show() { img.src = srcs[cur]; }
    function open() { show(); lb.classList.add("open"); }
    function close() { lb.classList.remove("open"); }
    lb.querySelector(".lb-close").addEventListener("click", close);
    lb.querySelector(".lb-prev").addEventListener("click", function (e) { e.stopPropagation(); cur = (cur - 1 + srcs.length) % srcs.length; show(); });
    lb.querySelector(".lb-next").addEventListener("click", function (e) { e.stopPropagation(); cur = (cur + 1) % srcs.length; show(); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") { cur = (cur + 1) % srcs.length; show(); }
      if (e.key === "ArrowLeft") { cur = (cur - 1 + srcs.length) % srcs.length; show(); }
    });
  }

  /* ---- inquiry form -> mailto ---- */
  function inquiryForm() {
    var form = document.getElementById("inquiry-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var d = new FormData(form);
      var name = (d.get("name") || "").toString().trim();
      var interest = (d.get("interest") || "").toString();
      var subject = "Website enquiry — " + (interest || "Grand Vue Apartments");
      var body =
        "Name: " + name + "\n" +
        "Email: " + (d.get("email") || "") + "\n" +
        "Phone: " + (d.get("phone") || "") + "\n" +
        "Interested in: " + interest + "\n\n" +
        "Message:\n" + (d.get("message") || "");
      window.location.href = "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      var note = form.querySelector(".form-status");
      if (note) note.textContent = "Opening your email app… if nothing happens, write to " + EMAIL + " or message us on WhatsApp.";
    });
  }

  /* ---- inject icons into placeholders ---- */
  function injectIcons() {
    document.querySelectorAll("[data-icon]").forEach(function (el) {
      var name = el.getAttribute("data-icon");
      if (ICON[name]) el.innerHTML = ICON[name];
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildHeader();
    buildFooter();
    headerBehaviour();
    injectIcons();
    heroSlider();
    reveal();
    lightbox();
    inquiryForm();
  });
})();
