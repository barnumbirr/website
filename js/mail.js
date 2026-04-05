function initEmailLink() {
  var emailLink = document.getElementById('email');
  if (!emailLink) return;

  var originalText = emailLink.textContent;
  var emailText = 'martin AT simon.tf';
  var showing = false;

  emailLink.addEventListener('click', function(e) {
    e.preventDefault();
    showing = !showing;
    this.textContent = showing ? emailText : originalText;
  });
  emailLink.addEventListener('mouseenter', function() {
    this.textContent = emailText;
  });
  emailLink.addEventListener('mouseleave', function() {
    if (!showing) {
      this.textContent = originalText;
    }
  });
}

// Auto-initialize (runs when script loads, DOM is ready since script is at bottom of body)
initEmailLink();
