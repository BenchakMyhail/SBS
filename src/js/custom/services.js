$(document).ready(() => {
  applyAnimations();

  $(document).scroll(() => {
    applyAnimations();
  });

  function applyAnimations() {
    $('.section-animation-trigger').each((index, trigger) => {
      var mainAnimationTrigger = $('.main-animation-trigger');
      var sectionTrigger = $(trigger);
      var mainTriggerBottom = mainAnimationTrigger.height() + mainAnimationTrigger.offset().top;
      var sectionAnimationTriggerTop = sectionTrigger.offset().top;
      var animationTriggersCheck = mainTriggerBottom >= sectionAnimationTriggerTop;
      var section = sectionTrigger.parent();

      var animatedBlocks = [
        {name: '.animated-gear', animation: 'spin'},
        {name: '.animated-tool', animation: 'fade-from-bottom'},
        {name: '.animated-message', animation: 'fade-in'},
        {name: '.animated-pen', animation: 'fade-from-bottom-30'},
        {name: '.animated-dot', animation: 'fade-in-opacity'},
        {name: '.animated-message-pm', animation: 'fade-in-opacity'},
        {name: '.animated-message-pm-white', animation: 'fade-in-with-delay '},
        {name: '.animated-line-right', animation: 'grow-right-part'},
        {name: '.animated-line-left', animation: 'grow-left-part'},
      ];

      if (animationTriggersCheck) {
        animatedBlocks.forEach(block => {
          $(section).find(block.name).addClass(block.animation);
        });
      }
    });
  }

  $('.animated-message-pm-white').on('animationend webkitAnimationEnd', e => {
    $('.animated-message-pm-white').addClass('from-left');
  });

  $('.animated-pen').on('animationend webkitAnimationEnd', () => {
    $('.animated-arc-1').attr('fill', 'url(#Gradient1)');
    $('.animated-arc-2').attr('fill', 'url(#Gradient2)');
    $("animate").each((index, element) => {
      element.beginElement();
    });
  });
});
