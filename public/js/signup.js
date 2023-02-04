  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#txt_usernameSignup').value.trim();
    const email = document.querySelector('#txt_emailSignup').value.trim();
    const password = document.querySelector('#txt_passwordSignup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.frm_signup')
  .addEventListener('submit', signupFormHandler);