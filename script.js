function switchSection(view) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const id = view === 'bundle' ? 'section-bundle' : 'section-consolidated';
  document.getElementById(id).classList.add('active');
}

function init() {
  const navBtns = document.querySelectorAll('.nav-btn');

  navBtns.forEach(btn => btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    switchSection(target);
  }));
  // default section
  switchSection('consolidated');
}

document.addEventListener('DOMContentLoaded', init);

