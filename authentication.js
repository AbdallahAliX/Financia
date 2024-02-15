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


    // Initialize Auth0 client
    // const auth0 = new auth0.WebAuth({
    //     domain: 'dev-0tctcz7jd604g3h4.us.auth0.com',
    //     clientID: '4AXx9yS74aATL1f1gfNzMt1JrbwUcxhu',
    //     redirectUri: window.location.href,
    //     responseType: 'token id_token',
    //     scope: 'openid email profile'
    // });

    // // Function to handle sign up
    // function handleSignup(event) {
    //     event.preventDefault(); // Prevent form submission
    //     const username = document.getElementById('signup_username').value;
    //     const email = document.getElementById('signup_email').value;
    //     const password = document.getElementById('signup_password').value;
        
    //     // Call Auth0's signup method
    //     auth0.signup({
    //         connection: 'Username-Password-Authentication', // Database connection name
    //         username: username,
    //         email: email,
    //         password: password
            
    //     }, function(err) {
    //         if (err) {
    //             console.error('Sign up error:', err);
    //             // Handle sign-up error (e.g., display error message to user)
    //         } else {
    //             console.log('User signed up successfully');
    //             // Optionally, redirect user to login page after successful sign up
    //             //window.location.href = '/login.html';
    //         }
    //     });
    // }

    // // Function to handle login
    // function handleLogin(event) {
    //     event.preventDefault(); // Prevent form submission
    //     const email = document.getElementById('login_email').value;
    //     const password = document.getElementById('login_password').value;

    //     // Call Auth0's login method
    //     auth0.login({
    //         realm: 'Username-Password-Authentication', // Database connection name
    //         email: email,
    //         password: password
    //     }, function(err, authResult) {
    //         if (err) {
    //             console.error('Login error:', err);
    //             // Handle login error (e.g., display error message to user)
    //         } else {
    //             console.log('User logged in successfully:', authResult);
    //             // Handle successful login (e.g., redirect user to dashboard)
    //             // Optionally, you can handle tokens or user information returned in authResult
    //         }
    //     });
    // }

    // // Add event listeners to the sign-up and login forms
    // document.getElementById('signupForm').addEventListener('submit', handleSignup);
    // document.getElementById('loginForm').addEventListener('submit', handleLogin);

  