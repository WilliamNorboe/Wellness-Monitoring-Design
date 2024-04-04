document.querySelectorAll('.openPopup').forEach(function(button) {
    button.addEventListener('click', function() {
      var contentId = this.getAttribute('data-content');
      // Hide all popup contents
      document.querySelectorAll('.popupContent').forEach(function(content) {
        content.style.display = 'none';
      });
      // Display the corresponding content
      document.getElementById(contentId).style.display = 'block';
      document.getElementById('popupWrapper').style.display = 'block';
    });
  });
  
  document.querySelectorAll('.closePopup').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
      document.getElementById('popupWrapper').style.display = 'none';
    });
  });
  
  document.getElementById('popupWrapper').addEventListener('click', function(e) {
    if (e.target === this) {
      document.getElementById('popupWrapper').style.display = 'none';
    }
  });