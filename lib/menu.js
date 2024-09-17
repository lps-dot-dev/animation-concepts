const initMenuFunctionality = () => {
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('open')) {
      event.target.classList.toggle('opened');
      event.stopPropagation();
    }
  });

  document.addEventListener('click', function(event) {
    if (
      event.target.classList.contains('cls')
      || event.target.classList.contains('sub-menu')
    ) {
      var openElements = document.querySelectorAll('.open');
      openElements.forEach(function(element) {
        element.classList.toggle('opened');
      });
      event.stopPropagation();
    }
  });
};

export { initMenuFunctionality };
