const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#txt_emailLogin').value.trim();
  const password = document.querySelector('#txt_passwordLogin').value.trim();

  // if (email && password) {
  //   const response = await fetch('/api/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({  email, password }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  //   if (response.ok) {
  //     document.location.replace('/');
  //   } else {
  //     alert(response.statusText);
  //   }
  // }
  if (email && password) {
    fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username: email,
        password: password
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function () {
        document.location.replace("/");
      })
      .catch(err => console.log(err));
  };
}


// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#txt_usernameSignup').value.trim();
//   const email = document.querySelector('#txt_emailSignup').value.trim();
//   const password = document.querySelector('#txt_passwordSignup').value.trim();

//   if (name && email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// document
//   .querySelector('.frm_signup')
//   .addEventListener('submit', signupFormHandler);

document
  .querySelector('.frm_login')
  .addEventListener('submit', loginFormHandler);