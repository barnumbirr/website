function initEmailLink() {
  const emailLink = document.getElementById('email');
  if (!emailLink) return;

  const originalText = emailLink.textContent;
  const emailText = 'martin AT simon.tf';

  emailLink.addEventListener('click', function(e) {
    e.preventDefault();
  });
  emailLink.addEventListener('mouseenter', function() {
    this.textContent = emailText;
  });
  emailLink.addEventListener('mouseleave', function() {
    this.textContent = originalText;
  });
}

// Auto-initialize (runs when script loads, DOM is ready since script is at bottom of body)
initEmailLink();
