document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('unlock-form');
  const input = document.getElementById('code');
  const error = document.getElementById('error');

  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.toggle('active', screen.id === id);
    });
    window.scrollTo(0, 0);
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const code = input.value.trim().replace(/\s+/g, ' ').toUpperCase();

    if (code === 'BEAUTIFUL SUAR') {
      error.textContent = '';
      showScreen('reveal');
    } else {
      error.textContent = 'Wrong code, suar! Try again. 🐷';
    }
  });

  document.querySelectorAll('[data-go]').forEach(button => {
    button.addEventListener('click', () => {
      showScreen(button.dataset.go);
    });
  });

  const replay = document.getElementById('replay');

  if (replay) {
    replay.addEventListener('click', () => {
      input.value = '';
      error.textContent = '';
      showScreen('gate');
    });
  }
});
