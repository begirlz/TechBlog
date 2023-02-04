const login = async function (event) {
  event.preventDefault();

  const email = document.querySelector('#txt_emailLogin').value.trim();
  const password = document.querySelector('#txt_passwordLogin').value.trim();

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
  }
}

document
  .querySelector('#btn_login')
  .addEventListener('click', login);