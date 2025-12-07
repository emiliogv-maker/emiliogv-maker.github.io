document.addEventListener('DOMContentLoaded', function() {
  const toggleTipsBtn = document.getElementById('toggle-tips');
  const tipsCard = document.getElementById('recipe-tips');


if(toggleTipsBtn && tipsCard) {
  toggleTipsBtn.addEventListener('click', () => {
    tipsCard.classList.toggle('d-none');
  });
}

const contactForm = document.getElementById('contact-form');
if(contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if(contactForm.checkValidity()) {
      document.getElementById('form-success').classList.remove('d-none');
      contactForm.reset();
  } else {
      contactForm.classList.add('was-validated');
  }
  }, false);
}
});
