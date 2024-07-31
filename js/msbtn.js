document.addEventListener('DOMContentLoaded', function() {
  var spans = document.querySelectorAll('.btn-53 .letters span');
  
  var originalElement = document.querySelector('.btn-53 .original');
  
  var lettersElement = document.querySelector('.btn-53 .letters');
  
  function handleTransitionEnd(event) {
    if (event.target === spans[spans.length - 1]) {
      originalElement.style.opacity = '1';
      lettersElement.style.opacity = '0';
    }
  }

  spans.forEach(function(span) {
    span.addEventListener('transitionend', handleTransitionEnd);
  });
});
