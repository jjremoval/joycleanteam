window.addEventListener('load', function() { if (!window.location.hash) window.scrollTo(0, 0); });

(function() {
  const hamburger = document.getElementById('nav-hamburger');
  const menu = document.getElementById('nav-mobile-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
    });
  });

  document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
    }
  });
})();

// Mobile sub-menu toggles (Service Areas and Services)
(function() {
  const toggles = document.querySelectorAll('.nav-mobile-sub-toggle');
  toggles.forEach(function(toggle) {
    const subMenu = toggle.nextElementSibling;
    if (!subMenu || !subMenu.classList.contains('nav-mobile-sub-menu')) return;

    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggle.classList.toggle('open');
      subMenu.classList.toggle('open');
    });
  });
})();

