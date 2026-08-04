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

// Mobile "Service Areas" sub-menu toggle
(function() {
  const subToggle = document.getElementById('nav-mobile-sub-toggle');
  const subMenu = document.getElementById('nav-mobile-sub-menu');
  if (!subToggle || !subMenu) return;
  subToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    subToggle.classList.toggle('open');
    subMenu.classList.toggle('open');
  });
})();

function showFieldError(id, msg) {
  const input = document.getElementById(id);
  input.classList.add('cf-invalid');
  let err = input.parentElement.querySelector('.cf-field-error');
  if (!err) {
    err = document.createElement('p');
    err.className = 'cf-field-error';
    input.parentElement.appendChild(err);
  }
  err.textContent = msg;
}

function clearFieldErrors() {
  document.querySelectorAll('.cf-invalid').forEach(el => el.classList.remove('cf-invalid'));
  document.querySelectorAll('.cf-field-error').forEach(el => el.remove());
}

async function submitForm(e) {
  e.preventDefault();
  const btn    = document.getElementById('cf-btn');
  const status = document.getElementById('cf-status');

  clearFieldErrors();
  status.textContent = '';

  const first_name   = document.getElementById('cf-name').value.trim();
  const email        = document.getElementById('cf-email').value.trim();
  const phone_raw    = document.getElementById('cf-phone').value.trim();
  const message      = document.getElementById('cf-message').value.trim();

  const digits = phone_raw.replace(/\D/g, '');
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  let valid = true;
  if (digits.length < 10) { showFieldError('cf-phone', 'Please enter a valid phone number with area code.'); valid = false; }
  if (!emailOk)            { showFieldError('cf-email', 'Please enter a valid email address.'); valid = false; }
  if (!valid) return;

  // TODO: online booking isn't wired to a backend yet (no Cloudflare Worker
  // set up for this site). Until it is, don't claim success or lose the
  // lead silently — send people to the phone number instead.
  btn.disabled = true;
  btn.textContent = 'Call or Text Us Instead';
  status.textContent = "Online booking is almost ready — for now, please call or text (805) 424-5727 and we'll get you booked.";
  status.style.color = '#facc15';
}
