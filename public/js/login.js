const loginFormHandler = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector("#txt_username").value.trim();
    const email = document.querySelector('#txt_email').value.trim();
    const password = document.querySelector('#txt_password').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        document.location.replace('/signup');
        alert(response.statusText);
      }
    }
  };

 document
 .querySelector('.frm_login')
 .addEventListener('submit', loginFormHandler);
