let loginModal = document.getElementById('loginModal');
let signupModal = document.getElementById('signupModal');

    function showLoginModal() {
      loginModal.style.display = 'block';
    }

    function showSignupModal() {
      signupModal.style.display = 'block';
    }

    window.onclick = function(event) {
      if (event.target === loginModal) {
        loginModal.style.display = 'none';
      }
      if (event.target === signupModal) {
        signupModal.style.display = 'none';
      }
    }

    function toggleForm() {
      loginModal.style.display = (loginModal.style.display === 'none') ? 'block' : 'none';
      signupModal.style.display = (signupModal.style.display === 'none') ? 'block' : 'none';
    }