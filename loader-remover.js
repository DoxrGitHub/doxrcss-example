window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  setTimeout(function() {
    loader.classList.add('fade-out');
    setTimeout(function() {
      loader.remove();
    }, 1000);
  }, 2000);
});