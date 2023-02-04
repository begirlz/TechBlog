
function logout() {

    fetch("/api/users/logout", {
      method: "post",
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/");
        console.log("logged out")
      })
      .catch(err => console.log(err));
  }

document
  .querySelector('#logout')
  .addEventListener('click', logout);
