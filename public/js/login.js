const login = async function (event) {
  event.preventDefault();

  const email = document.querySelector('#txt_emailLogin').value.trim();
  const password = document.querySelector('#txt_passwordLogin').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ 
        email:email, 
        password:password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText + "\nNo email found, please sign up");
      document.location.replace('/signup');
    }
  }
}

document
  .querySelector('#btn_login')
  .addEventListener('click', login);