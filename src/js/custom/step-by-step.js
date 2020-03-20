$(document).ready(() => {
  playAnimation($('.digit:first'));

  $(document).scroll(() => {
    playAnimation($('.digit:first'));
  });

  function playAnimation(el) {
    if (window.scrollY >= 900) {
      showDiv(el);
    }
  }

  function showDiv(el) {
    el.animate({
      opacity: 1
    }, 1000, () => {
      showDiv(el.next(".digit"));
    });
  }
});
